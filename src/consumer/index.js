'use strict';

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
var i = 0;

app.use(express.json(['strict']));

app.get('/', (req, res) => {
  res.redirect('/status');
});

app.get('/status', (req, res) => {
  console.log(req.headers);
  res.status(200).send('request received');
});

app.post('/producer', (req, res) => {
  let data = Buffer.from(JSON.stringify(req.body));
  console.log(data.toString());

  fs.writeFile(`log_${i}`, data.toString(), (err) => {
    i++
    if (err) {
      console.error(err);
      res.send(400).send(err);
    }
    res.status(201).send('file written.')
  });
});

app.listen(3000, () => {
  console.log('listening');
});