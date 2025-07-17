const express = require('express');
const router = express.Router();
const { downloadYouTubeVideo, proxyYouTubeVideo } = require('../controller/youtube.controller');

// POST /api/youtube/download
router.post('/download', downloadYouTubeVideo);

// GET /api/youtube/proxy
router.get('/proxy', proxyYouTubeVideo);

module.exports = router;
