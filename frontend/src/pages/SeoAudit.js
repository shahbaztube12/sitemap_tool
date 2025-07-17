import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    question: "What is a Free SEO Audit?",
    answer:
      "A Free SEO Audit analyzes your website's SEO performance, identifies issues, and provides actionable insights to improve your search engine rankings.",
  },
  {
    question: "How do I use the Free SEO Audit Tool?",
    answer:
      "Enter your website URL and click 'Run SEO Audit' to get a detailed report on your site's SEO health.",
  },
  {
    question: "Why is SEO auditing important?",
    answer:
      "SEO auditing helps you understand your website's strengths and weaknesses, enabling you to optimize your site for better visibility and traffic.",
  },
  {
    question: "Is this tool really free?",
    answer:
      "Yes, our Free SEO Audit Tool is completely free and easy to use for everyone.",
  },
];

function SeoAudit() {
  const [url, setUrl] = useState('');
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [, setProgress] = useState(0);

  const handleAudit = async () => {
    setLoading(true);
    setError(null);
    setReport(null);
    setProgress(0);
    try {
      // Simulate progress bar for demo
      let progressValue = 0;
      const progressInterval = setInterval(() => {
        progressValue += 10;
        if (progressValue > 90) {
          clearInterval(progressInterval);
        } else {
          setProgress(progressValue);
        }
      }, 300);

      const response = await fetch('http://localhost:4000/api/seo-audit/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to perform SEO audit');
      }
      const data = await response.json();
      clearInterval(progressInterval);
      setProgress(100);
      setReport(data.report);
    } catch (err) {
      setError(err.message);
      setProgress(0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Free SEO Audit Tool - Analyze Your Website SEO Performance</title>
        <meta
          name="description"
          content="Use our Free SEO Audit Tool to analyze your website's SEO performance, identify issues, and improve search engine rankings."
        />
        <meta
          name="keywords"
          content="SEO Audit Tool, free SEO audit, website SEO analysis, SEO performance"
        />
        <link rel="canonical" href="https://yourdomain.com/seo-audit" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
        {/* Hero Section */}
        <section
          style={{
            backgroundColor: '#e9f0fb',
            padding: '3rem 1rem',
            textAlign: 'center',
            borderRadius: '8px',
            marginBottom: '2rem',
          }}
        >
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Free SEO Audit Tool
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#333' }}>
            Analyze your website's SEO health and get actionable insights to improve your search engine rankings.
          </p>
        </section>

        {/* Audit Section */}
        <section
          style={{
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '2rem',
            textAlign: 'center',
          }}
        >
          <h2>Run Your SEO Audit</h2>
          <input
            type="text"
            placeholder="Enter URL to audit"
            value={url}
            onChange={e => setUrl(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 10px',
              margin: '15px 0',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
            aria-label="URL to audit"
          />
          <button
            onClick={handleAudit}
            disabled={loading || !url.trim()}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: '#007bff',
              color: 'white',
              cursor: loading || !url.trim() ? 'not-allowed' : 'pointer',
            }}
            aria-disabled={loading || !url.trim()}
          >
            {loading ? 'Auditing...' : 'Run SEO Audit'}
          </button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          {report && (
            <>
              <div style={styles.report}>
                <h3>SEO Audit Report for {url}</h3>
                <p><strong>Title:</strong> {report.title}</p>
                <p><strong>Meta Description:</strong> {report.metaDescription}</p>
                <p><strong>H1 Tags:</strong></p>
                <ul>
                  {report.h1Tags.length > 0 ? report.h1Tags.map((tag, idx) => <li key={idx}>{tag}</li>) : <li>None found</li>}
                </ul>
                <p><strong>H2 Tags:</strong></p>
                <ul>
                  {report.h2Tags.length > 0 ? report.h2Tags.map((tag, idx) => <li key={idx}>{tag}</li>) : <li>None found</li>}
                </ul>
                <p><strong>Page Speed Score:</strong> {report.pageSpeedScore}</p>
              </div>

              {/* Recommendations Section */}
              <section style={{ marginTop: '2rem', textAlign: 'left' }}>
                <h2>Recommendations</h2>
                <ul>
                  <li><strong>Execute a Link Building Strategy</strong> - Links <em>High Priority</em></li>
                  <li><strong>Increase length of title tag</strong> - On-Page SEO <em>Medium Priority</em></li>
                  <li><strong>Lengthen meta description (to between 120 and 160 characters)</strong> - On-Page SEO <em>Medium Priority</em></li>
                  <li><strong>Add Canonical Tag</strong> - On-Page SEO <em>Medium Priority</em></li>
                  <li><strong>Add Alt attributes to all images</strong> - On-Page SEO <em>Low Priority</em></li>
                  <li><strong>Create and link your Facebook Page</strong> - Social <em>Low Priority</em></li>
                  <li><strong>Create and link your X profile</strong> - Social <em>Low Priority</em></li>
                  <li><strong>Use your main keywords across the important HTML tags</strong> - On-Page SEO <em>Low Priority</em></li>
                  <li><strong>Make use of HTTP/2+ protocol</strong> - Performance <em>Low Priority</em></li>
                  <li><strong>Optimize your page for Mobile PageSpeed Insights</strong> - Usability <em>Low Priority</em></li>
                  <li><strong>Add a DMARC mail record</strong> - Other <em>Low Priority</em></li>
                  <li><strong>Add an SPF record</strong> - Other <em>Low Priority</em></li>
                  <li><strong>Implement an analytics tracking tool</strong> - On-Page SEO <em>Low Priority</em></li>
                  <li><strong>Add Schema Markup</strong> - On-Page SEO <em>Low Priority</em></li>
                  <li><strong>Please add Facebook Open Graph Tags</strong> - Social <em>Low Priority</em></li>
                  <li><strong>Add X Cards</strong> - Social <em>Low Priority</em></li>
                  <li><strong>Create and link associated Instagram profile</strong> - Social <em>Low Priority</em></li>
                  <li><strong>Create and link an associated YouTube channel</strong> - Social <em>Low Priority</em></li>
                  <li><strong>Create and link an associated LinkedIn profile</strong> - Social <em>Low Priority</em></li>
                  <li><strong>Add business address and phone number</strong> - Other <em>Low Priority</em></li>
                  <li><strong>Add Local Business Schema</strong> - Other <em>Low Priority</em></li>
                  <li><strong>Setup & Install a Facebook Pixel</strong> - Social <em>Low Priority</em></li>
                </ul>
              </section>
            </>
          )}
        </section>
      </main>
    </>
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
  report: {
    marginTop: '20px',
    textAlign: 'left',
  },
};

export default SeoAudit;
