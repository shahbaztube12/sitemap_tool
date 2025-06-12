import React, { useEffect, useState } from 'react';

const Sitemap = () => {
  const [sitemapContent, setSitemapContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const response = await fetch('/api/sitemap/file');
        if (!response.ok) {
          throw new Error('Failed to fetch sitemap');
        }
        const text = await response.text();
        setSitemapContent(text);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSitemap();
  }, []);

  if (loading) {
    return <div>Loading sitemap...</div>;
  }

  if (error) {
    return <div>Error loading sitemap: {error}</div>;
  }

  return (
    <div>
      <h1>Sitemap</h1>
      <p>This page provides the sitemap of the website for easy navigation and SEO purposes.</p>
      <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', backgroundColor: '#f4f4f4', padding: '1rem', borderRadius: '4px', maxHeight: '600px', overflowY: 'auto' }}>
        {sitemapContent}
      </pre>
      <a href="/api/sitemap/file" target="_blank" rel="noopener noreferrer">View Sitemap XML File</a>
    </div>
  );
};

export default Sitemap;
