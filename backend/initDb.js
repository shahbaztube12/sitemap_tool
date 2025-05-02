const Website = require('./model/website.model');

async function init() {
  try {
    await Website.createTable();
    console.log('Database tables created successfully.');
    process.exit(0);
  } catch (err) {
    console.error('Error creating database tables:', err);
    process.exit(1);
  }
}

init();
