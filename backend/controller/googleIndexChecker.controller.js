const axios = require('axios');

exports.checkIndexStatus = async (req, res) => {
  const { urls } = req.body;
  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ error: 'urls must be an array' });
  }

  try {
    const results = await Promise.all(urls.map(async (url) => {
      try {
        // Use Google Search API or simulate a search to check index status
        // Here, we do a simple HEAD request to check if URL is reachable
        const response = await axios.head(url, { timeout: 5000 });
        const indexed = response.status === 200;
        return { url, indexed };
      } catch (error) {
        return { url, indexed: false };
      }
    }));

    res.json({ result: results });
  } catch (error) {
    console.error('Error checking index status:', error);
    res.status(500).json({ error: 'Failed to check index status' });
  }
};
