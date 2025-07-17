const ytdl = require('@distube/ytdl-core');
const axios = require('axios');
const child_process = require('child_process');

const cache = new Map();

async function downloadYouTubeVideo(req, res) {
  const { videoUrl } = req.body;

  if (!videoUrl) {
    return res.status(400).json({ error: 'Video URL is required' });
  }

  if (cache.has(videoUrl)) {
    console.log('Cache hit for URL:', videoUrl);
    return res.json({ downloadUrl: cache.get(videoUrl) });
  }

  try {
    // Validate URL
    if (!ytdl.validateURL(videoUrl)) {
      return res.status(400).json({ error: 'Invalid YouTube video URL' });
    }

    // Get video info
    const info = await ytdl.getInfo(videoUrl);

    // Filter formats for video with audio and mp4 container
    const formats = ytdl.filterFormats(info.formats, 'videoandaudio').filter(f => f.container === 'mp4');

    if (!formats || formats.length === 0) {
      return res.status(404).json({ error: 'No suitable video format found' });
    }

    // Sort by quality (bitrate) descending
    formats.sort((a, b) => (b.bitrate || 0) - (a.bitrate || 0));

    const bestFormat = formats[0];

    const downloadUrl = bestFormat.url;

    // Cache the result
    cache.set(videoUrl, downloadUrl);

    return res.json({ downloadUrl });
  } catch (error) {
    console.error('Error downloading YouTube video:', error);
    // Fallback: use yt-dlp CLI to download video asynchronously
    downloadVideo(videoUrl);
    return res.status(202).json({ message: 'Download started using fallback method' });
  }
}

async function proxyYouTubeVideo(req, res) {
  const videoUrl = req.query.url;
  if (!videoUrl) {
    return res.status(400).json({ error: 'Missing url query parameter' });
  }
  try {
    // Stream the video content from the videoUrl to the client
    const response = await axios({
      method: 'get',
      url: videoUrl,
      responseType: 'stream',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0 Safari/537.36',
        'Referer': 'https://www.youtube.com/',
      },
    });

    // Set headers from the proxied response to the client
    res.setHeader('Content-Type', response.headers['content-type'] || 'application/octet-stream');
    res.setHeader('Content-Length', response.headers['content-length'] || '');
    res.setHeader('Accept-Ranges', response.headers['accept-ranges'] || 'bytes');

    // Pipe the video stream to the client
    response.data.pipe(res);
  } catch (error) {
    console.error('Error proxying YouTube video:', error.message || error);
    res.status(500).json({ error: 'Failed to proxy video' });
  }
}

function downloadVideo(url) {
  child_process.exec(`yt-dlp -f bestvideo+bestaudio --merge-output-format mp4 ${url}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing yt-dlp: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

module.exports = {
  downloadYouTubeVideo,
  proxyYouTubeVideo,
};
