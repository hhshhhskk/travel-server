const express = require('express');
const router = express.Router();
const apiUserInfoHandler = require('../../../controllers/api/userinfo');


// 회원정보

router.post('/', apiUserInfoHandler)
  
module.exports = router;