const express = require('express');
const router = express.Router();
const { checkIndexStatus } = require('../controller/googleIndexChecker.controller');

// POST /api/google-index-checker/check
router.post('/check', checkIndexStatus);

module.exports = router;
