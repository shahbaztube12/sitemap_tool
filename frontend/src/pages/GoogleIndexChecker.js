import React, { useState } from 'react';

function GoogleIndexChecker() {
  const [url, setUrl] = useState('');
  const [checkResult, setCheckResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheck = async () => {
    setLoading(true);
    setError(null);
    setCheckResult(null);
    try {
      // Placeholder for API call to check Google index status
      // Example:
      // const response = await fetch('http://localhost:4000/api/google-index-check', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ url }),
      // });
      // if (!response.ok) throw new Error('Failed to check index status');
      // const data = await response.json();
      // setCheckResult(data.status);
      setCheckResult('URL is indexed on Google (placeholder).');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Google Index Checker</h2>
        <input
          type="text"
          placeholder="Enter URL to check"
          value={url}
          onChange={e => setUrl(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleCheck} disabled={loading || !url.trim()} style={styles.button}>
          {loading ? 'Checking...' : 'Check Index Status'}
        </button>
        {error && <p style={styles.error}>{error}</p>}
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
  error: {
    color: 'red',
    marginTop: '10px',
  },
  result: {
    marginTop: '15px',
    fontWeight: 'bold',
  }
};

export default GoogleIndexChecker;
