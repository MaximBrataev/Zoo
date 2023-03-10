const express = require('express');
const bcrypt = require('bcrypt');
const Registration = require('../components/Registration');
const { Admin } = require('../db/models');

const router = express.Router();

router.get('/admin/login', (req, res) => {
  res.renderComponent(Registration, { title: 'Вход администратора' });
});

router.post('/admin/login', async (req, res) => {
  try {
    const { password, password2, email } = req.body;

    if (password && password2 && email) {
      if (password === password2) {
        const admin = await Admin.findOne({ where: { email } });

        if (admin) {
          const validPass = await bcrypt.compare(password, admin.password);
          if (validPass && admin.email === email) {
            res.json({ message: 'ok' });
          }
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

// router.get('/admin/logout', (req, res) => {
//   req.session.destroy((error) => {
//     if (error) {
//       return res.status(500).json({ message: 'Ошибка при удалении сессии' });
//     }
//     res.app.locals = {};
//     res.clearCookie('user_sid').redirect('/');
//   });
// });

module.exports = router;
