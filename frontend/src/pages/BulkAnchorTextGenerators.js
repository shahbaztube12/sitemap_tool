import React, { useState } from 'react';

function BulkAnchorTextGenerators() {
  const [inputTexts, setInputTexts] = useState('');
  const [generatedAnchors, setGeneratedAnchors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setGeneratedAnchors(null);
    try {
      // Placeholder for API call to generate bulk anchor texts
      // Example:
      // const response = await fetch('http://localhost:4000/api/bulk-anchor-text', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ texts: inputTexts.split('\\n') }),
      // });
      // if (!response.ok) throw new Error('Failed to generate anchor texts');
      // const data = await response.json();
      // setGeneratedAnchors(data.anchors);
      setGeneratedAnchors('Bulk anchor texts generated successfully (placeholder).');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Bulk Anchor Text Generators</h2>
        <textarea
          placeholder="Enter texts, one per line"
          value={inputTexts}
          onChange={e => setInputTexts(e.target.value)}
          style={styles.textarea}
          rows={8}
        />
        <button onClick={handleGenerate} disabled={loading || !inputTexts.trim()} style={styles.button}>
          {loading ? 'Generating...' : 'Generate Anchor Texts'}
        </button>
        {error && <p style={styles.error}>{error}</p>}
        {generatedAnchors && <p style={styles.result}>{generatedAnchors}</p>}
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
  },
  result: {
    marginTop: '15px',
    fontWeight: 'bold',
  }
};

export default BulkAnchorTextGenerators;
