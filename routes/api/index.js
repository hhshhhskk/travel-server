const express = require('express');
const router  = express.Router();
const apiUserInfoRouter = require('./userinfo/index');
const apiSignUpRouter = require('./signup/index');
const apiLoginRouter = require('./login/index');
// import apiEconomyRouter from './economy/index.js';


router.use('/userinfo', apiUserInfoRouter);
router.use('/signup', apiSignUpRouter);
router.use('/login', apiLoginRouter);
// router.use('/economy', apiEconomyRouter);

module.exports = router;