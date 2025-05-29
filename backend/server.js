const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const sitemapRouter = require('./route/sitemap.route');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 4000;

// ✅ Allowed Origins List
const allowedOrigins = [
  'http://localhost:3000',
  'https://sitemap-frontend-01.vercel.app'
];

// ✅ CORS Configuration
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};

// ✅ Apply CORS Middleware
app.use(cors(corsOptions));

// ✅ Preflight Support (with custom CORS options)
app.options('*', cors(corsOptions));

// ✅ Body Parser Middleware
app.use(bodyParser.json());

// ✅ Serve static files from /public
app.use('/public', express.static(path.join(__dirname, 'public')));

// ✅ API Routes
app.use('/api/sitemap', sitemapRouter);

// ✅ Health Check Route
app.get('/', (req, res) => {
  res.json({ status: 'Server is running' });
});

// ✅ Optional: Check MySQL Databases
app.get('/api/databases', async (req, res) => {
  try {
    const [rows] = await db.query('SHOW DATABASES');
    res.json({ databases: rows });
  } catch (error) {
    console.error('Error fetching databases:', error);
    res.status(500).json({ error: 'Failed to fetch databases' });
  }
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
