import React, { useState } from 'react';

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
};

const ArticleSubmissionSites = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = articleSubmissionSites.slice(startIndex, startIndex + postsPerPage);

  return (
    <div style={{ textAlign: 'center', padding: '30px', background: 'linear-gradient(135deg, #f9f9f9 0%, #e0e0e0 100%)', minHeight: '100vh' }}>
      <h1 style={{ color: '#333', marginBottom: 10 }}>Top Article Submission Sites</h1>
      <p style={{ maxWidth: 700, margin: '0 auto 30px', color: '#333', fontSize: '1.1rem' }}>
        Submit your articles to these top article submission sites to increase your reach and improve SEO.
      </p>
      <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '95%', background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
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
      <div style={{ marginTop: '20px' }}>
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
          >
            {i + 1}
          </button>
        ))}
      </div>
      <footer style={{ marginTop: 40, color: '#555', fontSize: '1rem' }}>
        © {new Date().getFullYear()} Article Submission Directory. All rights reserved.
      </footer>
    </div>
  );
};

export default ArticleSubmissionSites;
