import React, { useState } from 'react';

function UrlDomainExtractor() {
  const [inputUrls, setInputUrls] = useState('');
  const [domains, setDomains] = useState(null);
  const [error, setError] = useState(null);

  const extractDomains = () => {
    setError(null);
    if (!inputUrls.trim()) {
      setError('Input URLs are required');
      return;
    }
    try {
      const urls = inputUrls.split('\\n').map(url => url.trim()).filter(url => url.length > 0);
      const extractedDomains = urls.map(url => {
        try {
          const urlObj = new URL(url);
          return urlObj.hostname;
        } catch {
          return 'Invalid URL';
        }
      });
      setDomains(extractedDomains.join('\\n'));
    } catch (err) {
      setError('Error extracting domains');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>URL Domain Extractor</h2>
        <textarea
          placeholder="Enter URLs, one per line"
          value={inputUrls}
          onChange={e => setInputUrls(e.target.value)}
          style={styles.textarea}
          rows={8}
        />
        <button onClick={extractDomains} disabled={!inputUrls.trim()} style={styles.button}>
          Extract Domains
        </button>
        {error && <p style={styles.error}>{error}</p>}
        {domains && (
          <textarea
            readOnly
            value={domains}
            style={styles.textarea}
            rows={8}
          />
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
  textarea: {
    width: '100%',
    padding: '12px 10px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
    fontFamily: 'monospace',
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
  }
};

export default UrlDomainExtractor;
