const express = require('express');
const router = express.Router();
const apiLoginHandler = require('../../../controllers/api/login');


// 로그인
router.post('/', apiLoginHandler);
  
module.exports = router;