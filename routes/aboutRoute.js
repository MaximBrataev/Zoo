const express = require('express');
const AboutZoo = require('../components/AboutZoo');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    res.renderComponent(AboutZoo, { title: 'О зоопарке' });
  } catch (error) {
    res.send(console.log(error.message));
  }
});

module.exports = router;
