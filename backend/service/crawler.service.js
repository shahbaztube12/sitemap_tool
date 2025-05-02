const axios = require('axios');
const cheerio = require('cheerio');
const { URL } = require('url');
const https = require('https');

class CrawlerService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.visitedUrls = new Set();
    this.pages = [];
    this.httpsAgent = new https.Agent({ rejectUnauthorized: false });
  }

  async crawl(url = this.baseUrl) {
    if (this.visitedUrls.has(url)) return;
    this.visitedUrls.add(url);

    try {
      const response = await axios.get(url, { httpsAgent: this.httpsAgent });
      const $ = cheerio.load(response.data);
      const links = [];

      // Extract all links from page
      $('a').each((i, link) => {
        const href = $(link).attr('href');
        if (href) {
          try {
            const absoluteUrl = new URL(href, this.baseUrl).href;
            if (absoluteUrl.startsWith(this.baseUrl)) {
              links.push(absoluteUrl);
            }
          } catch (e) {
            // Skip invalid URLs
          }
        }
      });

      // Store page info
      this.pages.push({
        url,
        title: $('title').text(),
        links
      });

      // Recursively crawl found links
      for (const link of links) {
        await this.crawl(link);
      }
    } catch (error) {
      console.error(`Error crawling ${url}:`, error.message);
    }
  }

  getPages() {
    return this.pages;
  }
}

module.exports = CrawlerService;
