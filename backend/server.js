const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const sitemapRouter = require('./route/sitemap.route');
const pinterestRouter = require('./route/pinterest.route');
const youtubeRouter = require('./route/youtube.route');
const instagramRouter = require('./route/instagram.route');
const seoAuditRouter = require('./route/seoAudit.route');
const tryFreeToolsRouter = require('./route/tryFreeTools.route');
const bulkUrlRedirectionRouter = require('./route/bulkUrlRedirection.route');
const googleIndexCheckerRouter = require('./route/googleIndexChecker.route');
const youTubeTranscriptRouter = require('./route/youTubeTranscript.route');
const bulkAnchorTextGeneratorsRouter = require('./route/bulkAnchorTextGenerators.route');
const imageCompressorRouter = require('./route/imageCompressor.route');
const viralpromptRouter = require('./route/viralprompt.route');
const writeForUsRouter = require('./route/writeForUs.route');
const multer = require('multer');
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

// ✅ Request Logging Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ✅ Serve static files from /public
app.use('/public', express.static(path.join(__dirname, 'public')));

// ✅ API Routes
app.use('/api/sitemap', sitemapRouter);
app.use('/api/pinterest', pinterestRouter);
app.use('/api/youtube', youtubeRouter);
app.use('/api/instagram', instagramRouter);
app.use('/api/seo-audit', seoAuditRouter);
app.use('/api/try-free-tools', tryFreeToolsRouter);
app.use('/api/bulk-url-redirection', bulkUrlRedirectionRouter);
app.use('/api/google-index-checker', googleIndexCheckerRouter);
app.use('/api/youtube-transcript', youTubeTranscriptRouter);
app.use('/api/bulk-anchor-text-generators', bulkAnchorTextGeneratorsRouter);
app.use('/api/image-compressor', imageCompressorRouter);
app.use('/api/viralprompt', viralpromptRouter);
app.use('/api/writeforus', writeForUsRouter);

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

// ✅ Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
