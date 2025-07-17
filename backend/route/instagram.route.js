const express = require('express');
const router = express.Router();
const { downloadInstagramVideo } = require('../controller/instagram.controller');

// POST /api/instagram/download
router.post('/download', downloadInstagramVideo);

module.exports = router;
