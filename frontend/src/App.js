import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Website Sitemap Generator</h1>
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
            <h2>Results</h2>
            <p>Website ID: {result.id}</p>
            <p>Pages found: {result.pages}</p>
            <p>Sitemap generated at: {result.sitemap}</p>
            <a 
              href={`http://localhost:4000/${result.sitemap}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Sitemap
            </a>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
