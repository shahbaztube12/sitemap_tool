const express = require('express');
const router = express.Router();
const SitemapController = require('../controller/sitemap.controller');

// ✅ Initialize database table
router.use(SitemapController.initializeDatabase);

// ✅ POST: Create website entry and crawl
router.post('/', SitemapController.createWebsite);

// ✅ GET: Get all websites
router.get('/', SitemapController.getWebsites);

// ✅ GET: Get website pages (id must be number)
router.get('/:id(\\d+)/pages', SitemapController.getWebsitePages);

// ✅ GET: Serve sitemap.xml file
router.get('/file', SitemapController.getSitemapFile);

// POST: Generate manual sitemap from React pages
router.post('/generate-manual', SitemapController.generateManualSitemap);

module.exports = router;
