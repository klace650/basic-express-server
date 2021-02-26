'use strict';

const express = require('express');
const app = express();
require('dotenv');

function start(PORT){
  app.listen(PORT, () => {
    console.log(`Listening for something on ${PORT}`);
  });
}

module.exports = {
  server: app,
  start: start
};