import React, { useState } from 'react';

function SeoAudit() {
  const [url, setUrl] = useState('');
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAudit = async () => {
    setLoading(true);
    setError(null);
    setReport(null);
    try {
      const response = await fetch('http://localhost:4000/api/seo-audit/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to perform SEO audit');
      }
      const data = await response.json();
      setReport(data.report);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Free SEO Audit Tool</h2>
        <input
          type="text"
          placeholder="Enter URL to audit"
          value={url}
          onChange={e => setUrl(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAudit} disabled={loading || !url.trim()} style={styles.button}>
          {loading ? 'Auditing...' : 'Run SEO Audit'}
        </button>
        {error && <p style={styles.error}>{error}</p>}
        {report && (
          <div style={styles.report}>
            <h3>SEO Audit Report for {url}</h3>
            <p><strong>Title:</strong> {report.title}</p>
            <p><strong>Meta Description:</strong> {report.metaDescription}</p>
            <p><strong>H1 Tags:</strong></p>
            <ul>
              {report.h1Tags.length > 0 ? report.h1Tags.map((tag, idx) => <li key={idx}>{tag}</li>) : <li>None found</li>}
            </ul>
            <p><strong>H2 Tags:</strong></p>
            <ul>
              {report.h2Tags.length > 0 ? report.h2Tags.map((tag, idx) => <li key={idx}>{tag}</li>) : <li>None found</li>}
            </ul>
            <p><strong>Page Speed Score:</strong> {report.pageSpeedScore}</p>
          </div>
        )}
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
    maxWidth: '600px',
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
  error: {
    color: 'red',
    marginTop: '10px',
  },
  report: {
    marginTop: '20px',
    textAlign: 'left',
  },
};

export default SeoAudit;
