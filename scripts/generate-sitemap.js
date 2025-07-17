const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream, mkdirSync } = require('fs');
const { join, dirname } = require('path');

async function generateSitemap() {
  // List of React page filenames (without extension)
  const pageFiles = [
    'Home',
    'AboutUs',
    'AboutUsPageGenerator',
    'AdPostPage',
    'ArticleSubmissionSites',
    'BacklinkGeneratorTool',
    'BulkAnchorTextGenerators',
    'BulkUrlRedirectionTool',
    'CanonicalTagGenerator',
    'CareerGuidance',
    'CommaSeparatorTool',
    'ContactMe',
    'DigitalMarketing',
    'DirectorySubmissionSites',
    'Disclaimer',
    'dynamicpage',
    'GoogleCoreUpdates',
    'GoogleIndexChecker',
    'GuestPostSites',
    'ImageCompressor',
    'ImageSubmissionSites',
    'InstagramReelDownloader',
    'MobileFriendlyTesterTool',
    'NotFound',
    'PinterestDownloader',
    'PrivacyPolicy',
    'SeoAudit',
    'SeoCompanyJanakpuri',
    'SeoGuides',
    'SeoOptimizedPage',
    'SeoServicesDelhi',
    'SeoServicesLaxmiNagar',
    'SeoServicesNoida',
    'SeoServicesRohini',
    'Sitemap',
    'SitemapTool',
    'SocialBookmarkingSites',
    'TermsAndConditions',
    'TryFreeTools',
    'UrlDomainExtractor',
    'VideoSubmissionSites',
    'WhatsAppChatLink',
    'WriteForUs',
    'YouTubeShortsDownloader',
    'YouTubeTagGenerator',
    'YouTubeTranscriptTool',
    'YouTubeVideoTagsExtractor'
  ];

  // Convert page filenames to URLs
  const pages = pageFiles.map(page => {
    let urlPath = '/' + page.toLowerCase();
    if (page.toLowerCase() === 'home') urlPath = '/';
    if (page.toLowerCase() === 'notfound') return null; // exclude NotFound page
    if (page.toLowerCase() === 'dynamicpage') return null; // exclude dynamicpage or handle separately if needed
    return { url: urlPath };
  }).filter(Boolean);

  const outputPath = join(__dirname, '..', 'frontend', 'public', 'sitemap.xml');
  const dir = dirname(outputPath);
  mkdirSync(dir, { recursive: true });

  const smStream = new SitemapStream({ hostname: 'https://yourdomain.com' });
  const writeStream = createWriteStream(outputPath);

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

  console.log('Sitemap generated at:', outputPath);
}

generateSitemap().catch(err => {
  console.error('Error generating sitemap:', err);
  process.exit(1);
});
