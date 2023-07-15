const express = require('express');
const router = express.Router();
const apiSignOutHandler = require('../../../controllers/api/signout');


// 회원탈퇴
router.delete('/delete', apiSignOutHandler);
  
module.exports = router;