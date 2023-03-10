const express = require('express');
const AnimalList = require('../components/AnimalList');

const router = express.Router();

const { Animal, Gallery } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const animals = await Animal.findAll({
      raw: true,
    });
    const gallery = await Gallery.findAll({
      raw: true,
    });
    console.log(animals);
    console.log(gallery);
    res.renderComponent(AnimalList, {
      title: 'Как назовём?',
      animals,
      gallery,
    });
  } catch (error) {
    res.send(console.log(error.message));
  }
});

module.exports = router;
