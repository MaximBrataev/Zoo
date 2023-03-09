require('@babel/register');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
// const { sequelize } = require('./db/models/index');

const app = express();
const route1 = require('./routes/route1');
const reactComponent = require('./middleware/renderComponent');

app.use(morgan('dev'));
app.use(reactComponent);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', route1);

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
  console.log(`Port ${PORT} works`);
  //   sequelize.authenticate();
});
