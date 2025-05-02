const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream, mkdirSync } = require('fs');
const { join, dirname } = require('path');

class SitemapService {
  static async generate(pages, outputPath = 'public/sitemap.xml', hostname = 'https://example.com') {
    if (!pages || pages.length === 0) {
      console.warn('No pages to generate sitemap.');
      return null;
    }

    const fullPath = join(process.cwd(), outputPath);
    const dir = dirname(fullPath);
    mkdirSync(dir, { recursive: true });

    const smStream = new SitemapStream({ hostname });
    const writeStream = createWriteStream(fullPath);

    smStream.pipe(writeStream);

    pages.forEach(page => {
      smStream.write({
        url: page.url,
        changefreq: 'daily',
        priority: 0.7
      });
    });

    smStream.end();

    await new Promise((resolve, reject) => {
      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
    });

    return outputPath;
  }
}

module.exports = SitemapService;
