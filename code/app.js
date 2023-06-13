const http = require('http');
const message = process.env.MESSAGE || "Hello world! - Default";
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(message);
});

const port = 8080;
server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});