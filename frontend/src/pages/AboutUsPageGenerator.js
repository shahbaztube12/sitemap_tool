import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What is the About Us Page Generator?",
    answer:
      "The About Us Page Generator helps you create professional and SEO optimized About Us page content for your website.",
  },
  {
    question: "How do I use the About Us Page Generator?",
    answer:
      "Enter your company name and a brief description, then click 'Generate About Us Content' to get customized content.",
  },
  {
    question: "Why is an About Us page important?",
    answer:
      "An About Us page builds trust with your visitors and improves your website's SEO by providing relevant company information.",
  },
  {
    question: "Is this tool free to use?",
    answer:
      "Yes, the About Us Page Generator is completely free and easy to use for everyone.",
  },
];

function AboutUsPageGenerator() {
  const [companyName, setCompanyName] = useState('');
  const [description, setDescription] = useState('');
  const [generatedContent, setGeneratedContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setGeneratedContent(null);
    try {
      // Placeholder for API call to generate About Us page content
      // Example:
      // const response = await fetch('http://localhost:4000/api/about-us-generator', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ companyName, description }),
      // });
      // if (!response.ok) throw new Error('Failed to generate content');
      // const data = await response.json();
      // setGeneratedContent(data.content);
      setGeneratedContent('About Us page content generated successfully (placeholder).');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>About Us Page Generator - Create SEO Optimized About Us Content</title>
        <meta
          name="description"
          content="Generate professional and SEO optimized About Us page content for your website with our easy-to-use About Us Page Generator."
        />
        <meta
          name="keywords"
          content="About Us page generator, SEO About Us content, company description generator"
        />
        <link rel="canonical" href="https://yourdomain.com/about-us-page-generator" />
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
            About Us Page Generator
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#333' }}>
            Create professional and SEO optimized About Us page content for your website quickly and easily.
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
          <h2>Generate Your About Us Page Content</h2>
          <input
            type="text"
            placeholder="Enter company name"
            value={companyName}
            onChange={e => setCompanyName(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 10px',
              margin: '15px 0',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
            aria-label="Company name"
          />
          <textarea
            placeholder="Enter company description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 10px',
              marginBottom: '15px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '16px',
              fontFamily: 'Arial, sans-serif',
            }}
            rows={6}
            aria-label="Company description"
          />
          <button
            onClick={handleGenerate}
            disabled={loading || !companyName.trim()}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: '#007bff',
              color: 'white',
              cursor: loading || !companyName.trim() ? 'not-allowed' : 'pointer',
            }}
            aria-disabled={loading || !companyName.trim()}
          >
            {loading ? 'Generating...' : 'Generate About Us Content'}
          </button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          {generatedContent && <pre style={{ marginTop: '15px', textAlign: 'left', whiteSpace: 'pre-wrap', fontWeight: 'bold' }}>{generatedContent}</pre>}
        </section>

        {/* Benefits Section */}
        <section>
          <h2>Why Use Our About Us Page Generator?</h2>
          <h3>Professional Content</h3>
          <p>
            Generate professional and engaging About Us page content that builds trust with your visitors.
          </p>
          <h3>SEO Optimized</h3>
          <p>
            Our content is optimized for search engines to improve your website's visibility.
          </p>
          <h3>Easy and Free</h3>
          <p>
            The tool is easy to use and completely free for everyone.
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

export default AboutUsPageGenerator;
