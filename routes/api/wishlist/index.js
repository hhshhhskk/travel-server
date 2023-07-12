const express = require('express');
const router = express.Router();
const apiWishListHandler = require('../../../controllers/api/wishlist');


// 찜목록 체크

router.get('/:id/:contentid', apiWishListHandler)
  
module.exports = router;