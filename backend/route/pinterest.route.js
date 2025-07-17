const express = require('express');
const router = express.Router();
const { downloadPinterestVideo } = require('../controller/pinterest.controller');

// POST /api/pinterest/download
router.post('/download', downloadPinterestVideo);

module.exports = router;
