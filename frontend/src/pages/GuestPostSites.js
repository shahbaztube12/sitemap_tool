import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const guestPostSites = [
  { id: 1, name: 'GuestPost.com', url: 'https://www.guestpost.com', description: 'Platform for guest posting opportunities.' },
  { id: 2, name: 'MyBlogGuest', url: 'https://myblogguest.com', description: 'Community for guest bloggers and blog owners.' },
  { id: 3, name: 'GuestPostTracker', url: 'https://guestposttracker.com', description: 'Database of guest post sites.' },
  { id: 4, name: 'PostJoint', url: 'https://postjoint.com', description: 'Marketplace for guest posting.' },
  { id: 5, name: 'BlogDash', url: 'https://blogdash.com', description: 'Connects bloggers and brands for guest posts.' },
];

const postsPerPage = 5;
const totalPages = Math.ceil(guestPostSites.length / postsPerPage);

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
    background: 'linear-gradient(135deg, #b30059 0%, #800040 100%)',
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
    color: '#800040',
    textDecoration: 'none',
  },
};

const faqData = [
  {
    question: 'What are guest post sites and why are they important?',
    answer:
      'Guest post sites allow you to publish articles on other websites, helping you build backlinks, increase brand exposure, and improve SEO.',
  },
  {
    question: 'How do I find quality guest post sites?',
    answer:
      'Look for sites with high domain authority, relevant niche, and active readership. Our curated list includes trusted guest post platforms.',
  },
  {
    question: 'Can guest posting improve my website traffic?',
    answer:
      'Yes, guest posting drives referral traffic and enhances your site’s authority, leading to better search engine rankings.',
  },
  {
    question: 'How often should I contribute guest posts?',
    answer:
      'Consistency matters. Aim to contribute guest posts regularly, such as monthly or bi-monthly, to maintain visibility and SEO benefits.',
  },
];

const GuestPostSites = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = guestPostSites.slice(startIndex, startIndex + postsPerPage);

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
      <Helmet>
        <title>Top Guest Post Sites | Build Backlinks & Grow Your Brand</title>
        <meta
          name="description"
          content="Discover the best guest post sites to publish your articles, build backlinks, and grow your online presence. Handpicked for quality and authority."
        />
        <meta
          name="keywords"
          content="guest post sites, guest blogging, backlinks, SEO, content marketing"
        />
        <link rel="canonical" href="https://www.tarkashot.com/guest-post-sites" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main style={{ padding: '30px 20px', background: 'linear-gradient(135deg, #fff0f5 0%, #ffe6f0 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section style={styles.hero} aria-label="Hero section with page title and description">
          <h1 style={styles.heroTitle}>
            Top <mark style={styles.keywordHighlight}>Guest Post Sites</mark> to Build Backlinks & Grow Your Brand
          </h1>
          <p style={styles.heroSubtitle}>
            Find the best <strong>guest post sites</strong> to publish your articles, increase your website authority, and drive targeted traffic.
          </p>
        </section>

        {/* SEO Content Section */}
        <section style={{ maxWidth: '1200px', margin: '0 auto 30px', color: '#333', fontSize: '1.1rem', lineHeight: 1.6 }}>
          <h2>Why Use Guest Post Sites?</h2>
          <p>
            Guest posting is a powerful strategy to build backlinks, increase brand exposure, and improve your website’s SEO. Our curated list of top guest post sites includes high-authority platforms trusted by marketers worldwide.
          </p>
          <p>
            Publishing quality content on these sites can drive referral traffic, enhance your online reputation, and boost your search engine rankings.
          </p>
          <p>
            Use relevant keywords, create engaging articles, and follow each site’s guest posting guidelines to maximize your results.
          </p>

          <h3>Benefits of Guest Posting</h3>
          <ul>
            <li><strong>High-Quality Backlinks:</strong> Improve your site’s authority and SEO.</li>
            <li><strong>Brand Exposure:</strong> Reach new audiences and grow your brand.</li>
            <li><strong>Referral Traffic:</strong> Drive targeted visitors to your website.</li>
            <li><strong>Cost-Effective Marketing:</strong> Most guest post sites are free or low-cost.</li>
          </ul>
        </section>

        {/* Guest Post Sites Table */}
        <section style={{ maxWidth: '1200px', margin: '0 auto 40px' }}>
          <h2 style={{ textAlign: 'center', color: '#b30059', marginBottom: '20px' }}>Top Guest Post Sites</h2>
          <p style={{ maxWidth: 700, margin: '0 auto 30px', color: '#333', fontSize: '1.1rem', textAlign: 'center' }}>
            Find the best guest post sites to contribute your articles, build backlinks, and grow your online presence.
          </p>
          <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '100%', background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
            <thead>
              <tr style={{ backgroundColor: '#b30059', color: '#fff' }}>
                <th style={styles.th}>#</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Description</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((site, idx) => (
                <tr key={site.id} style={{ backgroundColor: idx % 2 === 0 ? '#fff0f5' : '#fff' }}>
                  <td style={styles.td}>{site.id}</td>
                  <td style={styles.td}>
                    <a href={site.url} target="_blank" rel="noopener noreferrer" style={{ color: '#b30059', textDecoration: 'none', fontWeight: 500 }}>
                      {site.name}
                    </a>
                  </td>
                  <td style={styles.td}>{site.description}</td>
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
                  backgroundColor: currentPage === i + 1 ? '#b30059' : '#eee',
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
              <Link to="/ad-post-sites" style={styles.internalLinkAnchor}>
                Ad Post Sites
              </Link>
            </li>
            <li style={styles.internalLinkItem}>
              <Link to="/social-bookmarking-sites" style={styles.internalLinkAnchor}>
                Social Bookmarking Sites
              </Link>
            </li>
            <li style={styles.internalLinkItem}>
              <Link to="/guest-post-sites" style={styles.internalLinkAnchor}>
                Guest Post Sites
              </Link>
            </li>
            <li style={styles.internalLinkItem}>
              <Link to="/article-submission-sites" style={styles.internalLinkAnchor}>
                Article Submission Sites
              </Link>
            </li>
            <li style={styles.internalLinkItem}>
              <Link to="/directory-submission-sites" style={styles.internalLinkAnchor}>
                Directory Submission Sites
              </Link>
            </li>
            <li style={styles.internalLinkItem}>
              <Link to="/image-submission-sites" style={styles.internalLinkAnchor}>
                Image Submission Sites
              </Link>
            </li>
            <li style={styles.internalLinkItem}>
              <Link to="/video-submission-sites" style={styles.internalLinkAnchor}>
                Video Submission Sites
              </Link>
            </li>
            <li style={styles.internalLinkItem}>
              <Link to="/" style={styles.internalLinkAnchor}>
                Home
              </Link>
            </li>
          </ul>
        </section>

        <section style={{ maxWidth: '1200px', margin: '40px auto 0', color: '#555', fontSize: '1rem', textAlign: 'center' }}>
          © {new Date().getFullYear()} Guest Post Directory. All rights reserved.
        </section>
      </main>
    </>
  );
};

export default GuestPostSites;
