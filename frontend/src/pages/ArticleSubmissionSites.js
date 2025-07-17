import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const articleSubmissionSites = [
  { id: 1, name: 'EzineArticles', url: 'https://www.ezinearticles.com', description: 'Popular article submission site with high traffic.' },
  { id: 2, name: 'ArticleCity', url: 'https://www.articlecity.com', description: 'Submit articles to reach a wide audience.' },
  { id: 3, name: 'Sooper Articles', url: 'https://www.sooperarticles.com', description: 'Free article submission platform.' },
  { id: 4, name: 'ArticleBase', url: 'https://www.articlebase.com', description: 'Submit articles and gain backlinks.' },
  { id: 5, name: 'Buzzle', url: 'https://www.buzzle.com', description: 'Article directory for various topics.' },
];

const postsPerPage = 5;
const totalPages = Math.ceil(articleSubmissionSites.length / postsPerPage);

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
    background: 'linear-gradient(135deg, #333 0%, #000 100%)',
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
    color: '#ccc',
    lineHeight: 1.6,
  },
  keywordHighlight: {
    fontWeight: '700',
    color: '#ff6600',
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
    color: '#ff6600',
    textDecoration: 'none',
  },
};

const faqData = [
  {
    question: 'What are article submission sites and how do they help SEO?',
    answer:
      'Article submission sites allow you to publish articles on various platforms, helping you build backlinks and increase your website traffic.',
  },
  {
    question: 'Are article submission sites free to use?',
    answer:
      'Many article submission sites are free, making them a cost-effective way to promote your content and improve SEO.',
  },
  {
    question: 'How often should I submit articles to these sites?',
    answer:
      'Regular submissions, such as monthly or bi-monthly, help maintain visibility and drive consistent traffic.',
  },
  {
    question: 'Can article submission improve my website ranking?',
    answer:
      'Yes, submitting articles to reputable sites can improve your search engine rankings by generating quality backlinks.',
  },
];

const ArticleSubmissionSites = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = articleSubmissionSites.slice(startIndex, startIndex + postsPerPage);

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
        <title>Top Article Submission Sites | Publish Articles & Boost SEO</title>
        <meta
          name="description"
          content="Explore the top article submission sites to publish your content, build backlinks, and increase your website traffic. Handpicked for quality and authority."
        />
        <meta
          name="keywords"
          content="article submission sites, content publishing, backlinks, SEO, content marketing"
        />
        <link rel="canonical" href="https://www.tarkashot.com/article-submission-sites" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main style={{ padding: '30px 20px', background: 'linear-gradient(135deg, #f9f9f9 0%, #e0e0e0 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section style={styles.hero} aria-label="Hero section with page title and description">
          <h1 style={styles.heroTitle}>
            Top <mark style={styles.keywordHighlight}>Article Submission Sites</mark> to Publish Articles & Boost SEO
          </h1>
          <p style={styles.heroSubtitle}>
            Discover the best <strong>article submission sites</strong> to publish your content, build backlinks, and increase your website authority.
          </p>
        </section>

        {/* SEO Content Section */}
        <section style={{ maxWidth: '1200px', margin: '0 auto 30px', color: '#333', fontSize: '1.1rem', lineHeight: 1.6 }}>
          <h2>Why Use Article Submission Sites?</h2>
          <p>
            Article submission is an effective way to increase your website traffic, improve your search engine rankings, and establish your authority in your niche. Our curated list of top article submission sites includes reputable platforms trusted by marketers worldwide.
          </p>
          <p>
            Publishing quality articles on these sites can drive referral traffic, enhance your online presence, and boost your SEO efforts.
          </p>
          <p>
            Use relevant keywords, create engaging content, and follow each site’s submission guidelines to maximize your results.
          </p>

          <h3>Benefits of Article Submission</h3>
          <ul>
            <li><strong>Quality Backlinks:</strong> Improve your site’s authority and SEO.</li>
            <li><strong>Increased Traffic:</strong> Drive more visitors from popular article directories.</li>
            <li><strong>Brand Authority:</strong> Establish your expertise and credibility.</li>
            <li><strong>Cost-Effective Marketing:</strong> Many sites are free or low-cost to use.</li>
          </ul>
        </section>

        {/* Article Submission Sites Table */}
        <section style={{ maxWidth: '1200px', margin: '0 auto 40px' }}>
          <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Top Article Submission Sites</h2>
          <p style={{ maxWidth: 700, margin: '0 auto 30px', color: '#333', fontSize: '1.1rem', textAlign: 'center' }}>
            Submit your articles to these top article submission sites to increase your reach and improve SEO.
          </p>
          <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '100%', background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
            <thead>
              <tr style={{ backgroundColor: '#333', color: '#fff' }}>
                <th style={styles.th}>#</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Description</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((site, idx) => (
                <tr key={site.id} style={{ backgroundColor: idx % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                  <td style={styles.td}>{site.id}</td>
                  <td style={styles.td}>
                    <a href={site.url} target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none', fontWeight: 500 }}>
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
                  backgroundColor: currentPage === i + 1 ? '#333' : '#eee',
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
          © {new Date().getFullYear()} Article Submission Directory. All rights reserved.
        </section>
      </main>
    </>
  );
};

export default ArticleSubmissionSites;
