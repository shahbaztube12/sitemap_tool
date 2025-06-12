import React, { useState } from 'react';

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
};

const ImageSubmissionSites = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = imageSubmissionSites.slice(startIndex, startIndex + postsPerPage);

  return (
    <div style={{ textAlign: 'center', padding: '30px', background: 'linear-gradient(135deg, #fffaf0 0%, #fff0d0 100%)', minHeight: '100vh' }}>
      <h1 style={{ color: '#b36b00', marginBottom: 10 }}>Top Image Submission Sites</h1>
      <p style={{ maxWidth: 700, margin: '0 auto 30px', color: '#333', fontSize: '1.1rem' }}>
        Share and submit your images to these popular image submission sites to increase visibility and backlinks.
      </p>
      <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '95%', background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
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
      <div style={{ marginTop: '20px' }}>
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
          >
            {i + 1}
          </button>
        ))}
      </div>
      <footer style={{ marginTop: 40, color: '#555', fontSize: '1rem' }}>
        © {new Date().getFullYear()} Image Submission Directory. All rights reserved.
      </footer>
    </div>
  );
};

export default ImageSubmissionSites;
