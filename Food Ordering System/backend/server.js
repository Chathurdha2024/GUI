const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize SQLite Database
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');

    // Create users table
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT
      )
    `);
<<<<<<< HEAD
// Create foods table
db.run(`
  CREATE TABLE IF NOT EXISTS foods (
=======
// Create books table
db.run(`
  CREATE TABLE IF NOT EXISTS books (
>>>>>>> b2401201ce823092ae9a160f1ae9fb8ba71fb560
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL,
    description TEXT,
    image TEXT,
    category TEXT
  )
`, () => {
  console.log('Foods table is ready.');
});
}
});

// API endpoint to get books
<<<<<<< HEAD
app.get('/books', (req, res) => {
  const query = 'SELECT * FROM books';
=======
app.get('/foods', (req, res) => {
  const query = 'SELECT * FROM foods';
>>>>>>> b2401201ce823092ae9a160f1ae9fb8ba71fb560
  db.all(query, [], (err, rows) => {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json(rows);
  });
});


 

// ==================== User Authentication ====================
// Signup
app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send({ error: 'All fields are required.' });
  }

  const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  db.run(sql, [name, email, password], function (err) {
    if (err) {
      console.error('Error registering user:', err.message);
      res.status(500).send({ error: 'Error registering user.' });
    } else {
      res.status(200).send({ message: 'User registered successfully!', id: this.lastID });
    }
  });
});

// Login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ error: 'Email and password are required.' });
  }

  const sql = `SELECT * FROM users WHERE email = ?`;
  db.get(sql, [email], (err, row) => {
    if (err) {
      console.error('Error logging in:', err.message);
      res.status(500).send({ error: 'Error logging in.' });
    } else if (row && row.password === password) {
      res.status(200).send({ message: 'Login successful!', userId: row.id });
    } else {
      res.status(400).send({ error: 'Invalid email or password.' });
    }
  });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const sql =  `SELECT id, password FROM users WHERE email = ?`;

  db.get(sql, [email], (err, row) => {
    if (err) {
      console.error('Error during login:', err.message);
      res.status(500).send({ error: 'Internal server error.' });
    } else if (row && row.password === password) {
      res.status(200).send({ message: 'Login successful!', id: row.id, userName: row.name }); // Include user ID in response
    } else {
      res.status(400).send({ error: 'Invalid email or password.' });
    }
  });
});

// ==================== User Profile Management ====================
// Get User Profile
app.get('/api/profile/:id', (req, res) => {
  const userId = req.params.id;

  const sql = `SELECT id, name, email FROM users WHERE id = ?`;
  db.get(sql, [userId], (err, row) => {
    if (err) {
      console.error('Error retrieving profile:', err.message);
      res.status(500).send({ error: 'Error retrieving profile.' });
    } else if (row) {
      res.status(200).send({ profile: row });
    } else {
      res.status(404).send({ error: 'User not found.' });
    }
  });
});

// Update User Profile
app.put('/api/update-profile/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send({ error: 'All fields are required.' });
  }

  const sql = `UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?`;
  db.run(sql, [name, email, password, userId], function (err) {
    if (err) {
      console.error('Error updating profile:', err.message);
      res.status(500).send({ error: 'Error updating profile.' });
    } else {
      res.status(200).send({ message: 'Profile updated successfully!' });
    }
  });
});

// ==================== Server Listener ====================
app.listen(port, 'localhost', () => {
  console.log(`Server is running at http://localhost:${port}`);
<<<<<<< HEAD
});
=======
});
>>>>>>> b2401201ce823092ae9a160f1ae9fb8ba71fb560
