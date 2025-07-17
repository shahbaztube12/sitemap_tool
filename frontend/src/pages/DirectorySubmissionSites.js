import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const directorySubmissionSites = [
  { id: 1, name: 'DMOZ', url: 'https://dmoz-odp.org', description: 'Comprehensive human-edited web directory.' },
  { id: 2, name: 'JoeAnt', url: 'https://www.joeant.com', description: 'Human-edited directory for quality sites.' },
  { id: 3, name: 'Best of the Web', url: 'https://botw.org', description: 'Directory with editorial review.' },
  { id: 4, name: 'EatonWeb', url: 'https://www.eatonweb.com', description: 'Free web directory submission.' },
  { id: 5, name: 'Aviva Directory', url: 'https://www.avivadirectory.com', description: 'General web directory with categories.' },
];

const postsPerPage = 5;
const totalPages = Math.ceil(directorySubmissionSites.length / postsPerPage);

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
    background: 'linear-gradient(135deg, #228b22 0%, #006400 100%)',
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
    color: '#eee',
    lineHeight: 1.6,
  },
  keywordHighlight: {
    fontWeight: '700',
    color: '#32cd32',
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
    color: '#32cd32',
    textDecoration: 'none',
  },
};

const faqData = [
  {
    question: 'What are directory submission sites and how do they help SEO?',
    answer:
      'Directory submission sites allow you to submit your website to categorized directories, helping improve your site’s visibility and backlinks.',
  },
  {
    question: 'Are directory submission sites free to use?',
    answer:
      'Many directory submission sites offer free submissions, making them a cost-effective SEO strategy.',
  },
  {
    question: 'How often should I submit my site to directories?',
    answer:
      'Regular submissions, such as quarterly or bi-annually, help maintain your site’s presence and SEO benefits.',
  },
  {
    question: 'Can directory submission improve my website ranking?',
    answer:
      'Yes, submitting to reputable directories can improve your search engine rankings by generating quality backlinks.',
  },
];

const DirectorySubmissionSites = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = directorySubmissionSites.slice(startIndex, startIndex + postsPerPage);

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
        <title>Top Directory Submission Sites | Submit Your Website & Boost SEO</title>
        <meta
          name="description"
          content="Explore the top directory submission sites to submit your website, build backlinks, and improve your SEO. Handpicked for quality and authority."
        />
        <meta
          name="keywords"
          content="directory submission sites, website submission, backlinks, SEO, online directories"
        />
        <link rel="canonical" href="https://www.tarkashot.com/directory-submission-sites" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main style={{ padding: '30px 20px', background: 'linear-gradient(135deg, #f0fff0 0%, #d0ffd0 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section style={styles.hero} aria-label="Hero section with page title and description">
          <h1 style={styles.heroTitle}>
            Top <mark style={styles.keywordHighlight}>Directory Submission Sites</mark> to Submit Your Website & Boost SEO
          </h1>
          <p style={styles.heroSubtitle}>
            Discover the best <strong>directory submission sites</strong> to submit your website, increase your online visibility, and improve your search engine rankings.
          </p>
        </section>

        {/* SEO Content Section */}
        <section style={{ maxWidth: '1200px', margin: '0 auto 30px', color: '#333', fontSize: '1.1rem', lineHeight: 1.6 }}>
          <h2>Why Use Directory Submission Sites?</h2>
          <p>
            Directory submission is an effective SEO strategy to increase your website’s visibility, build backlinks, and drive targeted traffic. Our curated list of top directory submission sites includes reputable platforms trusted by marketers worldwide.
          </p>
          <p>
            Submitting your website to these directories can enhance your online presence, improve your search rankings, and attract more visitors.
          </p>
          <p>
            Use relevant keywords, provide accurate information, and follow each directory’s submission guidelines to maximize your results.
          </p>

          <h3>Benefits of Directory Submission</h3>
          <ul>
            <li><strong>Quality Backlinks:</strong> Improve your site’s authority and SEO.</li>
            <li><strong>Increased Traffic:</strong> Drive more visitors from popular directories.</li>
            <li><strong>Brand Visibility:</strong> Enhance your online reputation and reach.</li>
            <li><strong>Cost-Effective Marketing:</strong> Many directories offer free or low-cost submissions.</li>
          </ul>
        </section>

        {/* Directory Submission Sites Table */}
        <section style={{ maxWidth: '1200px', margin: '0 auto 40px' }}>
          <h2 style={{ textAlign: 'center', color: '#228b22', marginBottom: '20px' }}>Top Directory Submission Sites</h2>
          <p style={{ maxWidth: 700, margin: '0 auto 30px', color: '#333', fontSize: '1.1rem', textAlign: 'center' }}>
            Submit your website to these top directory submission sites to improve your SEO and online visibility.
          </p>
          <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '100%', background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
            <thead>
              <tr style={{ backgroundColor: '#228b22', color: '#fff' }}>
                <th style={styles.th}>#</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Description</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((site, idx) => (
                <tr key={site.id} style={{ backgroundColor: idx % 2 === 0 ? '#f0fff0' : '#fff' }}>
                  <td style={styles.td}>{site.id}</td>
                  <td style={styles.td}>
                    <a href={site.url} target="_blank" rel="noopener noreferrer" style={{ color: '#228b22', textDecoration: 'none', fontWeight: 500 }}>
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
                  backgroundColor: currentPage === i + 1 ? '#228b22' : '#eee',
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
          © {new Date().getFullYear()} Directory Submission Directory. All rights reserved.
        </section>
      </main>
    </>
  );
};

export default DirectorySubmissionSites;
