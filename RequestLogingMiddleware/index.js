const express = require('express');
const morgan = require('morgan');
const app = express();
const fs = require("fs")


app.use(morgan(function (tokens, req, res) {
  const data = [
    tokens.url(req, res),
    tokens.method(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
  fs.appendFile('morgan.log',data+"\n",(err)=>{
    if (err) {
      console.error('Error writing to log file:', err);
    }
  })
  return data;
}));

//without external package
const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const { method, url, ip } = req;
  const logData = `${timestamp} - ${ip} - ${method} ${url}\n`;
  fs.appendFile('logger.log', logData, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
  next(); 
};

app.use(requestLogger);

// routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/order', (req, res) => {
  res.send('Order Placed');
});

app.get('/order/cancel', (req, res) => {
  res.send('Order Cancel');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});