import React, { useEffect, useState } from 'react';

function BulkAnchorTextGenerators() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // New states for anchor text generation
  const [keywordsInput, setKeywordsInput] = useState('');
  const [generatedAnchorTexts, setGeneratedAnchorTexts] = useState([]);
  const [genLoading, setGenLoading] = useState(false);
  const [genError, setGenError] = useState(null);

  // Fetch plans data from backend API
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch('/api/bulk-anchor-text-generators/plans');
        if (!response.ok) {
          throw new Error('Failed to fetch plans');
        }
        const data = await response.json();
        setPlans(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  // Updated benefits and FAQs data specifically for Bulk Anchor Text Generators tool
  const benefits = [
    "Generate large volumes of SEO-friendly anchor texts quickly and efficiently.",
    "Enhance your backlink strategy with diverse and optimized anchor texts.",
    "User-friendly interface designed for bulk processing and easy management.",
    "Supports integration with multiple SEO tools and platforms for seamless workflow."
  ];

  const faqs = [
    {
      question: "What is a Bulk Anchor Text Generator?",
      answer: "It is a specialized SEO tool that helps you create multiple anchor texts in bulk to improve your website's backlink profile and search engine rankings."
    },
    {
      question: "How can this tool improve my SEO?",
      answer: "By generating diverse and optimized anchor texts, it helps distribute link equity effectively, making your backlink profile look natural and boosting your site's authority."
    },
    {
      question: "Is it easy to use for beginners?",
      answer: "Yes, the tool features a simple and intuitive interface that allows users of all levels to generate bulk anchor texts without hassle."
    },
    {
      question: "Are there different plans available?",
      answer: "Yes, we offer multiple plans tailored to different needs, including a free trial to get started."
    }
  ];

  // Handler for generating anchor texts
  const handleGenerate = async () => {
    setGenLoading(true);
    setGenError(null);
    setGeneratedAnchorTexts([]);
    try {
      const keywordsArray = keywordsInput
        .split(/[\n,]+/)
        .map(k => k.trim())
        .filter(k => k.length > 0);
      if (keywordsArray.length === 0) {
        setGenError('Please enter at least one keyword.');
        setGenLoading(false);
        return;
      }
      const response = await fetch('/api/bulk-anchor-text-generators/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keywords: keywordsArray }),
      });
      if (!response.ok) {
        throw new Error('Failed to generate anchor texts');
      }
      const data = await response.json();
      setGeneratedAnchorTexts(data.result || []);
    } catch (err) {
      setGenError(err.message);
    } finally {
      setGenLoading(false);
    }
  };

  return (
    <>
      <head>
        <title>Bulk Anchor Text Generators - Efficient SEO Anchor Text Creation Tool</title>
        <meta name="description" content="Use our Bulk Anchor Text Generators tool to quickly create SEO-optimized anchor texts in bulk. Improve your backlink strategy with ease." />
        <meta name="keywords" content="Bulk Anchor Text Generators, SEO anchor text tool, backlink strategy, bulk SEO tools" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Bulk Anchor Text Generators",
            "description": "Efficient SEO anchor text creation tool with plan comparisons, benefits, FAQs, and easy-to-use interface.",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </head>
      <main style={styles.container}>
        <section style={styles.hero}>
          <h1>Bulk Anchor Text Generators</h1>
          <h2>Efficient SEO Anchor Text Creation Tool</h2>
          <h3>Quickly generate optimized anchor texts in bulk to boost your backlink profile and search rankings</h3>
        </section>

        <section style={styles.comparisonTableSection}>
          <h2>Comparison Table</h2>
          {loading && <p>Loading plans...</p>}
          {error && <p style={styles.error}>{error}</p>}
          {!loading && !error && (
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Price</th>
                  <th>Features</th>
                </tr>
              </thead>
              <tbody>
                {plans.map(plan => (
                  <tr key={plan.id}>
                    <td>{plan.name}</td>
                    <td>{plan.price}</td>
                    <td>
                      <ul>
                        {plan.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>

        <section style={styles.benefitsSection}>
          <h2>Benefits</h2>
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>

        <section style={styles.faqSection}>
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} style={styles.faqItem}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>

        {/* New section for anchor text generation */}
        <section style={styles.generatorSection}>
          <h2>Generate Anchor Texts</h2>
          <textarea
            style={styles.textarea}
            placeholder="Enter keywords separated by commas or new lines"
            value={keywordsInput}
            onChange={e => setKeywordsInput(e.target.value)}
            rows={6}
          />
          <br />
          <button onClick={handleGenerate} disabled={genLoading} style={styles.generateButton}>
            {genLoading ? 'Generating...' : 'Generate'}
          </button>
          {genError && <p style={styles.error}>{genError}</p>}
          {generatedAnchorTexts.length > 0 && (
            <div style={styles.results}>
              <h3>Generated Anchor Texts:</h3>
              <ul>
                {generatedAnchorTexts.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <section style={styles.ctaSection}>
          <h2>Get Started with Bulk Anchor Text Generators</h2>
          <p>Choose the best plan and enhance your SEO backlink strategy with our powerful bulk anchor text creation tool.</p>
          <a href="#contact" style={styles.ctaButton}>Contact Us</a>
        </section>
      </main>
    </>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  hero: {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#e0f7fa',
    borderRadius: '8px',
    marginBottom: '40px',
  },
  comparisonTableSection: {
    marginBottom: '40px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  error: {
    color: 'red',
  },
  benefitsSection: {
    marginBottom: '40px',
  },
  faqSection: {
    marginBottom: '40px',
  },
  faqItem: {
    marginBottom: '20px',
  },
  generatorSection: {
    marginBottom: '40px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  generateButton: {
    marginTop: '10px',
    padding: '12px 24px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  results: {
    marginTop: '20px',
  },
  ctaSection: {
    textAlign: 'center',
    padding: '30px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '8px',
  },
  ctaButton: {
    display: 'inline-block',
    marginTop: '15px',
    padding: '12px 24px',
    backgroundColor: '#004085',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
  }
};

export default BulkAnchorTextGenerators;
