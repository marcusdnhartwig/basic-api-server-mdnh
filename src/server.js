'use strict';

const express = require('express');
const logger = require('./middleware/logger');
const foodRoute = require('./routes/food');
const clothesRoute = require('./routes/clothes');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const app = express();
app.use(logger);
app.use(express.json());

app.use(foodRoute);
app.use(clothesRoute);

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.status(200).send('This is the server.');
});

app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port ', PORT)),
};
