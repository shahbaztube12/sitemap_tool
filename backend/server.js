const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const sitemapRouter = require('./route/sitemap.route');
const cors = require('cors');
const path = require('path');


const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

const PORT = 4000;
db;

// Middleware
app.use(bodyParser.json());

// Serve static files from backend/public
app.use('/public', express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/sitemap', sitemapRouter);

// Basic health check
app.get('/', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Show databases endpoint
app.get('/api/databases', async (req, res) => {
  try {
    const [rows] = await db.query('SHOW DATABASES');
    res.json({ databases: rows });
  } catch (error) {
    console.error('Error fetching databases:', error);
    res.status(500).json({ error: 'Failed to fetch databases' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
