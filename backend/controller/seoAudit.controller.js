const axios = require('axios');
const cheerio = require('cheerio');

class SeoAuditController {
  static async audit(req, res) {
    try {
      const { url } = req.body;
      if (!url) {
        return res.status(400).json({ error: 'URL is required' });
      }

      // Fetch the page HTML
      const response = await axios.get(url);
      const html = response.data;

      // Load HTML into cheerio for parsing
      const $ = cheerio.load(html);

      // Basic SEO checks
      const title = $('title').text() || 'No title tag found';
      const metaDescription = $('meta[name="description"]').attr('content') || 'No meta description found';
      const h1Tags = $('h1').map((i, el) => $(el).text()).get();
      const h2Tags = $('h2').map((i, el) => $(el).text()).get();

      // Check for canonical tag
      const canonicalTag = $('link[rel="canonical"]').attr('href') || null;

      // Check for alt attributes on images
      const images = $('img');
      let imagesWithoutAlt = 0;
      images.each((i, el) => {
        if (!$(el).attr('alt') || $(el).attr('alt').trim() === '') {
          imagesWithoutAlt++;
        }
      });

      // Simple audit grade calculation
      let grade = 'C';
      const recommendations = [];

      // Title length check
      if (title.length >= 50 && title.length <= 60) {
        grade = 'B';
      } else {
        recommendations.push({
          text: 'Increase length of title tag',
          category: 'On-Page SEO',
          priority: 'Medium Priority',
        });
      }

      // Meta description length check
      if (metaDescription.length >= 120 && metaDescription.length <= 160) {
        if (grade === 'B') grade = 'A';
      } else {
        recommendations.push({
          text: 'Lengthen meta description (to between 120 and 160 characters)',
          category: 'On-Page SEO',
          priority: 'Medium Priority',
        });
      }

      // Canonical tag check
      if (!canonicalTag) {
        recommendations.push({
          text: 'Add Canonical Tag',
          category: 'On-Page SEO',
          priority: 'Medium Priority',
        });
      }

      // Images alt attribute check
      if (imagesWithoutAlt > 0) {
        recommendations.push({
          text: 'Add Alt attributes to all images',
          category: 'On-Page SEO',
          priority: 'Low Priority',
        });
      }

      // Placeholder for social links recommendations
      recommendations.push(
        { text: 'Create and link your Facebook Page', category: 'Social', priority: 'Low Priority' },
        { text: 'Create and link your X profile', category: 'Social', priority: 'Low Priority' },
        { text: 'Create and link associated Instagram profile', category: 'Social', priority: 'Low Priority' },
        { text: 'Create and link an associated YouTube channel', category: 'Social', priority: 'Low Priority' },
        { text: 'Create and link an associated LinkedIn profile', category: 'Social', priority: 'Low Priority' },
        { text: 'Setup & Install a Facebook Pixel', category: 'Social', priority: 'Low Priority' }
      );

      // Placeholder for other recommendations
      recommendations.push(
        { text: 'Use your main keywords across the important HTML tags', category: 'On-Page SEO', priority: 'Low Priority' },
        { text: 'Make use of HTTP/2+ protocol', category: 'Performance', priority: 'Low Priority' },
        { text: 'Optimize your page for Mobile PageSpeed Insights', category: 'Usability', priority: 'Low Priority' },
        { text: 'Add a DMARC mail record', category: 'Other', priority: 'Low Priority' },
        { text: 'Add an SPF record', category: 'Other', priority: 'Low Priority' },
        { text: 'Implement an analytics tracking tool', category: 'On-Page SEO', priority: 'Low Priority' },
        { text: 'Add Schema Markup', category: 'On-Page SEO', priority: 'Low Priority' },
        { text: 'Please add Facebook Open Graph Tags', category: 'Social', priority: 'Low Priority' },
        { text: 'Add X Cards', category: 'Social', priority: 'Low Priority' },
        { text: 'Add business address and phone number', category: 'Other', priority: 'Low Priority' },
        { text: 'Add Local Business Schema', category: 'Other', priority: 'Low Priority' }
      );

      // Placeholder for page speed score (could integrate with external API)
      const pageSpeedScore = 'Not implemented';

      // Construct audit report
      const report = {
        title,
        metaDescription,
        h1Tags,
        h2Tags,
        canonicalTag,
        imagesWithoutAlt,
        pageSpeedScore,
        grade,
        recommendations,
      };

      res.json({ url, report });
    } catch (error) {
      console.error('SEO Audit error:', error.message || error);
      res.status(500).json({ error: 'Failed to perform SEO audit', details: error.message || error });
    }
  }
}

module.exports = SeoAuditController;
