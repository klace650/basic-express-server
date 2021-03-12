'use strict';

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// Middleware
const err404 = require('./error-handlers/404.js');
const err500 = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js')
const validator = require('./middleware/validator.js');

// 3rd Party
app.use(express.json());
app.use(logger);


// Person Route
app.get('/person', validator, (req, res) => {
  let name = req.query.name;
  res.status(200).json({name: name});
});

// Error Routes
app.use('*', err404);
app.use(err500);

function start(PORT){
  app.listen(PORT, () => {
    console.log(`Listening for something on ${PORT}`);
  });
}

module.exports = {
  server: app,
  start: start
};

