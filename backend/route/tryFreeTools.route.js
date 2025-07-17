const express = require('express');
const router = express.Router();
const { getToolsList } = require('../controller/tryFreeTools.controller');

// GET /api/try-free-tools/list
router.get('/list', getToolsList);

module.exports = router;
