import { useState } from 'react';
import TopSlider from '../components/TopSlider';

function GoogleIndexChecker() {
  const [urls, setUrls] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUrlsChange = (e) => {
    setUrls(e.target.value);
  };

  const handleCheck = async () => {
    const urlList = urls.split('\n').map(url => url.trim()).filter(url => url.length > 0);
    if (urlList.length === 0) {
      setError('Please enter at least one URL');
      return;
    }
    setLoading(true);
    setError(null);
    setResults([]);
    try {
      const response = await fetch('http://localhost:4000/api/google-index-checker/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ urls: urlList }),
      });
      if (!response.ok) throw new Error('Failed to check index status');
      const data = await response.json();
      setResults(data.result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>
        {`
          body {
            background: linear-gradient(90deg, #e3f0ff 0%, #f8faff 100%);
            width: 100%;
            margin: 0;
          }
          .seo-page {
            width: 100%;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            background: linear-gradient(90deg, #e3f0ff 0%, #f8faff 100%);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          .seo-main-content {
            max-width: 1200px;
            margin: 40px auto 40px auto;
            background: #fff;
            border-radius: 18px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.08);
            padding: 24px 32px;
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
            justify-content: center;
          }
          .seo-section {
            flex: 1 1 500px;
            min-width: 320px;
            background: #f9f9f9;
            border-radius: 12px;
            padding: 24px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          }
          .seo-section h1, .seo-section h2, .seo-section h3 {
            color: #007bff;
            margin-bottom: 16px;
          }
          .seo-section h1 {
            font-size: 2.3rem;
            margin-top: 0;
            letter-spacing: 1px;
          }
          .seo-section h2 {
            font-size: 1.8rem;
            margin-top: 0;
          }
          .seo-section h3 {
            font-size: 1.3rem;
          }
          .seo-section p, .seo-section ul, .seo-section ol {
            color: #222;
            font-size: 1.1rem;
            line-height: 1.5;
          }
          .seo-section ul, .seo-section ol {
            padding-left: 1.2rem;
          }
          .textarea {
            width: 100%;
            padding: 10px;
            font-size: 1rem;
            border-radius: 6px;
            border: 1px solid #ccc;
            margin-bottom: 15px;
            box-sizing: border-box;
            resize: vertical;
          }
          .button {
            padding: 12px 20px;
            font-size: 1.1rem;
            border-radius: 8px;
            border: none;
            background-color: #007bff;
            color: white;
            cursor: pointer;
            width: 100%;
            margin-bottom: 15px;
          }
          .button:disabled {
            background-color: #a0c8ff;
            cursor: not-allowed;
          }
          .error {
            color: red;
            margin-top: 10px;
            font-weight: 600;
          }
          .resultsTable {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
          }
          .resultsTable th, .resultsTable td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          .resultsTable thead {
            background-color: #007bff;
            color: white;
          }
        `}
      </style>
      <div className="seo-page">
        <TopSlider />
        <main className="seo-main-content">
   
            <h1 id="google-index-checker-title">Google Index Checker - Verify Your Website's Google Index Status</h1>
            <h2>Google Index Checker</h2>
            <p>Enter URLs (one per line) to check if they are indexed by Google.</p>
              {/* Google Index Checker Section */}
          <section className="seo-section" aria-labelledby="google-index-checker-title">
            <h1 id="google-index-checker-title">Google Index Checker - Verify Your Website's Google Index Status</h1>
            <h2>Google Index Checker</h2>
            <p>Enter URLs (one per line) to check if they are indexed by Google.</p>
            <p>
              Ensuring your web pages are indexed by Google is crucial for visibility in search results. Our Google Index Checker tool helps you quickly verify the index status of multiple URLs, so you can identify pages that need attention or re-submission.
            </p>
            <p>
              Regularly monitoring your website's index status helps maintain SEO health and ensures that your content is discoverable by your target audience. This tool supports bulk URL checks, saving you time and effort.
            </p>
            <textarea
              value={urls}
              onChange={handleUrlsChange}
              placeholder="Enter URLs here, one per line"
              className="textarea"
              aria-describedby="google-index-checker-desc"
            />
            <button
              onClick={handleCheck}
              disabled={loading}
              className="button"
              aria-live="polite"
            >
              {loading ? 'Checking...' : 'Check Index Status'}
            </button>
            {error && <p className="error">{error}</p>}
            {results.length > 0 && (
              <table className="resultsTable" aria-label="Google index check results">
                <thead>
                  <tr>
                    <th>URL</th>
                    <th>Indexed</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map(({ url, indexed }, idx) => (
                    <tr key={idx}>
                      <td>{url}</td>
                      <td>{indexed ? 'Yes' : 'No'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
        </main>
      </div>
    </>
  );
}

export default GoogleIndexChecker;
