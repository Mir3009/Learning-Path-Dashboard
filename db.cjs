const http = require('http');
const mysql = require('mysql2');

// Create and connect to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'NEW PASSWORD', // Replace with your actual password
  database: 'learning_path_dashboard'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Define the port to listen to
const PORT = 3005;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
