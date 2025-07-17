const axios = require('axios');
const cheerio = require('cheerio');

const cache = new Map();

async function downloadPinterestVideo(req, res) {
  const { videoUrl, resolution } = req.body;

  if (!videoUrl) {
    return res.status(400).json({ error: 'Video URL is required' });
  }

  if (cache.has(videoUrl)) {
    console.log('Cache hit for URL:', videoUrl);
    return res.json({ downloadUrl: cache.get(videoUrl) });
  }

  // Helper function to recursively collect all candidate URLs matching keys in JSON
  function collectCandidateUrls(obj, candidates = []) {
    if (!obj || typeof obj !== 'object') return candidates;
    const keysToCheck = ['playable_url', 'video_url', 'url', 'src'];
    for (const key of keysToCheck) {
      if (obj[key] && typeof obj[key] === 'string' && obj[key].startsWith('http')) {
        candidates.push(obj[key]);
      }
    }
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        collectCandidateUrls(obj[key], candidates);
      }
    }
    return candidates;
  }

  // Helper function to filter and prioritize video URLs (e.g., .mp4)
  function findBestVideoUrl(urls) {
    if (!urls || urls.length === 0) return null;
    // Prioritize URLs ending with .mp4 or containing typical video patterns
    const videoExtensions = ['.mp4', '.mov', '.webm', '.m3u8'];
    for (const ext of videoExtensions) {
      const videoUrl = urls.find(url => url.toLowerCase().includes(ext));
      if (videoUrl) return videoUrl;
    }
    // Fallback: return first URL if no video URL found
    return urls[0];
  }

  try {
    let finalUrl = videoUrl;

    // If URL is a Pinterest short URL, resolve redirect to get full URL
    if (/^https?:\/\/pin\.it\//.test(videoUrl)) {
      const headResp = await axios.head(videoUrl, { maxRedirects: 5, validateStatus: null });
      if (headResp.status >= 300 && headResp.status < 400 && headResp.headers.location) {
        finalUrl = headResp.headers.location;
      } else if (headResp.status === 200) {
        finalUrl = videoUrl; // no redirect
      } else {
        return res.status(404).json({ error: 'Failed to resolve short URL' });
      }
    }

    // Fetch the Pinterest video page HTML
    let response;
    try {
      response = await axios.get(finalUrl);
    } catch (err) {
      console.error('Error fetching Pinterest page:', err);
      return res.status(500).json({ error: 'Failed to fetch Pinterest page' });
    }
    const html = response.data;

    // Load HTML into cheerio
    const $ = cheerio.load(html);

    // Pinterest video URLs are often in meta tags or script tags
    // Try to extract video URL from meta property og:video or og:video:url
    let videoDownloadUrl = $('meta[property="og:video"]').attr('content') || $('meta[property="og:video:url"]').attr('content');

    if (!videoDownloadUrl) {
      // Additional attempt: look for video tag source
      videoDownloadUrl = $('video > source').attr('src');
    }

    if (!videoDownloadUrl) {
      // Fallback: try to find video URL in script tags or other meta tags
      const scripts = $('script[type="application/json"]');
      for (let i = 0; i < scripts.length; i++) {
        const script = scripts[i];
        const jsonText = $(script).html();
        if (jsonText) {
          try {
            const jsonData = JSON.parse(jsonText);
            const candidateUrls = collectCandidateUrls(jsonData);
            const bestVideoUrl = findBestVideoUrl(candidateUrls);
            if (bestVideoUrl) {
              videoDownloadUrl = bestVideoUrl;
              break;
            }
          } catch (e) {
            console.error('JSON parse error in script tag:', e);
          }
        }
      }
    }

    if (!videoDownloadUrl) {
      console.error('Failed to find video URL on page:', videoUrl);
      console.error('Page snippet:', html.substring(0, 500));
      return res.status(404).json({ error: 'Could not find video URL on the page' });
    }

    // Cache the result
    cache.set(videoUrl, videoDownloadUrl);

    // Optionally, handle resolution parameter if Pinterest provides multiple resolutions
    // For now, just return the found video URL

    return res.json({ downloadUrl: videoDownloadUrl });
  } catch (error) {
    console.error('Error downloading Pinterest video:', error);
    return res.status(500).json({ error: 'Failed to download video' });
  }
}

module.exports = {
  downloadPinterestVideo,
};
