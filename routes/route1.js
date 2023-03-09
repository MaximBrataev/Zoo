const express = require('express');
const router = express.Router();
const Layout = require('../components/Layout');
const renderComponent = require('../middleware/renderComponent');

router.get('/', async (req, res) => {
  try {
    // const students = await Student.findAll({ raw: true });
    // console.log(req.cookies);
    res.renderComponent(Layout, { title: 'Зоопарк' });
  } catch (error) {
    res.send(console.log(error.message));
  }
});

module.exports = router;

