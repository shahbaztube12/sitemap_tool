const express = require('express');
const router = express.Router();
const { redirectUrls, getPlans, getPlanById } = require('../controller/bulkUrlRedirection.controller');

// POST /api/bulk-url-redirection/redirect
router.post('/redirect', redirectUrls);

// GET /api/bulk-url-redirection/plans
router.get('/plans', getPlans);

// GET /api/bulk-url-redirection/plan/:id
router.get('/plan/:id', getPlanById);

module.exports = router;
