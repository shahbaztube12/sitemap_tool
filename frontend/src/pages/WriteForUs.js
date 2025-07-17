import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    question: "How can I contribute an article?",
    answer: "You can submit your article using the form below. Our team will review it and get back to you."
  },
  {
    question: "What topics are accepted?",
    answer: "We accept articles related to SEO, digital marketing, content strategy, and related fields."
  },
  {
    question: "How long does the review process take?",
    answer: "Our review process typically takes 3-5 business days."
  },
  {
    question: "Can I include links in my article?",
    answer: "Yes, but all links must be relevant and comply with our content guidelines."
  }
];

function WriteForUs() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });
  const [formStatus, setFormStatus] = useState({ submitting: false, success: null, error: null });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: null, error: null });
    try {
      const response = await fetch('/api/writeforus/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit article');
      }
      setFormStatus({ submitting: false, success: 'Article submitted successfully! We will review and get back to you.', error: null });
      setFormData({ title: '', content: '', author: '' });
    } catch (error) {
      setFormStatus({ submitting: false, success: null, error: error.message });
    }
  };

  return (
    <>
      <Helmet>
        <title>Write For Us - Tarkashot SEO Blog</title>
        <meta name="description" content="Submit your SEO and digital marketing articles to Tarkashot. Get published and share your expertise." />
        <meta name="keywords" content="Write for us, SEO articles, digital marketing blog, contribute content" />
        <link rel="canonical" href="https://yourdomain.com/write-for-us" />
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Helmet>

      <main style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#003366', marginBottom: '0.5rem' }}>Write For Us</h1>
          <p style={{ fontSize: '1.2rem', color: '#555' }}>
            Share your knowledge and expertise by contributing articles to our SEO and digital marketing blog.
          </p>
        </section>

        <section style={{ backgroundColor: '#f9faff', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#002244', marginBottom: '1rem' }}>Submit Your Article</h2>
          <form onSubmit={handleSubmit} aria-label="Write for us submission form">
            <label htmlFor="title" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Title</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '10px', marginBottom: '1rem', borderRadius: '6px', border: '1px solid #ccc' }} 
              aria-required="true"
            />

            <label htmlFor="author" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Author Name</label>
            <input 
              type="text" 
              id="author" 
              name="author" 
              value={formData.author} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '10px', marginBottom: '1rem', borderRadius: '6px', border: '1px solid #ccc' }} 
              aria-required="true"
            />

            <label htmlFor="content" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Content</label>
            <textarea 
              id="content" 
              name="content" 
              rows="10" 
              value={formData.content} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '10px', marginBottom: '1rem', borderRadius: '6px', border: '1px solid #ccc' }} 
              aria-required="true"
            />

            <button 
              type="submit" 
              disabled={formStatus.submitting} 
              style={{ 
                backgroundColor: '#007bff', 
                color: 'white', 
                padding: '12px 24px', 
                border: 'none', 
                borderRadius: '6px', 
                cursor: formStatus.submitting ? 'not-allowed' : 'pointer',
                fontWeight: '600',
                fontSize: '1rem'
              }}
              aria-busy={formStatus.submitting}
            >
              {formStatus.submitting ? 'Submitting...' : 'Submit Article'}
            </button>
          </form>
          {formStatus.success && <p style={{ color: 'green', marginTop: '1rem' }} role="alert">{formStatus.success}</p>}
          {formStatus.error && <p style={{ color: 'red', marginTop: '1rem' }} role="alert">{formStatus.error}</p>}
        </section>

        <section>
          <h2 style={{ fontSize: '1.8rem', color: '#002244', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <details key={index} style={{ marginBottom: '1rem', backgroundColor: '#f7fbff', padding: '1rem', borderRadius: '6px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
              <summary style={{ fontWeight: '600', cursor: 'pointer', fontSize: '1.1rem' }}>{faq.question}</summary>
              <p style={{ marginTop: '0.5rem', fontSize: '1rem', color: '#444' }}>{faq.answer}</p>
            </details>
          ))}
        </section>
      </main>
    </>
  );
}

export default WriteForUs;
