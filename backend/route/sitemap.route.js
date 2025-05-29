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

module.exports = router;
