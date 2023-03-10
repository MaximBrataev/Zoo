const express = require('express');
const AnimalList = require('../components/AnimalList');
const FormAddAnimal = require('../components/AddAnimal');

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
      admin,
    });
  } catch (error) {
    res.send(console.log(error.message));
  }
});

router.post('/animals', async (req, res) => {
  const { name, img } = req.body;

  try {
    if (name && img) {
      const animal = await Animal.create({ name, img});
      res.app.locals.animalName = animal.name;

      res.json({ html: res.renderComponent(FormAddAnimal, { animal }, { htmlOnly: true }) });
    } else {
      res.json({ message: 'заполните все поля' });
    }
  } catch (error) {
    res.send(console.log(error.message));
  }
});



router.delete('/animals/:id', async (req, res) => {
  try {
    const { id} = req.params;
    // const animal = await Animal.findOne({ where: { id: req.params.animalId } });
    if (animal.animalId === req.session.animalId) {
      const animalNum = await Animal.destroy({
        where: { id: req.params.animalId },
      });
      res.json({ animalNum });
    }
  } catch (error) {
    res.send(console.log(error.message));
  }
});

module.exports = router;
