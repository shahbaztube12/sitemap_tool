const db = require('../db');

class Website {
  static async createTable() {
    const createWebsitesTable = `
      CREATE TABLE IF NOT EXISTS websites (
        id INT AUTO_INCREMENT PRIMARY KEY,
        url VARCHAR(255) NOT NULL,
        title VARCHAR(255),
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    const createWebsitePagesTable = `
      CREATE TABLE IF NOT EXISTS website_pages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        website_id INT NOT NULL,
        url VARCHAR(255) NOT NULL,
        title VARCHAR(255),
        last_crawled TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (website_id) REFERENCES websites(id)
      )
    `;

    try {
      await db.query(createWebsitesTable);
      await db.query(createWebsitePagesTable);
      console.log('✅ Tables created or already exist.');
    } catch (error) {
      console.error('❌ Error creating tables:', error);
      throw error; // rethrow to handle upstream
    }
  }

  static async create(websiteData) {
    const { url, title, description } = websiteData;
    const [result] = await db.query(
      'INSERT INTO websites (url, title, description) VALUES (?, ?, ?)',
      [url, title, description]
    );
    return result.insertId;
  }

  static async getAll() {
    const [rows] = await db.query('SELECT * FROM websites');
    return rows;
  }

  static async savePages(websiteId, pages) {
    await db.query('DELETE FROM website_pages WHERE website_id = ?', [websiteId]);

    for (const page of pages) {
      await db.query(
        'INSERT INTO website_pages (website_id, url, title) VALUES (?, ?, ?)',
        [websiteId, page.url, page.title]
      );
    }
  }

  static async getPages(websiteId) {
    const [rows] = await db.query(
      'SELECT * FROM website_pages WHERE website_id = ?',
      [websiteId]
    );
    return rows;
  }
}

module.exports = Website;
