import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What is the Comma Separator Tool?",
    answer:
      "The Comma Separator Tool formats your keywords, tags, or any list into a clean, comma-separated string to improve SEO and content readability.",
  },
  {
    question: "How do I use the Comma Separator Tool?",
    answer:
      "Simply enter your list items, one per line, and click the convert button to get a comma-separated string.",
  },
  {
    question: "Why is comma separation important for SEO?",
    answer:
      "Comma-separated keywords and tags are easier for search engines to parse and help improve your content's SEO performance.",
  },
  {
    question: "Is this tool free to use?",
    answer:
      "Yes, the Comma Separator Tool is completely free and easy to use for everyone.",
  },
];

function CommaSeparatorTool() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [error, setError] = useState(null);

  const handleConvert = () => {
    setError(null);
    if (!inputText.trim()) {
      setError('Input text is required');
      return;
    }
    // Convert input text lines to comma separated string
    const lines = inputText.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    const result = lines.join(', ');
    setOutputText(result);
  };

  return (
    <>
      <Helmet>
        <title>Comma Separator Tool - SEO Keyword and Tag Formatter</title>
        <meta
          name="description"
          content="Use the Comma Separator Tool to format keywords, tags, and lists into clean comma-separated strings for SEO and content optimization."
        />
        <meta
          name="keywords"
          content="Comma Separator Tool, SEO keyword formatter, tag formatter, content optimization tool"
        />
        <link rel="canonical" href="https://yourdomain.com/comma-separator-tool" />
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
            Comma Separator Tool
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#333' }}>
            Format your keywords, tags, or any list into a clean, comma-separated string to improve SEO and content readability.
          </p>
        </section>

        {/* Tool Section */}
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
          <h2>Convert Your List to Comma Separated String</h2>
          <textarea
            placeholder="Enter text, one item per line"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
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
            aria-label="Input text, one item per line"
          />
          <button
            onClick={handleConvert}
            disabled={!inputText.trim()}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: '#007bff',
              color: 'white',
              cursor: !inputText.trim() ? 'not-allowed' : 'pointer',
            }}
            aria-disabled={!inputText.trim()}
          >
            Convert to Comma Separated
          </button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          {outputText && (
            <textarea
              readOnly
              value={outputText}
              style={{
                width: '100%',
                padding: '12px 10px',
                marginTop: '15px',
                borderRadius: '6px',
                border: '1px solid #ccc',
                fontSize: '16px',
                fontFamily: 'monospace',
              }}
              rows={4}
              aria-label="Output comma separated text"
            />
          )}
        </section>

        {/* Benefits Section */}
        <section>
          <h2>Why Use Our Comma Separator Tool?</h2>
          <h3>Improve SEO and Readability</h3>
          <p>
            Properly formatted comma-separated keywords and tags help search engines better understand your content.
          </p>
          <h3>Save Time</h3>
          <p>
            Quickly convert lists into SEO-friendly formats without manual editing.
          </p>
          <h3>Easy to Use</h3>
          <p>
            Our tool is user-friendly and free to use for everyone.
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

export default CommaSeparatorTool;
