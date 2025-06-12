import React, { useState } from 'react';

const socialBookmarkingSites = [
  { id: 1, name: 'Reddit', url: 'https://www.reddit.com', description: 'Popular social news aggregation and discussion site.' },
  { id: 2, name: 'Digg', url: 'https://digg.com', description: 'News aggregator with curated stories.' },
  { id: 3, name: 'StumbleUpon (now Mix)', url: 'https://mix.com', description: 'Content discovery platform.' },
  { id: 4, name: 'Slashdot', url: 'https://slashdot.org', description: 'Technology-related news and discussion.' },
  { id: 5, name: 'Delicious', url: 'https://del.icio.us', description: 'Social bookmarking web service for storing, sharing, and discovering web bookmarks.' },
];

const postsPerPage = 5;
const totalPages = Math.ceil(socialBookmarkingSites.length / postsPerPage);

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

const SocialBookmarkingSites = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = socialBookmarkingSites.slice(startIndex, startIndex + postsPerPage);

  return (
    <div style={{ textAlign: 'center', padding: '30px', background: 'linear-gradient(135deg, #f0f8ff 0%, #dbe9ff 100%)', minHeight: '100vh' }}>
      <h1 style={{ color: '#0056b3', marginBottom: 10 }}>Top Social Bookmarking Sites</h1>
      <p style={{ maxWidth: 700, margin: '0 auto 30px', color: '#333', fontSize: '1.1rem' }}>
        Discover the best social bookmarking sites to share and discover content, increase your website traffic, and engage with communities.
      </p>
      <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '95%', background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
        <thead>
          <tr style={{ backgroundColor: '#0056b3', color: '#fff' }}>
            <th style={styles.th}>#</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Description</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((site, idx) => (
            <tr key={site.id} style={{ backgroundColor: idx % 2 === 0 ? '#f0f8ff' : '#fff' }}>
              <td style={styles.td}>{site.id}</td>
              <td style={styles.td}>
                <a href={site.url} target="_blank" rel="noopener noreferrer" style={{ color: '#0056b3', textDecoration: 'none', fontWeight: 500 }}>
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
              backgroundColor: currentPage === i + 1 ? '#0056b3' : '#eee',
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
        © {new Date().getFullYear()} Social Bookmarking Directory. All rights reserved.
      </footer>
    </div>
  );
};

export default SocialBookmarkingSites;
