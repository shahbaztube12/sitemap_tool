import React, { useState, useEffect } from 'react';

function BulkUrlRedirectionTool() {
  const [inputUrls, setInputUrls] = useState('');
  const [redirectResults, setRedirectResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [plans, setPlans] = useState([]);
  const [faqs] = useState([
    {
      question: 'What is a Bulk URL Redirection Tool?',
      answer: 'It is a tool that allows you to redirect multiple URLs at once, saving time and effort.',
    },
    {
      question: 'How does the Bulk URL Redirection Tool improve SEO?',
      answer: 'By managing redirects efficiently, it helps maintain link equity and improves user experience.',
    },
    {
      question: 'Can I customize the redirection rules?',
      answer: 'Yes, depending on the plan you choose, you can customize redirection rules to fit your needs.',
    },
  ]);

  useEffect(() => {
    fetch('/api/bulk-url-redirection/plans')
      .then(res => res.json())
      .then(data => setPlans(data))
      .catch(() => setPlans([]));
  }, []);

  const handleRedirect = async () => {
    setLoading(true);
    setError(null);
    setRedirectResults(null);
    try {
      const response = await fetch('/api/bulk-url-redirection/redirect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ urls: inputUrls.split('\n').map(url => url.trim()).filter(url => url) }),
      });
      if (!response.ok) throw new Error('Failed to process URLs');
      const data = await response.json();
      setRedirectResults(data.result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <head>
        <title>Best SEO Bulk URL Redirection Tool | Fast & Reliable</title>
        <meta name="description" content="Use our Bulk URL Redirection Tool to efficiently manage your URL redirects and improve SEO. Fast, reliable, and easy to use." />
        <meta name="keywords" content="Bulk URL Redirection Tool, SEO, URL redirects, SEO tool" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}} />
      </head>
      <div style={styles.pageContainer}>
        <section style={styles.heroSection}>
          <h1>Best SEO Bulk URL Redirection Tool</h1>
          <h2>Manage your URL redirects efficiently and boost your SEO</h2>
          <p>Our tool helps you redirect multiple URLs quickly, preserving your SEO rankings and improving user experience.</p>
        </section>

        <section style={styles.comparisonSection}>
          <h2>Compare Our Plans</h2>
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
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section style={styles.benefitsSection}>
          <h2>Benefits of Using Our Bulk URL Redirection Tool</h2>
          <ul>
            <li>Save time by redirecting multiple URLs at once</li>
            <li>Improve SEO by preserving link equity</li>
            <li>Enhance user experience with fast redirects</li>
            <li>Customizable plans to fit your needs</li>
          </ul>
        </section>

        <section style={styles.faqSection}>
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, idx) => (
            <div key={idx} style={styles.faqItem}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>

        <section style={styles.ctaSection}>
          <h2>Get Started with Our Bulk URL Redirection Tool Today!</h2>
          <button style={styles.ctaButton} onClick={() => window.location.href = '/contact'}>
            Contact Us
          </button>
        </section>

        <section style={styles.redirectSection}>
          <h2>Bulk URL Redirection</h2>
          <textarea
            placeholder="Enter URLs, one per line"
            value={inputUrls}
            onChange={e => setInputUrls(e.target.value)}
            style={styles.textarea}
            rows={8}
            aria-label="Enter URLs for redirection"
          />
          <button onClick={handleRedirect} disabled={loading || !inputUrls.trim()} style={styles.button}>
            {loading ? 'Processing...' : 'Process URLs'}
          </button>
          {error && <p style={styles.error}>{error}</p>}
          {redirectResults && (
            <div style={styles.resultContainer}>
              <h3>Redirection Results:</h3>
              <ul>
                {redirectResults.map((res, idx) => (
                  <li key={idx}>
                    <strong>{res.originalUrl}</strong> redirected to <em>{res.redirectedUrl}</em>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

const styles = {
  pageContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.6,
  },
  heroSection: {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#e9f0f7',
    borderRadius: '8px',
  },
  comparisonSection: {
    marginTop: '40px',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  benefitsSection: {
    marginTop: '40px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
  },
  faqSection: {
    marginTop: '40px',
  },
  faqItem: {
    marginBottom: '20px',
  },
  ctaSection: {
    marginTop: '40px',
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    fontSize: '18px',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  redirectSection: {
    marginTop: '40px',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  textarea: {
    width: '100%',
    padding: '12px 10px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
    fontFamily: 'monospace',
  },
  button: {
    margin: '5px 0',
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
  resultContainer: {
    marginTop: '15px',
    backgroundColor: '#f1f1f1',
    padding: '15px',
    borderRadius: '6px',
  }
};

export default BulkUrlRedirectionTool;
