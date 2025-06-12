import React, { useState } from 'react';

function AboutUsPageGenerator() {
  const [companyName, setCompanyName] = useState('');
  const [description, setDescription] = useState('');
  const [generatedContent, setGeneratedContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setGeneratedContent(null);
    try {
      // Placeholder for API call to generate About Us page content
      // Example:
      // const response = await fetch('http://localhost:4000/api/about-us-generator', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ companyName, description }),
      // });
      // if (!response.ok) throw new Error('Failed to generate content');
      // const data = await response.json();
      // setGeneratedContent(data.content);
      setGeneratedContent('About Us page content generated successfully (placeholder).');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>About Us Page Generator</h2>
        <input
          type="text"
          placeholder="Enter company name"
          value={companyName}
          onChange={e => setCompanyName(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Enter company description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          style={styles.textarea}
          rows={6}
        />
        <button onClick={handleGenerate} disabled={loading || !companyName.trim()} style={styles.button}>
          {loading ? 'Generating...' : 'Generate About Us Content'}
        </button>
        {error && <p style={styles.error}>{error}</p>}
        {generatedContent && <pre style={styles.result}>{generatedContent}</pre>}
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
  textarea: {
    width: '100%',
    padding: '12px 10px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
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

export default AboutUsPageGenerator;
