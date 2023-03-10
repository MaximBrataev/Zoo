const express = require('express');

const router = express.Router();
const animalRouter = require('./animalList.route');
const registration = require('./registration');

router.use('/animals', animalRouter);
router.use('/', registration);

module.exports = router;
