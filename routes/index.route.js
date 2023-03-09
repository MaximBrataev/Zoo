const express = require('express');
const router = express.Router();
const animalRouter = require('./animalList.route');

router.use('/animals', animalRouter);

module.exports = router;
