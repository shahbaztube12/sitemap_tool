import React, { useState } from 'react';

function YouTubeVideoTagsExtractor() {
  const [videoUrl, setVideoUrl] = useState('');
  const [tags, setTags] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleExtractTags = async () => {
    setLoading(true);
    setError(null);
    setTags(null);
    try {
      // Placeholder for API call to extract YouTube video tags
      // Example:
      // const response = await fetch('http://localhost:4000/api/youtube-video-tags-extractor', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ videoUrl }),
      // });
      // if (!response.ok) throw new Error('Failed to extract tags');
      // const data = await response.json();
      // setTags(data.tags);
      setTags('YouTube video tags extracted successfully (placeholder).');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>YouTube Video Tags Extractor</h2>
        <input
          type="text"
          placeholder="Enter YouTube video URL"
          value={videoUrl}
          onChange={e => setVideoUrl(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleExtractTags} disabled={loading || !videoUrl.trim()} style={styles.button}>
          {loading ? 'Extracting...' : 'Extract Tags'}
        </button>
        {error && <p style={styles.error}>{error}</p>}
        {tags && <p style={styles.result}>{tags}</p>}
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
    fontWeight: 'bold',
  }
};

export default YouTubeVideoTagsExtractor;
