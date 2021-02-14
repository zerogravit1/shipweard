// prototype concept of producer

const interval = () => {
  return Math.floor(Math.random() * 5000);
}

// const output = (duration) => {
  // console.log(`running...${duration}`);
// }

// const running = (duration) => {
  // setInterval(() => {
    // output(duration)
  // }, duration);
// }
// 
// running(interval());

// http output for producer

const http = require('http');

let data = JSON.stringify({
  log: 'test'
});

const options = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '/producer',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

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
