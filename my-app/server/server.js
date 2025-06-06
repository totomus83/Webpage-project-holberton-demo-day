// server/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const NewsletterModel = require('./models/NewsletterModel'); // Make sure this path is correct

app.use(express.json());

const { Pool } = require('pg');
require('dotenv').config(); // this loads your .env variables

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Newsletter subscription route
app.post('/newsletter/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ status: 'error', message: 'Email is required' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO tom_schema.subscribers (email) VALUES ($1) RETURNING *',
      [email]
    );
    res.json({ status: 'success', data: result.rows[0] });
  } catch (error) {
    console.error('❌ Database Error:', error); // 👈 Add this
    res.status(500).json({ status: 'error', message: 'Server error' });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
