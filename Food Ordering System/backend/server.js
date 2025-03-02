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

    // Create foods table
    db.run(`
      CREATE TABLE IF NOT EXISTS foods (
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

    // Create cart_items table without the total_price column
    db.run(`
      CREATE TABLE IF NOT EXISTS cart_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        food_id INTEGER,
        quantity INTEGER,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (food_id) REFERENCES foods(id)
      )
    `, () => {
      console.log('Cart items table is ready.');
    });
  }
});

// ==================== API Endpoints ====================

// API to add cart items to the database
app.post('/api/add-to-cart', (req, res) => {
  const { userId, cartItems } = req.body;

  if (!userId || !cartItems || cartItems.length === 0) {
    return res.status(400).send({ error: 'Invalid request. No cart items found.' });
  }

  // Prepare the insert query (no total_price)
  const insertQuery = `INSERT INTO cart_items (user_id, food_id, quantity) VALUES (?, ?, ?)`;

  const insertCartItems = () => {
    return new Promise((resolve, reject) => {
      const stmt = db.prepare(insertQuery);
      let counter = 0;
      let totalItems = cartItems.length;

      // Loop through each cart item and insert it
      cartItems.forEach(({ food_id, quantity }) => {
        stmt.run([userId, food_id, quantity], (err) => {
          if (err) {
            console.error('Error inserting cart item:', err.message);
            reject(err);
          } else {
            counter++;
            if (counter === totalItems) {
              stmt.finalize(() => resolve());
            }
          }
        });
      });
    });
  };

  insertCartItems()
    .then(() => res.status(200).send({ message: 'Cart items added successfully!' }))
    .catch((err) => res.status(500).send({ error: 'Error adding cart items.' }));
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

  const sql = `SELECT id, password FROM users WHERE email = ?`;

  db.get(sql, [email], (err, row) => {
    if (err) {
      console.error('Error during login:', err.message);
      res.status(500).send({ error: 'Internal server error.' });
    } else if (row && row.password === password) {
      res.status(200).send({ message: 'Login successful!', id: row.id });
    } else {
      res.status(400).send({ error: 'Invalid email or password.' });
    }
  });
});

// ==================== Server Listener ====================
app.listen(port, 'localhost', () => {
  console.log(`Server is running at http://localhost:${port}`);
});
