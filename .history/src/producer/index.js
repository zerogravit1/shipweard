const http = require('http');

/** a function to randomly generate a number */
const interval = () => {
  return Math.floor(Math.random() * 5000);
}

/** sample data */
let data = JSON.stringify({
  log: 'test'
});

/** config options for posting ${data} */
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/producer',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

/**
 * a function to post data on an interval
 * @name running 
 * @param {number} duration - a value set to setInterval()
 */
const running = (duration) => {
  setInterval(() => {
    console.log(`duration: ${duration}`);
    console.log(data);

    const req = http.request(options, res => {
      console.log(`statusCode: ${res.statusCode}`);
    
      res.on('data', d => {
        process.stdout.write(d);
      });
    });
    
    req.on('error', error => {
      console.error(error);
    });

    req.write(data);
    req.end();
  }, duration);
}

running(interval());
