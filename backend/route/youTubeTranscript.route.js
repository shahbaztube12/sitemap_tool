const express = require('express');
const router = express.Router();
const { getTranscript } = require('../controller/youTubeTranscript.controller');

// POST /api/youtube-transcript/get
router.post('/get', getTranscript);

module.exports = router;
