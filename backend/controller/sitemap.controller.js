const Website = require('../model/website.model');
const CrawlerService = require('../service/crawler.service');
const SitemapService = require('../service/sitemap.service');

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
      
      await Website.savePages(websiteId, pages);
      const sitemapPath = await SitemapService.generate(pages);
      
      res.status(201).json({ 
        id: websiteId,
        pages: pages.length,
        sitemap: sitemapPath
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
}

module.exports = SitemapController;
