'use strict';

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.json(['strict']));

app.get('/', (req, res) => {
  res.redirect('/status');
});

app.get('/status', (req, res) => {
  console.log(req.headers);
  res.status(200).send('request received');
});

app.post('/producer', (req, res) => {
  let timestamp = new Date().toString();
  let data = JSON.stringify(req.body);

  console.log(data);

  fs.writeFile(`log_${timestamp}`, data, (err) => {
    if (err) {
      throw err;
    }
    console.log('file written.');
  });
});

app.listen(3000, () => {
  console.log('listening');
});