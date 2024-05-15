const express = require('express');
const app = express();
const fs = require('fs');

// Logging middleware
const loggingMiddleware = (req, res, next) => { 
  console.log("Logging middleware-----");
  next();
};

// Delay middleware
const delayMiddleware = (req, res, next) => {
  const start = Date.now();
  const randomDelay = Math.floor(Math.random() * 2000) + 1000; // 
  
  setTimeout(() => {
    const duration = Date.now() - start;
    const logData =`[${new Date().toISOString()}] ${req.method} ${req.url} - ${duration}ms`;
    fs.appendFileSync('access.log', logData + '\n');
    console.log(logData);
    console.log("-------Middleware ended");
    next();
  }, randomDelay);
};

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('Internal Server Error');
};

app.use(loggingMiddleware);
app.use(delayMiddleware);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Logged');
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
