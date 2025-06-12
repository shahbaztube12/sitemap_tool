import React, { useState } from 'react';

const videoSubmissionSites = [
  { id: 1, name: 'YouTube', url: 'https://www.youtube.com', description: 'Largest video sharing platform.' },
  { id: 2, name: 'Vimeo', url: 'https://vimeo.com', description: 'High-quality video hosting and sharing.' },
  { id: 3, name: 'Dailymotion', url: 'https://www.dailymotion.com', description: 'Video sharing platform with diverse content.' },
  { id: 4, name: 'Metacafe', url: 'https://www.metacafe.com', description: 'Short-form video entertainment site.' },
  { id: 5, name: 'Veoh', url: 'https://www.veoh.com', description: 'Internet television network.' },
];

const postsPerPage = 5;
const totalPages = Math.ceil(videoSubmissionSites.length / postsPerPage);

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

const VideoSubmissionSites = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = videoSubmissionSites.slice(startIndex, startIndex + postsPerPage);

  return (
    <div style={{ textAlign: 'center', padding: '30px', background: 'linear-gradient(135deg, #f0f0ff 0%, #d0d0ff 100%)', minHeight: '100vh' }}>
      <h1 style={{ color: '#00008b', marginBottom: 10 }}>Top Video Submission Sites</h1>
      <p style={{ maxWidth: 700, margin: '0 auto 30px', color: '#333', fontSize: '1.1rem' }}>
        Submit your videos to these top video submission sites to increase views and engagement.
      </p>
      <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '95%', background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
        <thead>
          <tr style={{ backgroundColor: '#00008b', color: '#fff' }}>
            <th style={styles.th}>#</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Description</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((site, idx) => (
            <tr key={site.id} style={{ backgroundColor: idx % 2 === 0 ? '#f0f0ff' : '#fff' }}>
              <td style={styles.td}>{site.id}</td>
              <td style={styles.td}>
                <a href={site.url} target="_blank" rel="noopener noreferrer" style={{ color: '#00008b', textDecoration: 'none', fontWeight: 500 }}>
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
              backgroundColor: currentPage === i + 1 ? '#00008b' : '#eee',
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
        © {new Date().getFullYear()} Video Submission Directory. All rights reserved.
      </footer>
    </div>
  );
};

export default VideoSubmissionSites;
