const express = require('express');
const router = express.Router();
const apiChatGptHandler = require('../../../controllers/api/chatGpt');


// 챗-지피티

router.post('/', apiChatGptHandler)
  
module.exports = router;