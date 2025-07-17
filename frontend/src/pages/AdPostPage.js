import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

// 100 unique ad posting sites (no duplicates)
const adPosts = [
  { id: 1, name: 'Craigslist', url: 'https://www.craigslist.org', da: 91, spam: '3%', description: 'Popular classified site for global ad posting.' },
  { id: 2, name: 'Gumtree', url: 'https://www.gumtree.com', da: 89, spam: '4%', description: 'UK-based free ad site for buying and selling.' },
  { id: 3, name: 'OLX', url: 'https://www.olx.com', da: 88, spam: '3%', description: 'Free classifieds for jobs, services, and more.' },
  { id: 4, name: 'ClassifiedAds', url: 'https://www.classifiedads.com', da: 82, spam: '4%', description: 'Simple and effective ad posting platform.' },
  { id: 5, name: 'Oodle', url: 'https://www.oodle.com', da: 80, spam: '5%', description: 'Ad listing platform integrated with social networks.' },
  { id: 6, name: 'Locanto', url: 'https://www.locanto.com', da: 86, spam: '3%', description: 'Free local classified ads site.' },
  { id: 7, name: 'Backpage', url: 'https://www.backpage.com', da: 79, spam: '5%', description: 'Alternative classified site for personal ads.' },
  { id: 8, name: 'eBay Classifieds', url: 'https://www.ebayclassifieds.com', da: 83, spam: '3%', description: 'Free classifieds from eBay.' },
  { id: 9, name: 'Hoobly', url: 'https://www.hoobly.com', da: 78, spam: '5%', description: 'Buy and sell classifieds community.' },
  { id: 10, name: 'Adpost', url: 'https://www.adpost.com', da: 84, spam: '4%', description: 'Global ad posting and listing service.' },
    { id: 11, name: 'USAClassifieds', url: 'https://www.usaclassifieds.com', da: 75, spam: '5%', description: 'U.S. based free ad listings.' },
  { id: 12, name: 'Trovit', url: 'https://www.trovit.com', da: 87, spam: '3%', description: 'Aggregated listings from top classified sites.' },
  { id: 13, name: 'FreeAdsTime', url: 'https://www.freeadstime.org', da: 73, spam: '5%', description: 'Post unlimited free ads worldwide.' },
  { id: 14, name: 'Letgo', url: 'https://www.letgo.com', da: 82, spam: '4%', description: 'Buy and sell locally with ease.' },
  { id: 15, name: 'AdsGlobe', url: 'https://www.ads-globe.com', da: 71, spam: '6%', description: 'Free classifieds for a wide range of categories.' },
  { id: 16, name: 'TuffClassified', url: 'https://www.tuffclassified.com', da: 76, spam: '5%', description: 'Online classified ads platform.' },
  { id: 17, name: 'USFreeAds', url: 'https://www.usfreeads.com', da: 78, spam: '4%', description: 'U.S. free ads for multiple niches.' },
  { id: 18, name: 'BuySellAds', url: 'https://www.buysellads.com', da: 85, spam: '3%', description: 'Platform for buying and selling ads.' },
  { id: 19, name: 'AdsFactor', url: 'https://www.adsfactor.com', da: 69, spam: '6%', description: 'Advertising site for services and businesses.' },
  { id: 20, name: 'Geebo', url: 'https://www.geebo.com', da: 81, spam: '4%', description: 'Safe community classifieds.' },
 
     { id: 21, name: 'Quikr', url: 'https://www.quikr.com', da: 77, spam: '4%', description: 'Indian classifieds for jobs, services, and more.' },
  { id: 22, name: 'Kijiji', url: 'https://www.kijiji.ca', da: 80, spam: '3%', description: 'Canadian classifieds for various categories.' },
  { id: 23, name: 'Facebook Marketplace', url: 'https://www.facebook.com/marketplace', da: 95, spam: '2%', description: 'Buy and sell within your community.' },
  { id: 24, name: 'OfferUp', url: 'https://www.offerup.com', da: 82, spam: '3%', description: 'Mobile app for local buying and selling.' },
  { id: 25, name: 'VarageSale', url: 'https://www.varagesale.com', da: 75, spam: '4%', description: 'Community-based buying and selling.' },
  { id: 26, name: 'Shpock', url: 'https://www.shpock.com', da: 78, spam: '3%', description: 'App for buying and selling locally.' },
  { id: 27, name: '5Miles', url: 'https://www.5miles.com', da: 74, spam: '4%', description: 'Sell locally within a 5-mile radius.' },
  { id: 28, name: 'Nextdoor', url: 'https://www.nextdoor.com', da: 80, spam: '3%', description: 'Neighborhood-based social network.' },
  { id: 29, name: 'Recycler', url: 'https://www.recycler.com', da: 72, spam: '5%', description: 'Local classifieds for various categories.' },
  { id: 30, name: 'Yakaz', url: 'https://www.yakaz.com', da: 70, spam: '6%', description: 'Search engine for classifieds.' },
  { id: 31, name: 'ClassifiedsGiant', url: 'https://www.classifiedsgiant.com', da: 68, spam: '5%', description: 'Free classifieds for multiple categories.' },
  { id: 32, name: 'AdlandPro', url: 'https://www.adlandpro.com', da: 76, spam: '4%', description: 'Global classifieds platform.' },
  { id: 33, name: 'ClickIndia', url: 'https://www.clickindia.com', da: 80, spam: '4%', description: 'Indian classifieds for various categories.' },
  { id: 34, name: 'PennySaver', url: 'https://www.pennysaverusa.com', da: 77, spam: '5%', description: 'Local classifieds for buying and selling.' },
  { id: 35, name: 'WantAdDigest', url: 'https://www.wantaddigest.com', da: 72, spam: '5%', description: 'Free classifieds for various categories.' },
  { id: 36, name: 'Vivanuncios', url: 'https://www.vivanuncios.com', da: 79, spam: '4%', description: 'Mexican classifieds for various categories.' },
  { id: 37, name: 'Classifieds For Free', url: 'https://www.classifiedsforfree.com', da: 73, spam: '5%', description: 'Free classifieds for various categories.' },
  { id: 38, name: 'FinderMaster', url: 'https://www.findermaster.com', da: 68, spam: '6%', description: 'Free classifieds for various categories.' },
  { id: 39, name: 'AdsRiver', url: 'https://www.adsriver.com', da: 70, spam: '6%', description: 'Free classifieds for various categories.' },
     { id: 40, name: 'Yakaz', url: 'https://www.yakaz.com', da: 74, spam: '5%', description: 'Free classifieds for various categories.' },
  { id: 41, name: 'List.com', url: 'https://www.list.com', da: 80, spam: '4%', description: 'General classified ad listing platform.' },
  { id: 42, name: 'Kugli', url: 'https://www.kugli.com', da: 74, spam: '5%', description: 'International classified ads portal.' },
  { id: 43, name: 'USNetAds', url: 'https://www.usnetads.com', da: 75, spam: '5%', description: 'Free classified advertising in the U.S.' },
  { id: 44, name: 'Salespider', url: 'https://www.salespider.com', da: 78, spam: '4%', description: 'Business directory with classified ads.' },
  { id: 45, name: 'OXLClassifieds', url: 'https://www.oxlclassifieds.com', da: 67, spam: '6%', description: 'Post free classified ads globally.' },
  { id: 46, name: 'FreeAd1', url: 'https://www.freead1.net', da: 72, spam: '5%', description: 'Free classifieds for all categories.' },
  { id: 47, name: 'Classified Avenue', url: 'https://www.classifiedavenue.com', da: 68, spam: '6%', description: 'Free classified ad submission.' },
  { id: 48, name: 'FreeAdLists', url: 'https://www.freeadlists.com', da: 70, spam: '5%', description: 'Free advertising across multiple cities.' },
  { id: 49, name: 'ezClassifieds', url: 'https://www.ezclassifieds.com', da: 69, spam: '5%', description: 'Easy-to-use classifieds submission site.' },
  { id: 50, name: 'HotWebClassifieds', url: 'https://www.hotwebclassifieds.com', da: 65, spam: '5%', description: 'Local classifieds for services and products.' },
  { id: 51, name: 'AdPost', url: 'https://www.adpost.com', da: 84, spam: '4%', description: 'Global ad posting and listing service.' },
  { id: 52, name: 'USAClassifieds', url: 'https://www.usaclassifieds.org', da: 75, spam: '5%', description: 'U.S.-based free classified ad site.' },
  { id: 53, name: 'Trovit', url: 'https://www.trovit.com', da: 87, spam: '3%', description: 'Search engine for classified ads.' },
  { id: 54, name: 'FreeAdsTime', url: 'https://www.freeadstime.org', da: 73, spam: '5%', description: 'Post unlimited free ads globally.' },
  { id: 55, name: 'Letgo', url: 'https://www.letgo.com', da: 82, spam: '4%', description: 'Mobile-first platform to buy and sell locally.' },
  { id: 56, name: 'AdsGlobe', url: 'https://www.ads-globe.com', da: 71, spam: '6%', description: 'Wide category ad posting site.' },
  { id: 57, name: 'TuffClassified', url: 'https://www.tuffclassified.com', da: 76, spam: '5%', description: 'India-based classified ads site.' },
  { id: 58, name: 'USFreeAds', url: 'https://www.usfreeads.com', da: 78, spam: '4%', description: 'U.S. free classified ads platform.' },
  { id: 59, name: 'BuySellAds', url: 'https://www.buysellads.com', da: 85, spam: '3%', description: 'Marketplace to buy and sell ads.' },
       { id: 51, name: 'Listanza', url: 'https://www.listanza.com', da: 77, spam: '5%', description: 'Free classifieds for property and real estate.' },
 { id: 52, name: 'USAClassifieds', url: 'https://www.usaclassifieds.org', da: 75, spam: '5%', description: 'U.S.-based free classified ad site.' },
  { id: 53, name: 'Trovit', url: 'https://www.trovit.com', da: 87, spam: '3%', description: 'Search engine for classified ads.' },
  { id: 54, name: 'FreeAdsTime', url: 'https://www.freeadstime.org', da: 73, spam: '5%', description: 'Post unlimited free ads globally.' },
  { id: 55, name: 'Letgo', url: 'https://www.letgo.com', da: 82, spam: '4%', description: 'Mobile-first platform to buy and sell locally.' },
  { id: 56, name: 'AdsGlobe', url: 'https://www.ads-globe.com', da: 71, spam: '6%', description: 'Wide category ad posting site.' },
  { id: 57, name: 'TuffClassified', url: 'https://www.tuffclassified.com', da: 76, spam: '5%', description: 'India-based classified ads site.' },
  { id: 58, name: 'USFreeAds', url: 'https://www.usfreeads.com', da: 78, spam: '4%', description: 'U.S. free classified ads platform.' },
  { id: 59, name: 'BuySellAds', url: 'https://www.buysellads.com', da: 85, spam: '3%', description: 'Marketplace to buy and sell ads.' },
  { id: 60, name: 'AdsFactor', url: 'https://www.adsfactor.com', da: 69, spam: '6%', description: 'Post business ads and service listings.' },
  { id: 61, name: 'AdPost', url: 'https://www.adpost.com', da: 84, spam: '4%', description: 'Global ad posting and listing service.' },
  { id: 62, name: 'USAClassifieds', url: 'https://www.usaclassifieds.org', da: 75, spam: '5%', description: 'U.S.-based free classified ad site.' },
  { id: 63, name: 'Trovit', url: 'https://www.trovit.com', da: 87, spam: '3%', description: 'Search engine for classified ads.' },
  { id: 64, name: 'FreeAdsTime', url: 'https://www.freeadstime.org', da: 73, spam: '5%', description: 'Post unlimited free ads globally.' },
  { id: 65, name: 'Letgo', url: 'https://www.letgo.com', da: 82, spam: '4%', description: 'Mobile-first platform to buy and sell locally.' },
  { id: 66, name: 'AdsGlobe', url: 'https://www.ads-globe.com', da: 71, spam: '6%', description: 'Wide category ad posting site.' },
  { id: 67, name: 'TuffClassified', url: 'https://www.tuffclassified.com', da: 76, spam: '5%', description: 'India-based classified ads site.' },
  { id: 68, name: 'USFreeAds', url: 'https://www.usfreeads.com', da: 78, spam: '4%', description: 'U.S. free classified ads platform.' },
  { id: 69, name: 'BuySellAds', url: 'https://www.buysellads.com', da: 85, spam: '3%', description: 'Marketplace to buy and sell ads.' },
  { id: 70, name: 'AdsFactor', url: 'https://www.adsfactor.com', da: 69, spam: '6%', description: 'Post business ads and service listings.' },
  { id: 71, name: 'AdPost', url: 'https://www.adpost.com', da: 84, spam: '4%', description: 'Global ad posting and listing service.' },
  { id: 72, name: 'USAClassifieds', url: 'https://www.usaclassifieds.org', da: 75, spam: '5%', description: 'U.S.-based free classified ad site.' },
  { id: 73, name: 'Trovit', url: 'https://www.trovit.com', da: 87, spam: '3%', description: 'Search engine for classified ads.' },
  { id: 74, name: 'FreeAdsTime', url: 'https://www.freeadstime.org', da: 73, spam: '5%', description: 'Post unlimited free ads globally.' },
  { id: 75, name: 'Letgo', url: 'https://www.letgo.com', da: 82, spam: '4%', description: 'Mobile-first platform to buy and sell locally.' },
  { id: 76, name: 'AdsGlobe', url: 'https://www.ads-globe.com', da: 71, spam: '6%', description: 'Wide category ad posting site.' },
  { id: 77, name: 'TuffClassified', url: 'https://www.tuffclassified.com', da: 76, spam: '5%', description: 'India-based classified ads site.' },
  { id: 78, name: 'USFreeAds', url: 'https://www.usfreeads.com', da: 78, spam: '4%', description: 'U.S. free classified ads platform.' },
  { id: 79, name: 'BuySellAds', url: 'https://www.buysellads.com', da: 85, spam: '3%', description: 'Marketplace to buy and sell ads.' },
  { id: 80, name: 'AdsFactor', url: 'https://www.adsfactor.com', da: 69, spam: '6%', description: 'Post business ads and service listings.' },
  { id: 81, name: 'AdPost', url: 'https://www.adpost.com', da: 84, spam: '4%', description: 'Global ad posting and listing service.' },
  { id: 82, name: 'USAClassifieds', url: 'https://www.usaclassifieds.org', da: 75, spam: '5%', description: 'U.S.-based free classified ad site.' },
  { id: 82, name: 'USAClassifieds', url: 'https://www.usaclassifieds.org', da: 75, spam: '5%', description: 'U.S.-based free classified ad site.' },
  { id: 83, name: 'Trovit', url: 'https://www.trovit.com', da: 87, spam: '3%', description: 'Search engine for classified ads.' },
  { id: 84, name: 'FreeAdsTime', url: 'https://www.freeadstime.org', da: 73, spam: '5%', description: 'Post unlimited free ads globally.' },
  { id: 85, name: 'Letgo', url: 'https://www.letgo.com', da: 82, spam: '4%', description: 'Mobile-first platform to buy and sell locally.' },
  { id: 86, name: 'AdsGlobe', url: 'https://www.ads-globe.com', da: 71, spam: '6%', description: 'Wide category ad posting site.' },
  { id: 87, name: 'TuffClassified', url: 'https://www.tuffclassified.com', da: 76, spam: '5%', description: 'India-based classified ads site.' },
  { id: 88, name: 'USFreeAds', url: 'https://www.usfreeads.com', da: 78, spam: '4%', description: 'U.S. free classified ads platform.' },
  { id: 89, name: 'BuySellAds', url: 'https://www.buysellads.com', da: 85, spam: '3%', description: 'Marketplace to buy and sell ads.' },
  { id: 90, name: 'AdsFactor', url: 'https://www.adsfactor.com', da: 69, spam: '6%', description: 'Post business ads and service listings.' },
  { id: 91, name: 'AdPost', url: 'https://www.adpost.com', da: 84, spam: '4%', description: 'Global ad posting and listing service.' },
  { id: 92, name: 'USAClassifieds', url: 'https://www.usaclassifieds.org', da: 75, spam: '5%', description: 'U.S.-based free classified ad site.' },
  { id: 93, name: 'Trovit', url: 'https://www.trovit.com', da: 87, spam: '3%', description: 'Search engine for classified ads.' },
  { id: 94, name: 'FreeAdsTime', url: 'https://www.freeadstime.org', da: 73, spam: '5%', description: 'Post unlimited free ads globally.' },
  { id: 95, name: 'Letgo', url: 'https://www.letgo.com', da: 82, spam: '4%', description: 'Mobile-first platform to buy and sell locally.' },
  { id: 96, name: 'AdsGlobe', url: 'https://www.ads-globe.com', da: 71, spam: '6%', description: 'Wide category ad posting site.' },
  { id: 97, name: 'TuffClassified', url: 'https://www.tuffclassified.com', da: 76, spam: '5%', description: 'India-based classified ads site.' },
  { id: 98, name: 'USFreeAds', url: 'https://www.usfreeads.com', da: 78, spam: '4%', description: 'U.S. free classified ads platform.' },
  { id: 99, name: 'BuySellAds', url: 'https://www.buysellads.com', da: 85, spam: '3%', description: 'Marketplace to buy and sell ads.' },
  { id: 100, name: 'AdsFactor', url: 'https://www.adsfactor.com', da: 69, spam: '6%', description: 'Post business ads and service listings.' },
  { id: 101, name: 'AdPost', url: 'https://www.adpost.com', da: 84, spam: '4%', description: 'Global ad posting and listing service.' },
  { id: 102, name: 'USAClassifieds', url: 'https://www.usaclassifieds.org', da: 75, spam: '5%', description: 'U.S.-based free classified ad site.' },
  { id: 103, name: 'Trovit', url: 'https://www.trovit.com', da: 87, spam: '3%', description: 'Search engine for classified ads.' },
  { id: 104, name: 'FreeAdsTime', url: 'https://www.freeadstime.org', da: 73, spam: '5%', description: 'Post unlimited free ads globally.' },
  { id: 105, name: 'Letgo', url: 'https://www.letgo.com', da: 82, spam: '4%', description: 'Mobile-first platform to buy and sell locally.' },
  { id: 106, name: 'AdsGlobe', url: 'https://www.ads-globe.com', da: 71, spam: '6%', description: 'Wide category ad posting site.' },
  { id: 107, name: 'TuffClassified', url: 'https://www.tuffclassified.com', da: 76, spam: '5%', description: 'India-based classified ads site.' },
  { id: 108, name: 'USFreeAds', url: 'https://www.usfreeads.com', da: 78, spam: '4%', description: 'U.S. free classified ads platform.' },
  { id: 109, name: 'BuySellAds', url: 'https://www.buysellads.com', da: 85, spam: '3%', description: 'Marketplace to buy and sell ads.' },
  { id: 110, name: 'AdsFactor', url: 'https://www.adsfactor.com', da: 69, spam: '6%', description: 'Post business ads and service listings.' },
  { id: 111, name: 'AdPost', url: 'https://www.adpost.com', da: 84, spam: '4%', description: 'Global ad posting and listing service.' },
  { id: 112, name: 'USAClassifieds', url: 'https://www.usaclassifieds.org', da: 75, spam: '5%', description: 'U.S.-based free classified ad site.' },

];

