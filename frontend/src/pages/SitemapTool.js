import React, { useState } from 'react';

function SitemapTool() {
  const [url, setUrl] = useState('');
  const [sitemap, setSitemap] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [checkResult, setCheckResult] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setSitemap(null);
    setCheckResult(null);
    setDownloadUrl(null);
    try {
      const response = await fetch('http://localhost:4000/api/sitemap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
      });
      if (!response.ok) throw new Error('Failed to generate sitemap');
      const data = await response.json();
      setSitemap(data.sitemap);
      const fullSitemapUrl = new URL(data.sitemap, window.location.origin).href;
      setDownloadUrl(fullSitemapUrl);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!downloadUrl) return;
    const downloadEndpoint = 'http://localhost:4000/api/sitemap/file';
    const link = document.createElement('a');
    link.href = downloadEndpoint;
    link.download = 'sitemap.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCheck = async () => {
    const checkEndpoint = 'http://localhost:4000/api/sitemap/file';
    setCheckResult('Checking sitemap...');
    try {
      const checkResponse = await fetch(checkEndpoint, { method: 'HEAD' });
      if (checkResponse.ok) {
        setCheckResult('✅ Sitemap is accessible and valid.');
      } else {
        setCheckResult(`❌ Sitemap check failed: ${checkResponse.status}`);
      }
    } catch (err) {
      setCheckResult(`❌ Error: ${err.message}`);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>🗺️ Sitemap Generator</h2>
        <input
          type="text"
          placeholder="Enter website URL"
          value={url}
          onChange={e => setUrl(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleGenerate} disabled={loading || !url} style={styles.button}>
          {loading ? 'Generating...' : 'Generate Sitemap'}
        </button>
        {error && <p style={styles.error}>{error}</p>}
        {sitemap && (
          <p>
            ✅ Sitemap generated: <a href={downloadUrl} target="_blank" rel="noopener noreferrer">{sitemap}</a>
          </p>
        )}
        <div style={styles.buttonGroup}>
          <button onClick={handleDownload} disabled={!downloadUrl} style={styles.button}>
            Download Sitemap
          </button>
          <button onClick={handleCheck} disabled={!downloadUrl} style={styles.button}>
            Check Sitemap
          </button>
        </div>
        {checkResult && <p style={styles.result}>{checkResult}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f7fa',
    padding: '20px',
  },
  box: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '500px',
    width: '100%',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '12px 10px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    margin: '5px',
    padding: '10px 16px',
    fontSize: '15px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
  buttonGroup: {
    marginTop: '15px',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  result: {
    marginTop: '15px',
    fontWeight: 'bold',
  }
};

export default SitemapTool;
