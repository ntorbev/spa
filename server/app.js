const hostname = '127.0.0.1';
const port = 3000;
const request = require('request');
const express = require('express');
const app = express();
const server = require('http').Server(app);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
  next();
});
app.get("/photos", (req, res, next) => {
  request('https://jsonplaceholder.typicode.com/photos', { json: true }, (err, ress, body) => {
    if (err) { return console.log(err); }
    res.status(200);
    res.json(body);
    res.end();
  });
});
app.get("/posts", (req, res, next) => {
  request('https://jsonplaceholder.typicode.com/posts', { json: true }, (err, ress, body) => {
    if (err) { return console.log(err); }
    res.status(200);
    res.json(body);
    res.end();
  });
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
