const express = require('express');
const router = express.Router();
const apiSignUpHandler = require('../../../controllers/api/signup');


// 회원가입

router.post('/', apiSignUpHandler)
  
module.exports = router;