// const http = require('http');

// const server = http.createServer((req, res) => {
//   // Parse Request
//   const method = req.method;         // GET, POST, etc.
//   const url = req.url;               // /about, /home, etc.

//   // Send Response
//   res.setHeader('Content-Type', 'text/plain'); // Set response type
//   res.write(`You made a ${method} request to ${url}`); // Response body
//   res.end(); // Finalize response
// });

// server.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });

// let body = '';
// req.on('data', chunk => {
//   body += chunk.toString(); // convert Buffer to string
// });

// req.on('end', () => {
//   console.log('Received data:', body);
//   res.end('Data received');
// });
// res.setHeader('Content-Type', 'application/json');
// res.end(JSON.stringify({ message: 'Hello from Node.js!' }));
//   if (req.url === '/home') {
//     res.end('Welcome to the homepage!');
//   } else if (req.url === '/about') {
//     res.end('About us page');
//   } else {
//     res.statusCode = 404;
//     res.end('Page not found');
//   }
// ;
// let http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8080);

const fs = require('fs');

// Read file asynchronously
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file: ' + err);
    return;
  }
  console.log('File content: ' + data);
});

console.log('Reading file... (this runs first!)');

