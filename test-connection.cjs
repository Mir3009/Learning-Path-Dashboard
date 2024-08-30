const mysql = require('mysql2');

// Create and connect to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'NEW_PASSWORD', // Replace with your actual password
  database: 'learning_path_dashboard'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});
