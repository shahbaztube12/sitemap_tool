const axios = require('axios');

const cache = new Map();

async function downloadInstagramVideo(req, res) {
  const { videoUrl } = req.body;

  if (!videoUrl) {
    return res.status(400).json({ error: 'Video URL is required' });
  }

  if (cache.has(videoUrl)) {
    console.log('Cache hit for URL:', videoUrl);
    return res.json({ downloadUrl: cache.get(videoUrl) });
  }

  try {
    // Fetch the Instagram page HTML
    const response = await axios.get(videoUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml',
      },
    });

    const html = response.data;

    // Extract JSON data from the HTML using regex
    const jsonDataMatch = html.match(/<script type="text\/javascript">window\._sharedData = (.+);<\/script>/);
    if (!jsonDataMatch) {
      throw new Error('Could not find Instagram JSON data in page');
    }

    const jsonData = JSON.parse(jsonDataMatch[1]);

    // Navigate the JSON to find the video URL
    let videoUrlDirect = null;
    try {
      const media = jsonData.entry_data.PostPage[0].graphql.shortcode_media;
      if (media.is_video) {
        videoUrlDirect = media.video_url;
      } else if (media.edge_sidecar_to_children) {
        // If multiple videos/images, pick the first video
        const edges = media.edge_sidecar_to_children.edges;
        for (const edge of edges) {
          if (edge.node.is_video) {
            videoUrlDirect = edge.node.video_url;
            break;
          }
        }
      }
    } catch (e) {
      throw new Error('Failed to extract video URL from Instagram JSON data');
    }

    if (!videoUrlDirect) {
      throw new Error('No video URL found in Instagram post');
    }

    cache.set(videoUrl, videoUrlDirect);
    return res.json({ downloadUrl: videoUrlDirect });
  } catch (error) {
    console.error('Error resolving Instagram video URL:', error.message || error);
    return res.status(500).json({ error: 'Failed to resolve video URL' });
  }
}

module.exports = {
  downloadInstagramVideo,
};