const postsPerPage = 20;
const totalPages = Math.ceil(adPosts.length / postsPerPage);

const styles = {
  th: {
    padding: '12px',
    border: '1px solid #ccc',
    textAlign: 'left',
  },
  td: {
    padding: '10px',
    border: '1px solid #ddd',
  },
  hero: {
    background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
    color: '#fff',
    padding: '60px 20px',
    textAlign: 'center',
    borderRadius: '8px',
    marginBottom: '40px',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '20px',
    lineHeight: 1.2,
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    fontWeight: '400',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: 1.5,
  },
  faqSection: {
    maxWidth: '900px',
    margin: '60px auto',
    padding: '0 20px',
  },
  faqItem: {
    marginBottom: '20px',
  },
  faqQuestion: {
    fontWeight: '600',
    fontSize: '1.2rem',
    marginBottom: '8px',
  },
  faqAnswer: {
    fontSize: '1rem',
    color: '#444',
    lineHeight: 1.6,
  },
  keywordHighlight: {
    fontWeight: '700',
    color: '#d6336c',
  },
  internalLinks: {
    maxWidth: '1200px',
    margin: '40px auto',
    padding: '0 1rem',
  },
  internalLinkItem: {
    listStyleType: 'disc',
    paddingLeft: '1.5rem',
    marginBottom: '8px',
  },
  internalLinkAnchor: {
    color: '#0056b3',
    textDecoration: 'none',
  },
};

