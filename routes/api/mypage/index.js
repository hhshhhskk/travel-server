const express = require('express');
const router = express.Router();
const apiMyPageHandler = require('../../../controllers/api/mypage/index');
const apiMyPageInsertHandler = require('../../../controllers/api/mypage/insert');


// 마이페이지
router.get('/:id', apiMyPageHandler)

// 마이페이지 찜목록 추가
router.post('/insert', apiMyPageInsertHandler);

  
module.exports = router;