const express = require('express');
const AnimalList = require('../components/AnimalList');

const router = express.Router();

const { Animal, Gallery, Admin } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const animals = await Animal.findAll({
      raw: true,
    });
    const gallery = await Gallery.findAll({
      raw: true,
    });
    const admin = await Admin.findAll({ raw: true });
    res.renderComponent(AnimalList, {
      title: 'Урюпиский Государственный',
      animals,
      gallery,
      admin
    });
  } catch (error) {
    res.send(console.log(error.message));
  }
});

module.exports = router;
