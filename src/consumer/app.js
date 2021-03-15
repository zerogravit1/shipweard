'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');

const app = express();
var i = 0;

let logStream = fs.createWriteStream(path.join(__dirname, 'file.log'), {flags: 'a'});

morgan.token('id', function getId (req) {
  return req.id;
});

morgan.token('ip', function getIp (req) {
  return req.connection.remoteAddress;
});

morgan.token('update', ':id | :ip | :method | :url | :status | :res[content-length] | :response-time ms | :total-time[2] ms');
app.use(assignId);
app.use(morgan('update', {stream: logStream}));

/** allows express and sets structure enforcement to receive JSON data */
app.use(express.json(['strict']));

/**
 * Home route to redirect to /status
 * @name get/
 * @function
 * @param {string} path - a route path
 * @param {callback} function - express middleware
 */
app.get('/', (req, res) => {
  res.redirect('/status');
});

/**
 * Route /status used to determine server status
 * @name get/status
 * @function
 * @param {string} path - a route path
 * @param {callback} function - express middleware
 */
app.get('/status', (req, res) => {
  console.log(req.headers);
  res.status(200).send('request received');
});

/**
 * Route /producer to consume producer content
 * @name post/producer
 * @function
 * @param {string} path - a route path
 * @param {callback} function - express middleware
 */
app.post('/producer', (req, res) => {
  let data = Buffer.from(JSON.stringify(req.body));

  /**
   * A function to write req.body to filesystem
   * @function
   * @param {string} path - path and filename to write
   * @param {string} data - data written to file
   * @param {callback} function - callback function to capture error
   */
  fs.writeFile(`log_${i}`, data.toString(), (err) => {
    i++
    if (err) {
      console.error(err);
      res.send(400).send(err);
    }
    res.status(201).send('file written.')
  });
});

function assignId (req, res, next) {
  req.id = uuid.v4();
  next();
}

module.exports = app;