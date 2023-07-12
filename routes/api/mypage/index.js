const express = require('express');
const router = express.Router();
const apiMyPageHandler = require('../../../controllers/api/mypage/index');
const apiMyPageInsertHandler = require('../../../controllers/api/mypage/insert');
const apiMyPageDeleteHandler = require('../../../controllers/api/mypage/delete');

// 마이페이지
router.get('/:id', apiMyPageHandler)

// 마이페이지 찜목록 추가
router.post('/insert', apiMyPageInsertHandler);


// 마이페이지 찜목록 제거
router.delete('/delete', apiMyPageDeleteHandler);

  
module.exports = router;