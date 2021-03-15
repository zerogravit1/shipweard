'use strict';

const app = require('./app');

/** a function to start the server */
app.listen(3000, () => {
  console.log('listening');
});