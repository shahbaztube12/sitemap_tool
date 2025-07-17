const { SitemapStream, streamToPromise } = require('sitemap');
const axios = require('axios');
const fs = require('fs');
(async()=> {
  const sm = new SitemapStream({ hostname: 'https://www.tarkashot.com' });
  sm.write({ url: '/' });
  // Agar aap APIs se pages fetch kar sakte ho:
  const pages = await axios.get('https://www.tarkashot.com/api/pages');
  pages.data.forEach(p=> sm.write({ url: p.slug }));
  sm.end();
  const xml = await streamToPromise(sm);
  fs.writeFileSync('./public/sitemap.xml', xml);
})();
