const express = require('express');
const router = express.Router();
const { generateAnchorTexts, getPlans, getPlanById } = require('../controller/bulkAnchorTextGenerators.controller');

// POST /api/bulk-anchor-text-generators/generate
router.post('/generate', generateAnchorTexts);

// GET /api/bulk-anchor-text-generators/plans
router.get('/plans', getPlans);

// GET /api/bulk-anchor-text-generators/plan/:id
router.get('/plan/:id', getPlanById);

module.exports = router;
