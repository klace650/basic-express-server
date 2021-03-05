'use strict';

const express = require('express');
const app = express();
require('dotenv');

app.get('/test', (req, res) => {
  res.json({mgs: 'this route works'});
});

function start(PORT){
  app.listen(PORT, () => {
    console.log(`Listening for something on ${PORT}`);
  });
}

module.exports = {
  server: app,
  start: start
};