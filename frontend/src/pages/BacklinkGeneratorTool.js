import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What is a Backlink Generator Tool?",
    answer:
      "A Backlink Generator Tool helps you create backlinks to your website, improving your SEO and search engine rankings.",
  },
  {
    question: "How do I use the Backlink Generator Tool?",
    answer:
      "Enter the URLs you want to generate backlinks for, one per line, and click 'Generate Backlinks' to get backlink suggestions.",
  },
  {
    question: "Why are backlinks important for SEO?",
    answer:
      "Backlinks from reputable sites increase your website's authority and improve its ranking in search engine results.",
  },
  {
    question: "Is this tool free to use?",
    answer:
      "Yes, the Backlink Generator Tool is completely free and easy to use for everyone.",
  },
];

function BacklinkGeneratorTool() {
  const [inputUrls, setInputUrls] = useState('');
  const [backlinks, setBacklinks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateBacklinks = async () => {
    setLoading(true);
    setError(null);
    setBacklinks(null);
    try {
      // Placeholder for API call to generate backlinks
      // Example:
      // const response = await fetch('http://localhost:4000/api/backlink-generator', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ urls: inputUrls.split('\n') }),
      // });
      // if (!response.ok) throw new Error('Failed to generate backlinks');
      // const data = await response.json();
      // setBacklinks(data.backlinks);
      setBacklinks('Backlinks generated successfully (placeholder).');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Backlink Generator Tool - Boost Your SEO with Quality Backlinks</title>
        <meta
          name="description"
          content="Use the Backlink Generator Tool to create quality backlinks for your website and improve your SEO rankings."
        />
        <meta
          name="keywords"
          content="Backlink generator, SEO backlinks, backlink tool, improve SEO, website backlinks"
        />
        <link rel="canonical" href="https://yourdomain.com/backlink-generator-tool" />
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
            Backlink Generator Tool
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#333' }}>
            Generate quality backlinks to boost your website's SEO and improve search engine rankings.
          </p>
        </section>

        {/* Backlink Generator Section */}
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
          <h2>Generate Backlinks</h2>
          <textarea
            placeholder="Enter URLs, one per line"
            value={inputUrls}
            onChange={e => setInputUrls(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 10px',
              margin: '15px 0',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '16px',
              fontFamily: 'monospace',
            }}
            rows={8}
            aria-label="Input URLs, one per line"
          />
          <button
            onClick={handleGenerateBacklinks}
            disabled={loading || !inputUrls.trim()}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: '#007bff',
              color: 'white',
              cursor: loading || !inputUrls.trim() ? 'not-allowed' : 'pointer',
            }}
            aria-disabled={loading || !inputUrls.trim()}
          >
            {loading ? 'Generating...' : 'Generate Backlinks'}
          </button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          {backlinks && <p style={{ marginTop: '15px', fontWeight: 'bold' }}>{backlinks}</p>}
        </section>

        {/* Benefits Section */}
        <section>
          <h2>Why Use Our Backlink Generator Tool?</h2>
          <h3>Improve SEO Rankings</h3>
          <p>
            Quality backlinks increase your website's authority and improve search engine rankings.
          </p>
          <h3>Save Time</h3>
          <p>
            Quickly generate backlinks without manual outreach.
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

export default BacklinkGeneratorTool;
