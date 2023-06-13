const http = require('http');

const server = http.createServer((req, res) => {
  var message = process.env.MESSAGE || "Hello world! - Default";
  console.log("requested.");
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(message);
});

const port = 8080;
server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});