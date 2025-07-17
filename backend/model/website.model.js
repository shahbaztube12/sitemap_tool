const { ObjectId } = require('mongodb');
const db = require('../db');

class Website {
  static async createTable() {
    // No need to create tables in MongoDB
    return;
  }

  static async create(websiteData) {
    const database = await db.connect();
    const websitesCollection = database.collection('websites');
    const result = await websitesCollection.insertOne({
      url: websiteData.url,
      title: websiteData.title || null,
      description: websiteData.description || null,
      sitemapPath: websiteData.sitemapPath || null,
      created_at: new Date(),
    });
    return result.insertedId;
  }

  static async getAll() {
    const database = await db.connect();
    const websitesCollection = database.collection('websites');
    const websites = await websitesCollection.find({}).toArray();
    return websites;
  }

  static async savePages(websiteId, pages) {
    const database = await db.connect();
    const pagesCollection = database.collection('website_pages');
    await pagesCollection.deleteMany({ website_id: new ObjectId(websiteId) });

    if (pages.length > 0) {
      const pagesToInsert = pages.map(page => ({
        website_id: new ObjectId(websiteId),
        url: page.url,
        title: page.title || null,
        last_crawled: new Date(),
      }));
      await pagesCollection.insertMany(pagesToInsert);
    }
  }

  static async getPages(websiteId) {
    const database = await db.connect();
    const pagesCollection = database.collection('website_pages');
    const pages = await pagesCollection.find({ website_id: new ObjectId(websiteId) }).toArray();
    return pages;
  }
}

module.exports = Website;
