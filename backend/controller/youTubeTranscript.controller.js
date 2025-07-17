const { getTranscript } = require('youtube-transcript');
const { URL } = require('url');

exports.getTranscript = async (req, res) => {
  let { videoUrl } = req.body;

  if (!videoUrl) {
    return res.status(400).json({ error: 'videoUrl is required' });
  }

  // Remove additional query parameters beyond the video ID
  videoUrl = videoUrl.split('&')[0];

  let videoId;

  try {
    const parsedUrl = new URL(videoUrl);

    if (parsedUrl.hostname.includes('youtube.com')) {
      videoId = parsedUrl.searchParams.get('v');
    }

    if (!videoId && parsedUrl.hostname.includes('youtu.be')) {
      videoId = parsedUrl.pathname.split('/')[1];
    }

    if (!videoId) {
      return res.status(400).json({ error: 'Invalid YouTube video URL' });
    }
  } catch (err) {
    return res.status(400).json({ error: 'Invalid URL format', details: err.message });
  }

  try {
    const transcript = await getTranscript(videoId);

    if (!transcript || transcript.length === 0) {
      return res.status(404).json({ error: 'No transcript available for this video' });
    }

    const transcriptText = transcript.map(item => item.text).join('\n');

    return res.json({ transcript: transcriptText });
  } catch (error) {
    console.error('Error fetching transcript:', error);
    return res.status(500).json({
      error: 'Failed to fetch transcript',
      details: error?.message || 'Unknown error',
    });
  }
};
