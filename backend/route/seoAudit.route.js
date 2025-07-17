const express = require('express');
const router = express.Router();
const SeoAuditController = require('../controller/seoAudit.controller');

// POST: Perform SEO audit on given URL
router.post('/audit', SeoAuditController.audit);

module.exports = router;
