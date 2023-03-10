require('@babel/register');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const indexRouter = require('./routes/index.route');
const reactComponent = require('./middleware/renderComponent');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(reactComponent);

app.use('/', indexRouter);

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
  console.log(`Port ${PORT} works`);
  //   sequelize.authenticate();
});
