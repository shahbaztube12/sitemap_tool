import React, { useState } from 'react';

function CommaSeparatorTool() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [error, setError] = useState(null);

  const handleConvert = () => {
    setError(null);
    if (!inputText.trim()) {
      setError('Input text is required');
      return;
    }
    // Convert input text lines to comma separated string
    const lines = inputText.split('\\n').map(line => line.trim()).filter(line => line.length > 0);
    const result = lines.join(', ');
    setOutputText(result);
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Comma Separator Tool</h2>
        <textarea
          placeholder="Enter text, one item per line"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          style={styles.textarea}
          rows={8}
        />
        <button onClick={handleConvert} disabled={!inputText.trim()} style={styles.button}>
          Convert to Comma Separated
        </button>
        {error && <p style={styles.error}>{error}</p>}
        {outputText && (
          <textarea
            readOnly
            value={outputText}
            style={styles.textarea}
            rows={4}
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

export default CommaSeparatorTool;
