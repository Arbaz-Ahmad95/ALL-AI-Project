const express = require('express');
const router = express.Router();
const { askQuestion } = require('../controllers/aiController');

router.post('/ask', askQuestion);

module.exports = router;