const express = require('express');
const router  = express.Router();
const apiUserInfoRouter = require('./userinfo/index');
const apiSignUpRouter = require('./signup/index');
const apiLoginRouter = require('./login/index');
const apiMyPageRouter = require('./mypage/index');
const apiWishListRouter = require('./wishlist/index');
const apiSignOutRouter = require('./signout/index');


router.use('/userinfo', apiUserInfoRouter);
router.use('/wishlist', apiWishListRouter);
router.use('/signup', apiSignUpRouter);
router.use('/login', apiLoginRouter);
router.use('/mypage', apiMyPageRouter);
router.use('/signout', apiSignOutRouter);

module.exports = router;