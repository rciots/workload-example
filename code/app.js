const http = require('http');
const fs = require('fs');
const filePath = '/tmp/message';
const server = http.createServer((req, res) => {
  let message = process.env.MESSAGE || "Hello world! - Default";
  if (fs.existsSync(filePath)) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        message = data.trim();
      } catch (err) {
        console.error('Error reading the file:', err);
      }
  }
  console.log("requested.");
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(message);
});

const port = 8080;
server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});