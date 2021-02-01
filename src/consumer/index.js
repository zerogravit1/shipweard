'use strict';

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.redirect('/status');
});

app.get('/status', (req, res) => {
  console.log(req.headers);
  res.status(200).send('request received');
});

app.post('/producer', (req, res) => {
  let timestamp = new Date().toLocaleString();
  fs.writeFile(`log_${timestamp}`, req.body, (err) => {
    if (err) {
      throw err;
    }
    console.log('file written.');
  });
});

app.listen(3000, '127.0.0.1', () => {
  console.log('listening');
});