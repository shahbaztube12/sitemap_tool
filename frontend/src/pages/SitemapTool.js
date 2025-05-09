import React, { useState } from 'react';
import axios from 'axios';

function SitemapTool() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:4000/api/sitemap', { url });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to generate sitemap');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!result || !result.sitemap) return;
    try {
      const response = await axios.get(`http://localhost:4000/${result.sitemap}`, {
        responseType: 'blob',
      });
      const urlBlob = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = urlBlob;
      link.setAttribute('download', result.sitemap.split('/').pop());
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(urlBlob);
    } catch (err) {
      alert('Failed to download sitemap');
    }
  };

  return (
    <main className="page-content">
      <h2>Website Sitemap Generator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Generate Sitemap'}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {result && (
        <div className="result">
          <h3>Results</h3>
          <p>Website ID: {result.id}</p>
          <p>Pages found: {result.pages}</p>
          <p>Sitemap generated at: {result.sitemap}</p>
          <button onClick={() => window.open(`http://localhost:4000/${result.sitemap}`, '_blank')}>
            View Sitemap
          </button>
          <button onClick={handleDownload} style={{ marginLeft: '10px' }}>
            Download Sitemap
          </button>
        </div>
      )}
    </main>
  );
}

export default SitemapTool;
