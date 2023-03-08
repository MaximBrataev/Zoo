require('@babel/register');
const express = require('express');
// const { sequelize } = require('./db/models/index');
const app = express();

const morgan = require('morgan');

const route1 = require('./routes/route1');
const reactComponent = require('./middleware/renderComponent');

app.use(morgan('dev'));
app.use(reactComponent);
app.use('/', route1);

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
  console.log(`Port ${PORT} works`);
  //   sequelize.authenticate();
});