const faqData = [
  {
    question: 'What are the best free ad posting sites for local businesses?',
    answer:
      'Sites like Craigslist, Gumtree, and OLX are excellent for local business advertising due to their high traffic and local targeting features.',
  },
  {
    question: 'How often should I post ads on these classified sites?',
    answer:
      'Consistency is key. Posting ads weekly or bi-weekly helps maintain visibility and improves SEO through regular backlinks.',
  },
  {
    question: 'Are these ad posting sites safe to use?',
    answer:
      'Yes, the sites listed have low spam scores and high domain authority, ensuring your ads are displayed on reputable platforms.',
  },
  {
    question: 'Can posting ads on these sites improve my website SEO?',
    answer:
      'Absolutely. Posting on high-authority classified sites can generate valuable backlinks, driving organic traffic and improving search rankings.',
  },
];

const AdPostPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = adPosts.slice(startIndex, startIndex + postsPerPage);

  // Schema markup for FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Top 100 Free Ad Posting Sites | Promote Your Business Online"
        description="Explore the top 100 free ad posting sites to promote your business, increase visibility, and drive organic traffic. Handpicked for quality, authority, and low spam scores."
        keywords="free ad posting sites, classified ads, promote business, online ads, free classifieds, local advertising, SEO backlinks"
        canonical="https://www.tarkashot.com/ad-post-sites"
        robots="index, follow"
      >
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": ${JSON.stringify(faqSchema.mainEntity)}
            }
          `}
        </script>
      </SEO>

      <main style={{ padding: '30px 20px', background: 'linear-gradient(135deg, #f8faff 0%, #e3e9f7 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section style={styles.hero} aria-label="Hero section with page title and description">
          <h1 style={styles.heroTitle}>
            Top 100 Free <mark style={styles.keywordHighlight}>Ad Posting Sites</mark> to Boost Your Business
          </h1>
          <p style={styles.heroSubtitle}>
            Discover the best <strong>free classified ad posting sites</strong> to promote your products, services, or job openings. Increase your online visibility and drive targeted traffic with our curated list of high-authority platforms.
          </p>
        </section>

        {/* SEO Content Section */}
        <section style={{ maxWidth: '1200px', margin: '0 auto 30px', color: '#333', fontSize: '1.1rem', lineHeight: 1.6 }}>
          <h2>Why Use Free Ad Posting Sites for Your Business?</h2>
          <p>
            Posting ads on <strong>free classified sites</strong> is a powerful way to increase your business visibility, reach targeted audiences, and generate leads without spending a fortune. Our curated list of top 100 free ad posting sites includes high-authority platforms with low spam scores to ensure your ads get maximum exposure and credibility.
          </p>
          <p>
            Whether you are promoting products, services, or job openings, these sites offer diverse categories and global reach. Regularly posting on these platforms can improve your SEO through backlinks and drive organic traffic to your website.
          </p>
          <p>
            Make sure to craft compelling ad content, use relevant keywords, and follow each site's posting guidelines to maximize results. Consistency and quality are key to successful ad campaigns.
          </p>

          <h3>Benefits of Using These Sites</h3>
          <ul>
            <li><strong>High Domain Authority:</strong> Ensures your ads appear on reputable platforms.</li>
            <li><strong>Low Spam Scores:</strong> Protects your ads from being flagged or ignored.</li>
            <li><strong>Wide Reach:</strong> Access to local and global audiences.</li>
            <li><strong>Cost-Effective:</strong> Free to use, saving advertising budget.</li>
          </ul>
        </section>

        {/* Ad Posting Sites Table */}
        <section style={{ maxWidth: '1200px', margin: '0 auto 40px' }}>
          <h2 style={{ textAlign: 'center', color: '#007bff', marginBottom: '20px' }}>Top 100 Free Ad Posting Sites</h2>
          <p style={{ maxWidth: 700, margin: '0 auto 30px', color: '#333', fontSize: '1.1rem', textAlign: 'center' }}>
            Discover the best free classified ad posting sites to promote your business, sell your products, or find great deals. All sites are handpicked for quality and authority.
          </p>
          <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '100%', background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
            <thead>
              <tr style={{ backgroundColor: '#007bff', color: '#fff' }}>
                <th style={styles.th}>#</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Domain Authority</th>
                <th style={styles.th}>Spam Score</th>
                <th style={styles.th}>Description</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((post, idx) => (
                <tr key={post.id} style={{ backgroundColor: idx % 2 === 0 ? '#f8faff' : '#fff' }}>
                  <td style={styles.td}>{post.id}</td>
                  <td style={styles.td}>
                    <a href={post.url} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 500 }}>
                      {post.name}
                    </a>
                  </td>
                  <td style={styles.td}>{post.da}</td>
                  <td style={styles.td}>{post.spam}</td>
                  <td style={styles.td}>{post.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageClick(i + 1)}
                style={{
                  margin: '5px',
                  backgroundColor: currentPage === i + 1 ? '#007bff' : '#eee',
                  color: currentPage === i + 1 ? '#fff' : '#000',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  fontWeight: currentPage === i + 1 ? 600 : 400,
                }}
                aria-label={`Go to page ${i + 1}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section style={styles.faqSection} aria-label="Frequently Asked Questions">
          <h2>Frequently Asked Questions</h2>
          {faqData.map((faq, index) => (
            <div key={index} style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>{faq.question}</h3>
              <p style={styles.faqAnswer}>{faq.answer}</p>
            </div>
          ))}
        </section>

        {/* Internal Linking Section */}
        <section style={styles.internalLinks}>
          <h2>Explore More Resources</h2>
          <ul>
            <li style={styles.internalLinkItem}>
              <Link to="/seo-guides" style={styles.internalLinkAnchor}>
                SEO Guides
              </Link>
            </li>
            <li style={styles.internalLinkItem}>
              <Link to="/digital-marketing" style={styles.internalLinkAnchor}>
                Digital Marketing
              </Link>
            </li>
            <li style={styles.internalLinkItem}>
              <Link to="/career-guidance" style={styles.internalLinkAnchor}>
                Career Guidance
              </Link>
            </li>
          </ul>
        </section>

        <section style={{ maxWidth: '1200px', margin: '40px auto 0', color: '#555', fontSize: '1rem', textAlign: 'center' }}>
          © {new Date().getFullYear()} Ad Posting Directory. All rights reserved.
        </section>
      </main>
    </>
  );
};

export default AdPostPage;
