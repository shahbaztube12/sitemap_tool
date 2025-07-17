const express = require('express');
const router = express.Router();
const writeForUsController = require('../controller/writeForUs.controller');

router.post('/submit', writeForUsController.submitBlogPost);

module.exports = router;
