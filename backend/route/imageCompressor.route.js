const express = require('express');
const multer = require('multer');
const router = express.Router();
const { compressImage } = require('../controller/imageCompressor.controller');

const upload = multer({ dest: 'uploads/' });

// POST /api/image-compressor/compress
router.post('/compress', upload.single('image'), compressImage);

module.exports = router;
