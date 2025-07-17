import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const imageSubmissionSites = [
  { id: 1, name: 'Flickr', url: 'https://www.flickr.com', description: 'Popular photo sharing and hosting service.' },
  { id: 2, name: 'Imgur', url: 'https://imgur.com', description: 'Image hosting and sharing community.' },
  { id: 3, name: 'Photobucket', url: 'https://photobucket.com', description: 'Image and video hosting platform.' },
  { id: 4, name: '500px', url: 'https://500px.com', description: 'Photography community and marketplace.' },
  { id: 5, name: 'SmugMug', url: 'https://www.smugmug.com', description: 'Photo sharing and image hosting service.' },
];

const postsPerPage = 5;
const totalPages = Math.ceil(imageSubmissionSites.length / postsPerPage);

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
    background: 'linear-gradient(135deg, #b36b00 0%, #804d00 100%)',
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
    color: '#d2691e',
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
    color: '#d2691e',
    textDecoration: 'none',
  },
};

const faqData = [
  {
    question: 'What are image submission sites and how do they help SEO?',
    answer:
      'Image submission sites allow you to share and host images, helping to increase backlinks and drive traffic to your website.',
  },
  {
    question: 'Are image submission sites free to use?',
    answer:
      'Many image submission sites offer free accounts, making them a cost-effective way to promote your images and website.',
  },
  {
    question: 'How often should I submit images to these sites?',
    answer:
      'Regular submissions, such as monthly or bi-monthly, help maintain visibility and engagement on image platforms.',
  },
  {
    question: 'Can image submission improve my website ranking?',
    answer:
      'Yes, submitting images to reputable sites can improve your SEO by generating quality backlinks and referral traffic.',
  },
];

const ImageSubmissionSites = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = imageSubmissionSites.slice(startIndex, startIndex + postsPerPage);

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
        <title>Top Image Submission Sites | Share Images & Boost SEO</title>
        <meta
          name="description"
          content="Explore the top image submission sites to share your images, build backlinks, and increase your website traffic. Handpicked for quality and authority."
        />
        <meta
          name="keywords"
          content="image submission sites, photo sharing, backlinks, SEO, image hosting"
        />
        <link rel="canonical" href="https://www.tarkashot.com/image-submission-sites" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main style={{ padding: '30px 20px', background: 'linear-gradient(135deg, #fffaf0 0%, #fff0d0 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section style={styles.hero} aria-label="Hero section with page title and description">
          <h1 style={styles.heroTitle}>
            Top <mark style={styles.keywordHighlight}>Image Submission Sites</mark> to Share Images & Boost SEO
          </h1>
          <p style={styles.heroSubtitle}>
            Discover the best <strong>image submission sites</strong> to share your images, increase your website visibility, and improve your SEO with quality backlinks.
          </p>
        </section>

        {/* SEO Content Section */}
        <section style={{ maxWidth: '1200px', margin: '0 auto 30px', color: '#333', fontSize: '1.1rem', lineHeight: 1.6 }}>
          <h2>Why Use Image Submission Sites?</h2>
          <p>
            Image submission sites are effective tools to increase your website traffic, improve your search engine rankings, and showcase your visual content. Our curated list of top image submission sites includes reputable platforms trusted by photographers and marketers worldwide.
          </p>
          <p>
            Sharing your images regularly on these sites can generate valuable backlinks, drive referral traffic, and enhance your online presence.
          </p>
          <p>
            Use relevant keywords, create high-quality images, and follow each site’s submission guidelines to maximize your results.
          </p>

          <h3>Benefits of Image Submission</h3>
          <ul>
            <li><strong>Increased Website Traffic:</strong> Drive more visitors from popular image platforms.</li>
            <li><strong>Improved SEO:</strong> Gain quality backlinks that boost your search rankings.</li>
            <li><strong>Brand Visibility:</strong> Showcase your visual content to a wider audience.</li>
            <li><strong>Cost-Effective Marketing:</strong> Many sites offer free or affordable image hosting.</li>
          </ul>
        </section>

        {/* Image Submission Sites Table */}
        <section style={{ maxWidth: '1200px', margin: '0 auto 40px' }}>
          <h2 style={{ textAlign: 'center', color: '#b36b00', marginBottom: '20px' }}>Top Image Submission Sites</h2>
          <p style={{ maxWidth: 700, margin: '0 auto 30px', color: '#333', fontSize: '1.1rem', textAlign: 'center' }}>
            Share and submit your images to these popular image submission sites to increase visibility and backlinks.
          </p>
          <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '100%', background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
            <thead>
              <tr style={{ backgroundColor: '#b36b00', color: '#fff' }}>
                <th style={styles.th}>#</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Description</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((site, idx) => (
                <tr key={site.id} style={{ backgroundColor: idx % 2 === 0 ? '#fffaf0' : '#fff' }}>
                  <td style={styles.td}>{site.id}</td>
                  <td style={styles.td}>
                    <a href={site.url} target="_blank" rel="noopener noreferrer" style={{ color: '#b36b00', textDecoration: 'none', fontWeight: 500 }}>
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
                  backgroundColor: currentPage === i + 1 ? '#b36b00' : '#eee',
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
          © {new Date().getFullYear()} Image Submission Directory. All rights reserved.
        </section>
      </main>
    </>
  );
};

export default ImageSubmissionSites;
