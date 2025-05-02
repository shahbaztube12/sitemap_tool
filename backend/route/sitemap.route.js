const express = require('express');
const router = express.Router();
const SitemapController = require('../controller/sitemap.controller');

// Initialize database table
router.use(SitemapController.initializeDatabase);

// Create website entry and crawl
router.post('/', SitemapController.createWebsite);

// Get all websites
router.get('/', SitemapController.getWebsites);

// Get website pages
router.get('/:id/pages', SitemapController.getWebsitePages);

module.exports = router;
