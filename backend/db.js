const { MongoClient } = require('mongodb');

const uri =process.env.MONGO_URI|| 'mongodb+srv://shehbazseo2:sexfSYBAfHPm5DsQ@cluster0.m4nsnxh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'sitemap_db';

let client;
let db;

async function connect() {
  if (db) return db;
  client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  db = client.db(dbName);
  console.log('Connected to MongoDB');
  return db;
}

async function close() {
  if (client) {
    await client.close();
    client = null;
    db = null;
  }
}

module.exports = {
  connect,
  close,
};
