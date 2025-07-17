import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What is a Canonical Tag Generator?",
    answer:
      "A Canonical Tag Generator helps you create canonical tags for your web pages to avoid duplicate content issues and improve SEO.",
  },
  {
    question: "How do I use the Canonical Tag Generator?",
    answer:
      "Enter the URL of your web page and click 'Generate Canonical Tag' to get the canonical link tag.",
  },
  {
    question: "Why are canonical tags important?",
    answer:
      "Canonical tags tell search engines which version of a page is the preferred one, helping to consolidate ranking signals and avoid duplicate content penalties.",
  },
  {
    question: "Is this tool free to use?",
    answer:
      "Yes, the Canonical Tag Generator is completely free and easy to use for everyone.",
  },
];

function CanonicalTagGenerator() {
  const [url, setUrl] = useState('');
  const [canonicalTag, setCanonicalTag] = useState(null);
  const [error, setError] = useState(null);

  const generateCanonicalTag = () => {
    setError(null);
    if (!url.trim()) {
      setError('URL is required');
      return;
    }
    const tag = `<link rel="canonical" href="${url.trim()}" />`;
    setCanonicalTag(tag);
  };

  return (
    <>
      <Helmet>
        <title>Canonical Tag Generator - Create SEO Friendly Canonical Tags</title>
        <meta
          name="description"
          content="Generate SEO friendly canonical tags for your web pages to avoid duplicate content and improve search engine rankings."
        />
        <meta
          name="keywords"
          content="Canonical tag generator, SEO canonical tags, duplicate content, SEO tools"
        />
        <link rel="canonical" href="https://yourdomain.com/canonical-tag-generator" />
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
            Canonical Tag Generator
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#333' }}>
            Create SEO friendly canonical tags to avoid duplicate content issues and improve your website's search engine rankings.
          </p>
        </section>

        {/* Generator Section */}
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
          <h2>Generate Your Canonical Tag</h2>
          <input
            type="text"
            placeholder="Enter URL"
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
            aria-label="URL"
          />
          <button
            onClick={generateCanonicalTag}
            disabled={!url.trim()}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: '#007bff',
              color: 'white',
              cursor: !url.trim() ? 'not-allowed' : 'pointer',
            }}
            aria-disabled={!url.trim()}
          >
            Generate Canonical Tag
          </button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          {canonicalTag && (
            <pre style={{ marginTop: '15px', textAlign: 'left', whiteSpace: 'pre-wrap', fontWeight: 'bold' }}>
              {canonicalTag}
            </pre>
          )}
        </section>

        {/* Benefits Section */}
        <section>
          <h2>Why Use Our Canonical Tag Generator?</h2>
          <h3>Avoid Duplicate Content</h3>
          <p>
            Proper canonical tags help search engines understand the preferred version of your pages.
          </p>
          <h3>Improve SEO</h3>
          <p>
            Consolidate ranking signals and improve your website's search engine performance.
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

export default CanonicalTagGenerator;
