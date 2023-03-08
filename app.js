require('@babel/register');
const express = require('express');
// const { sequelize } = require('./db/models/index');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Port ${PORT} works`);
  //   sequelize.authenticate();
});
