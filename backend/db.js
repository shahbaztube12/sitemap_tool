const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'sql12.freesqldatabase.com',
  user: process.env.DB_USER || 'sql12778037',
  password: process.env.DB_PASSWORD || 'myAY8NqhPV',
  database: process.env.DB_NAME || 'sql12778037',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
