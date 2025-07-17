import React, { useState, useEffect } from 'react';

function YouTubeTranscriptTool() {
  const [videoUrl, setVideoUrl] = useState('');
  const [transcript, setTranscript] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Sample static plans data for comparison table
  const plans = [
    { id: 1, name: 'Basic', price: '$0', features: ['Limited transcripts', 'Ads supported'] },
    { id: 2, name: 'Pro', price: '$9.99/mo', features: ['Unlimited transcripts', 'No ads', 'Priority support'] },
    { id: 3, name: 'Enterprise', price: 'Contact us', features: ['Custom solutions', 'Dedicated support'] },
  ];

  const benefits = [
    'Accurate and fast transcript generation using advanced speech recognition.',
    'Supports multiple languages and video formats.',
    'User-friendly and intuitive interface for easy transcript retrieval.',
    'Download transcripts in TXT, PDF, and SRT formats for convenience.',
  ];

  const faqs = [
    { question: 'How accurate are the transcripts?', answer: 'Our tool leverages state-of-the-art speech recognition technology to deliver highly accurate transcripts.' },
    { question: 'Can I download the transcript?', answer: 'Yes, transcripts are available for download in multiple formats including TXT, PDF, and SRT.' },
    { question: 'Is there a free plan?', answer: 'Yes, the Basic plan offers limited transcripts for free with ads. Upgrade for more features.' },
  ];

  const handleFetchTranscript = async () => {
    setLoading(true);
    setError(null);
    setTranscript(null);
    try {
      const response = await fetch('/api/youtube-transcript/get', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoUrl }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch transcript');
      }
      const data = await response.json();
      setTranscript(data.transcript);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1>YouTube Transcript Tool</h1>
        <p>Generate accurate transcripts for any YouTube video quickly and easily.</p>
        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Enter YouTube video URL"
            value={videoUrl}
            onChange={e => setVideoUrl(e.target.value)}
            aria-label="YouTube video URL"
            style={styles.input}
          />
          <button onClick={handleFetchTranscript} disabled={loading || !videoUrl.trim()} style={styles.button}>
            {loading ? 'Fetching...' : 'Fetch Transcript'}
          </button>
        </div>
        {error && <p style={styles.error} role="alert">{error}</p>}
        {loading && <p style={styles.loading}>Loading transcript...</p>}
        {transcript && <pre style={styles.transcript} aria-live="polite">{transcript}</pre>}
      </section>

      {/* Benefits Section */}
      <section style={styles.section}>
        <h2>Benefits of Using Our Tool</h2>
        <ul>
          {benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* FAQs Section */}
      <section style={styles.section}>
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, idx) => (
          <details key={idx}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>

      {/* Call to Action Section */}
      <section style={styles.cta}>
        <h2>Get Started Now</h2>
        <p>Try our YouTube Transcript Tool today and simplify your video content management.</p>
        <a href="/contact" style={styles.ctaButton} aria-label="Contact us to get started">Contact Us</a>
      </section>
    </main>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  inputGroup: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  input: {
    flex: '1 1 300px',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    minWidth: '140px',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  transcript: {
    marginTop: '20px',
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
    backgroundColor: '#f0f0f0',
    padding: '15px',
    borderRadius: '6px',
    maxHeight: '400px',
    overflowY: 'auto',
  },
  section: {
    marginBottom: '40px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '15px',
  },
  cta: {
    textAlign: 'center',
    padding: '30px',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '10px',
  },
  ctaButton: {
    display: 'inline-block',
    marginTop: '15px',
    padding: '12px 30px',
    backgroundColor: 'white',
    color: '#007bff',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default YouTubeTranscriptTool;
