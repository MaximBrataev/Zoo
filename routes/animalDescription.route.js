const express = require('express');
const AnimalDescription = require('../components/AnimalDescription');
const { Animal, Gallery } = require('../db/models');

const router = express.Router();

router.get('/animals/', async (req, res) => {
  try {
    const animals = await Animal.findAll({
      raw: true,
    });
    const gallery = await Gallery.findAll({
      raw: true,
    });
  } catch (error) {
    res.send(console.log(error.message));
  }
});

module.exports = router;
