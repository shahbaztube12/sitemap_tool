const Website = require('../model/website.model');
const CrawlerService = require('../service/crawler.service');
const SitemapService = require('../service/sitemap.service');
const path = require('path');
const fs = require('fs');

class SitemapController {
  static async initializeDatabase(req, res, next) {
    try {
      await Website.createTable();
      next();
    } catch (err) {
      console.error('Database initialization failed:', err);
      res.status(500).json({ error: 'Database initialization failed' });
    }
  }

  static async createWebsite(req, res) {
    try {
      const { url } = req.body;
      const websiteId = await Website.create(req.body);
      
      const crawler = new CrawlerService(url);
      await crawler.crawl();
      const pages = crawler.getPages();
      
      // Use the provided URL as hostname for sitemap generation
      await Website.savePages(websiteId, pages);

      // Generate unique sitemap filename per website
      const sitemapFilename = `sitemap_${websiteId}.xml`;
      const sitemapFilePath = `public/${sitemapFilename}`;
      const sitemapPath = await SitemapService.generate(pages, sitemapFilePath, url);

      // Update website document with sitemapPath
      const database = await require('../db').connect();
      const websitesCollection = database.collection('websites');
      await websitesCollection.updateOne(
        { _id: websiteId },
        { $set: { sitemapPath: `/${sitemapFilename}` } }
      );

      res.status(201).json({ 
        id: websiteId,
        pages: pages.length,
        sitemap: `/${sitemapFilename}`
      });
    } catch (err) {
      console.error('Error creating website:', err.stack || err);
      res.status(500).json({ error: 'Failed to create website', details: err.message || err });
    }
  }

  static async getWebsites(req, res) {
    try {
      const websites = await Website.getAll();
      res.json(websites);
    } catch (err) {
      console.error('Error fetching websites:', err);
      res.status(500).json({ error: 'Failed to fetch websites' });
    }
  }

  static async getWebsitePages(req, res) {
    try {
      const pages = await Website.getPages(req.params.id);
      res.json(pages);
    } catch (err) {
      console.error('Error fetching pages:', err);
      res.status(500).json({ error: 'Failed to fetch pages' });
    }
  }

  static async getSitemapFile(req, res) {
    try {
      const filename = req.query.filename || 'sitemap.xml';
      const sitemapPath = path.join(__dirname, '..', 'public', filename);
      if (!fs.existsSync(sitemapPath)) {
        return res.status(404).json({ error: 'Sitemap file not found' });
      }
      res.sendFile(sitemapPath);
    } catch (err) {
      console.error('Error sending sitemap file:', err);
      res.status(500).json({ error: 'Failed to send sitemap file' });
    }
  }
}

SitemapController.generateManualSitemap = async (req, res) => {
  try {
    // List of React page filenames (without extension)
    const pageFiles = [
      'Home',
      'AboutUs',
      'AboutUsPageGenerator',
      'AdPostPage',
      'ArticleSubmissionSites',
      'BacklinkGeneratorTool',
      'BulkAnchorTextGenerators',
      'BulkUrlRedirectionTool',
      'CanonicalTagGenerator',
      'CareerGuidance',
      'CommaSeparatorTool',
      'ContactMe',
      'DigitalMarketing',
      'DirectorySubmissionSites',
      'Disclaimer',
      'dynamicpage',
      'GoogleCoreUpdates',
      'GoogleIndexChecker',
      'GuestPostSites',
      'ImageCompressor',
      'ImageSubmissionSites',
      'InstagramReelDownloader',
      'MobileFriendlyTesterTool',
      'NotFound',
      'PinterestDownloader',
      'PrivacyPolicy',
      'SeoAudit',
      'SeoCompanyJanakpuri',
      'SeoGuides',
      'SeoOptimizedPage',
      'SeoServicesDelhi',
      'SeoServicesLaxmiNagar',
      'SeoServicesNoida',
      'SeoServicesRohini',
      'Sitemap',
      'SitemapTool',
      'SocialBookmarkingSites',
      'TermsAndConditions',
      'TryFreeTools',
      'UrlDomainExtractor',
      'VideoSubmissionSites',
      'WhatsAppChatLink',
      'WriteForUs',
      'YouTubeShortsDownloader',
      'YouTubeTagGenerator',
      'YouTubeTranscriptTool',
      'YouTubeVideoTagsExtractor'
    ];

    // Convert page filenames to URLs
    const pages = pageFiles.map(page => {
      let urlPath = '/' + page.toLowerCase();
      if (page.toLowerCase() === 'home') urlPath = '/';
      if (page.toLowerCase() === 'notfound') return null; // exclude NotFound page
      if (page.toLowerCase() === 'dynamicpage') return null; // exclude dynamicpage or handle separately if needed
      return { url: urlPath };
    }).filter(Boolean);

    const sitemapPath = require('path').join('public', 'sitemap_manual.xml');
    await SitemapService.generate(pages, sitemapPath, 'https://yourdomain.com');

    res.status(200).json({ message: 'Manual sitemap generated', sitemap: '/' + require('path').basename(sitemapPath) });
  } catch (err) {
    console.error('Error generating manual sitemap:', err);
    res.status(500).json({ error: 'Failed to generate manual sitemap', details: err.message || err });
  }
};

module.exports = SitemapController;
