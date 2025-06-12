import React, { useState } from 'react';

function CanonicalTagGenerator() {
  const [url, setUrl] = useState('');
  const [canonicalTag, setCanonicalTag] = useState(null);
  const [error, setError] = useState(null);

  const generateCanonicalTag = () => {
    setError(null);
    if (!url.trim()) {
      setError('URL is required');
      return;
    }
    const tag = `<link rel="canonical" href="${url.trim()}" />`;
    setCanonicalTag(tag);
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Canonical Tag Generator</h2>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={e => setUrl(e.target.value)}
          style={styles.input}
        />
        <button onClick={generateCanonicalTag} disabled={!url.trim()} style={styles.button}>
          Generate Canonical Tag
        </button>
        {error && <p style={styles.error}>{error}</p>}
        {canonicalTag && (
          <pre style={styles.result}>{canonicalTag}</pre>
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
  result: {
    marginTop: '15px',
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
    fontWeight: 'bold',
  }
};

export default CanonicalTagGenerator;
