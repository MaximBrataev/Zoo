const express = require('express');
const AnimalList = require('../components/AnimalList');

const router = express.Router();

const { Animal } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const animals = await Animal.findAll({
      raw: true,
      include: { model: 'Galleries' },
    });

    res.renderComponent(AnimalList, {
      title: 'Как назовём?',
      animals,
    });
  } catch (error) {
    res.send(console.log(error.message));
  }
});
