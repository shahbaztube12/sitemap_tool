import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What is the Mobile-Friendly Tester Tool?",
    answer:
      "The Mobile-Friendly Tester Tool helps you check if your website is optimized for mobile devices, ensuring a better user experience and SEO performance.",
  },
  {
    question: "How do I use the Mobile-Friendly Tester Tool?",
    answer:
      "Enter your website URL and click 'Test Mobile Friendliness' to get a report on your site's mobile compatibility.",
  },
  {
    question: "Why is mobile-friendliness important?",
    answer:
      "Mobile-friendly websites rank better in search engines and provide a better experience for users on smartphones and tablets.",
  },
  {
    question: "Is this tool free to use?",
    answer:
      "Yes, the Mobile-Friendly Tester Tool is completely free and easy to use for everyone.",
  },
];

function MobileFriendlyTesterTool() {
  const [url, setUrl] = useState('');
  const [testResult, setTestResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTest = async () => {
    setLoading(true);
    setError(null);
    setTestResult(null);
    try {
      // Placeholder for API call to test mobile friendliness
      // Example:
      // const response = await fetch('http://localhost:4000/api/mobile-friendly-tester', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ url }),
      // });
      // if (!response.ok) throw new Error('Failed to test mobile friendliness');
      // const data = await response.json();
      // setTestResult(data.result);
      setTestResult('Mobile friendliness test passed (placeholder).');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Mobile-Friendly Tester Tool - Check Your Website's Mobile Compatibility</title>
        <meta
          name="description"
          content="Use the Mobile-Friendly Tester Tool to check if your website is optimized for mobile devices and improve your SEO."
        />
        <meta
          name="keywords"
          content="Mobile friendly tester, website mobile compatibility, SEO mobile test"
        />
        <link rel="canonical" href="https://yourdomain.com/mobile-friendly-tester-tool" />
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
            Mobile-Friendly Tester Tool
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#333' }}>
            Check if your website is optimized for mobile devices to improve user experience and SEO.
          </p>
        </section>

        {/* Tester Section */}
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
          <h2>Test Your Website's Mobile Friendliness</h2>
          <input
            type="text"
            placeholder="Enter website URL"
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
            aria-label="Website URL"
          />
          <button
            onClick={handleTest}
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
            {loading ? 'Testing...' : 'Test Mobile Friendliness'}
          </button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          {testResult && <p style={{ marginTop: '15px', fontWeight: 'bold' }}>{testResult}</p>}
        </section>

        {/* Benefits Section */}
        <section>
          <h2>Why Use Our Mobile-Friendly Tester Tool?</h2>
          <h3>Improve User Experience</h3>
          <p>
            Ensure your website provides a seamless experience on all mobile devices.
          </p>
          <h3>Boost SEO Rankings</h3>
          <p>
            Mobile-friendly websites rank higher in search engine results.
          </p>
          <h3>Free and Easy to Use</h3>
          <p>
            Our tool is free and designed for ease of use by everyone.
          </p>
        </section>

        {/* FAQ Section */}
        <section style={{ marginTop: '3rem' }}>
          <h2>Frequently Asked Questions</h2>
          <div>
            {faqs.map((faq, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links Section */}
        <section style={{ marginTop: '3rem' }}>
          <h2>Explore Related Tools and Guides</h2>
          <ul>
            <li>
              <Link to="/youtube-tag-generator">YouTube Tag Generator</Link>
            </li>
            <li>
              <Link to="/whatsapp-chat-link">WhatsApp Chat Link</Link>
            </li>
            <li>
              <Link to="/seo-guides">SEO Guides</Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default MobileFriendlyTesterTool;
