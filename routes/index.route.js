const express = require('express');

const router = express.Router();
const animalRouter = require('./animalList.route');
const registration = require('./registration');
const aboutRouter = require('./aboutRoute');

const animalDescription = require('./animalDescription.route');

router.use('/animals', animalRouter);
router.use('/animals/description', animalDescription);

router.use('/', registration);
router.use('/about', aboutRouter);

module.exports = router;
