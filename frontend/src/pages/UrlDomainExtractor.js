import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What is a URL Domain Extractor?",
    answer:
      "A URL Domain Extractor extracts the domain names from a list of URLs, helping you analyze and organize your web data.",
  },
  {
    question: "How do I use the URL Domain Extractor?",
    answer:
      "Enter multiple URLs, one per line, and click 'Extract Domains' to get the domain names extracted from each URL.",
  },
  {
    question: "Why is domain extraction useful?",
    answer:
      "Extracting domains helps in SEO analysis, backlink audits, and organizing web resources efficiently.",
  },
  {
    question: "Is this tool free to use?",
    answer:
      "Yes, the URL Domain Extractor is completely free and easy to use for everyone.",
  },
];

function UrlDomainExtractor() {
  const [inputUrls, setInputUrls] = useState('');
  const [domains, setDomains] = useState(null);
  const [error, setError] = useState(null);

  const extractDomains = () => {
    setError(null);
    if (!inputUrls.trim()) {
      setError('Input URLs are required');
      return;
    }
    try {
      const urls = inputUrls.split('\n').map(url => url.trim()).filter(url => url.length > 0);
      const extractedDomains = urls.map(url => {
        try {
          const urlObj = new URL(url);
          return urlObj.hostname;
        } catch {
          return 'Invalid URL';
        }
      });
      setDomains(extractedDomains.join('\n'));
    } catch (err) {
      setError('Error extracting domains');
    }
  };

  return (
    <>
      <Helmet>
        <title>URL Domain Extractor - Extract Domains from URLs for SEO and Analysis</title>
        <meta
          name="description"
          content="Use the URL Domain Extractor to extract domain names from multiple URLs for SEO analysis, backlink audits, and web data organization."
        />
        <meta
          name="keywords"
          content="URL domain extractor, extract domains from URLs, SEO tools, backlink analysis"
        />
        <link rel="canonical" href="https://yourdomain.com/url-domain-extractor" />
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
            URL Domain Extractor
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#333' }}>
            Extract domain names from multiple URLs quickly and easily for SEO and web analysis.
          </p>
        </section>

        {/* Extractor Section */}
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
          <h2>Extract Domains from URLs</h2>
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
            onClick={extractDomains}
            disabled={!inputUrls.trim()}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: '#007bff',
              color: 'white',
              cursor: !inputUrls.trim() ? 'not-allowed' : 'pointer',
            }}
            aria-disabled={!inputUrls.trim()}
          >
            Extract Domains
          </button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          {domains && (
            <textarea
              readOnly
              value={domains}
              style={{
                width: '100%',
                padding: '12px 10px',
                marginTop: '15px',
                borderRadius: '6px',
                border: '1px solid #ccc',
                fontSize: '16px',
                fontFamily: 'monospace',
              }}
              rows={8}
              aria-label="Extracted domain names"
            />
          )}
        </section>

        {/* Benefits Section */}
        <section>
          <h2>Why Use Our URL Domain Extractor?</h2>
          <h3>SEO and Backlink Analysis</h3>
          <p>
            Quickly extract domains to analyze backlinks and improve your SEO strategy.
          </p>
          <h3>Organize Web Data</h3>
          <p>
            Easily organize and manage your web resources by extracting domain names.
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

export default UrlDomainExtractor;
