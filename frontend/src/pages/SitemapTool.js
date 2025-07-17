import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a sitemap generator tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A sitemap generator tool helps you create an XML sitemap for your website, which improves search engine indexing and SEO."
      }
    },
    {
      "@type": "Question",
      "name": "Why is an XML sitemap important for SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "XML sitemaps help search engines discover and crawl your website pages more efficiently, improving your site's visibility in search results."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use this sitemap generator tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply enter your website URL and click 'Generate Sitemap'. You can then download or check the sitemap file."
      }
    },
    {
      "@type": "Question",
      "name": "Is this tool free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this sitemap generator tool is completely free and easy to use."
      }
    }
  ]
};

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://sitemap-backend.onrender.com';

function SitemapTool() {
  const [url, setUrl] = useState('');
  const [sitemap, setSitemap] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [checkResult, setCheckResult] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    fetchWebsites();
  }, []);

  const fetchWebsites = async () => {
    try {
      const response = await fetch(API_BASE_URL + '/sitemap');
      if (!response.ok) throw new Error('Failed no to fetch websites');
      const data = await response.json();
      setWebsites(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setSitemap(null);
    setCheckResult(null);
    setDownloadUrl(null);
    try {
      const response = await fetch(API_BASE_URL + '/sitemap', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url })
      });
      if (!response.ok) throw new Error('Failed to generate sitemap');
      const data = await response.json();
      setSitemap(data.sitemap);
      // If data.sitemap is a relative path, construct full URL, else use as is
      let fullSitemapUrl;
      try {
        // Fix: Construct full URL using backend API base URL + /public + sitemap path
        fullSitemapUrl = new URL('/public' + data.sitemap, API_BASE_URL).href;
      } catch (e) {
        fullSitemapUrl = data.sitemap;
      }
      setDownloadUrl(fullSitemapUrl);
      fetchWebsites(); // refresh comparison table
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!downloadUrl) return;
    try {
      const response = await fetch(downloadUrl);
      if (!response.ok) throw new Error('Network response was not ok');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = downloadUrl.split('/').pop();
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download sitemap file.');
    }
  };

  const handleCheck = async () => {
    if (!downloadUrl) return;
    setCheckResult('Checking sitemap...');
    try {
      const checkResponse = await fetch(downloadUrl, { method: 'HEAD' });
      if (checkResponse.ok) {
        setCheckResult('✅ Sitemap is accessible and valid.');
      } else {
        setCheckResult('❌ Sitemap check failed: ' + checkResponse.status);
      }
    } catch (err) {
      setCheckResult('❌ Error: ' + err.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sitemap Generator Tool - Generate XML Sitemap for SEO</title>
        <meta name="description" content="Use our sitemap generator tool to create XML sitemaps for your website. Improve SEO and search engine indexing with ease." />
        <meta name="keywords" content="sitemap generator tool, XML sitemap, SEO sitemap, sitemap generator" />
        <meta name="google-site-verification" content="KS3A3Db_7G6b0taUf0E67lZ777syPU4fEWEEcMbyz_0" />
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      </Helmet>

      <main style={styles.main}>
        {/* Hero Section */}
        <section style={styles.hero}>
          <h1 style={styles.heroTitle}>Sitemap Generator Tool</h1>
          <p style={styles.heroSubtitle}>
            Easily create an XML sitemap for your website to boost SEO, improve search engine indexing, and enhance your site's visibility.
          </p>
          <div style={styles.inputGroup}>
            <input
              type="url"
              placeholder="Enter your website URL"
              value={url}
              onChange={e => setUrl(e.target.value)}
              style={styles.input}
              aria-label="Website URL"
            />
            <button onClick={handleGenerate} disabled={loading || !url} style={styles.button}>
              {loading ? 'Generating...' : 'Generate Sitemap'}
            </button>
          </div>
      {error && <p style={styles.error}>{error}</p>}
      {sitemap && (
        <p style={styles.success}>
          ✅ Sitemap generated: <a href={downloadUrl} target="_blank" rel="noopener noreferrer" style={styles.link}>{downloadUrl}</a>
        </p>
      )}
      <div style={styles.buttonGroup}>
        <button onClick={handleDownload} disabled={!downloadUrl} style={styles.buttonSecondary} type="button">
          Download Sitemap
        </button>
        <button onClick={handleCheck} disabled={!downloadUrl} style={styles.buttonSecondary} type="button">
          Check Sitemap
        </button>
      </div>
      {checkResult && <p style={styles.checkResult}>{checkResult}</p>}
    </section>

        {/* Comparison Table Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Comparison of Generated Sitemaps</h2>
          <div style={styles.tableWrapper}>
            <table style={styles.table} aria-label="Comparison of generated sitemaps">
              <thead>
                <tr>
                  <th style={styles.th}>Website URL</th>
                  <th style={styles.th}>Pages Count</th>
                  <th style={styles.th}>Sitemap Link</th>
                </tr>
              </thead>
              <tbody>
                {websites.length === 0 ? (
                  <tr>
                    <td colSpan="3" style={styles.tdCenter}>No sitemaps generated yet.</td>
                  </tr>
                ) : (
                  websites.map(site => (
                    <tr key={site._id}>
                      <td style={styles.td}>
                        <a href={site.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
                          {site.url}
                        </a>
                      </td>
                      <td style={styles.td}>{site.pages}</td>
                      <td style={styles.td}>
                        <a href={site.sitemapPath} target="_blank" rel="noopener noreferrer" style={styles.link}>
                          View Sitemap
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Benefits Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Benefits of Using Our Sitemap Generator Tool</h2>
          <ul style={styles.benefitsList}>
            <li>✅ Improves your website's SEO and search engine ranking</li>
            <li>✅ Helps search engines crawl your website more efficiently</li>
            <li>✅ Easy to use with a simple and intuitive interface</li>
            <li>✅ Generates XML sitemaps compatible with all major search engines</li>
            <li>✅ Free and fast sitemap generation</li>
          </ul>
        </section>

        {/* FAQs Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
          <dl style={styles.faqList}>
            <dt style={styles.faqQuestion}>What is a sitemap generator tool?</dt>
            <dd style={styles.faqAnswer}>
              A sitemap generator tool helps you create an XML sitemap for your website, which improves search engine indexing and SEO.
            </dd>
            <dt style={styles.faqQuestion}>Why is an XML sitemap important for SEO?</dt>
            <dd style={styles.faqAnswer}>
              XML sitemaps help search engines discover and crawl your website pages more efficiently, improving your site's visibility in search results.
            </dd>
            <dt style={styles.faqQuestion}>How do I use this sitemap generator tool?</dt>
            <dd style={styles.faqAnswer}>
              Simply enter your website URL and click 'Generate Sitemap'. You can then download or check the sitemap file.
            </dd>
            <dt style={styles.faqQuestion}>Is this tool free to use?</dt>
            <dd style={styles.faqAnswer}>
              Yes, this sitemap generator tool is completely free and easy to use.
            </dd>
          </dl>
        </section>

        {/* CTA Section */}
        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Ready to Improve Your Website's SEO?</h2>
          <p style={styles.ctaText}>Generate your XML sitemap now and boost your search engine rankings!</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={styles.ctaButton}>
            Generate Sitemap
          </button>
        </section>
      </main>
    </>
  );
}

const styles = {
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#222',
  },
  hero: {
    textAlign: 'center',
    padding: '60px 20px 40px',
    backgroundColor: '#e9f0ff',
    borderRadius: '8px',
  },
  heroTitle: {
    fontSize: '2.8rem',
    marginBottom: '15px',
    fontWeight: '700',
    color: '#003366',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#555',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  inputGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  input: {
    flex: '1 1 300px',
    padding: '12px 15px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '12px 25px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    minWidth: '160px',
    transition: 'background-color 0.3s ease',
  },
  buttonSecondary: {
    padding: '10px 20px',
    fontSize: '0.9rem',
    borderRadius: '6px',
    border: '1px solid #007bff',
    backgroundColor: '#fff',
    color: '#007bff',
    cursor: 'pointer',
    margin: '5px',
    minWidth: '140px',
    transition: 'background-color 0.3s ease',
  },
  error: {
    color: '#d9534f',
    marginTop: '15px',
  },
  success: {
    color: '#28a745',
    marginTop: '15px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
  buttonGroup: {
    marginTop: '20px',
  },
  checkResult: {
    marginTop: '15px',
    fontWeight: '600',
  },
  section: {
    marginTop: '60px',
    padding: '0 10px',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '25px',
    color: '#003366',
    fontWeight: '700',
    textAlign: 'center',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '1rem',
  },
  th: {
    borderBottom: '3px solid #007bff',
    padding: '12px 15px',
    textAlign: 'left',
    color: '#003366',
  },
  td: {
    borderBottom: '1px solid #ddd',
    padding: '12px 15px',
  },
  tdCenter: {
    textAlign: 'center',
    padding: '20px',
    color: '#777',
  },
  benefitsList: {
    listStyleType: 'none',
    paddingLeft: '0',
    maxWidth: '700px',
    margin: '0 auto',
    fontSize: '1.1rem',
    color: '#444',
  },
  faqList: {
    maxWidth: '700px',
    margin: '0 auto',
    fontSize: '1rem',
    color: '#333',
  },
  faqQuestion: {
    fontWeight: '700',
    marginTop: '20px',
  },
  faqAnswer: {
    marginTop: '8px',
    lineHeight: '1.6',
  },
  ctaSection: {
    marginTop: '80px',
    padding: '40px 20px',
    backgroundColor: '#003366',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '8px',
  },
  ctaTitle: {
    fontSize: '2.2rem',
    marginBottom: '15px',
    fontWeight: '700',
  },
  ctaText: {
    fontSize: '1.2rem',
    marginBottom: '30px',
  },
  ctaButton: {
    padding: '14px 30px',
    fontSize: '1.1rem',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#ffcc00',
    color: '#003366',
    cursor: 'pointer',
    fontWeight: '700',
    transition: 'background-color 0.3s ease',
  },
};

export default SitemapTool;
