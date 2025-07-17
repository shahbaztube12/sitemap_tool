const express = require('express');
const router = express.Router();
const viralpromptController = require('../controller/viralprompt.controller');

router.get('/generate', viralpromptController.generatePrompt);

module.exports = router;
