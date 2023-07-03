const express = require('express');
const router  = express.Router();
const apiRouter = require('./api/index.js');


router.use('/api', apiRouter);

module.exports = router;