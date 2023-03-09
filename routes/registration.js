const express = require('express');
const bcrypt = require('bcrypt');
const Registration = require('../components/Registration');
const { User: Admin } = require('../db/models');

const router = express.Router();

router.get('/reg', (req, res) => {
  res.renderComponent(Registration, { title: 'Вход администратора' });
});

router.post('/reg', async (req, res) => {
  try {
    const { password, password2, name, email } = req.body;
    if (password && password2 && name && email) {
      if (password === password2) {
        const emailUser = await Admin.findOne({ where: { email } });
        if (!emailUser) {
          const hash = await bcrypt.hash(password, 10);
          const newUser = await Admin.create({ name, email, password: hash });
          req.session.userId = newUser.id;
          res.json({ message: 'ok' });
        } else {
          res.json({ message: 'Такой email уже существует' });
        }
      } else {
        res.json({ message: 'Ваши пароли не совпадают' });
      }
    } else {
      res.json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res.app.locals = {};
    res.clearCookie('user_sid').redirect('/');
  });
});

module.exports = router;
