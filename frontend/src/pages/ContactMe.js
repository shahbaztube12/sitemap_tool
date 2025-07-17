import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    question: "How can I contact your SEO experts?",
    answer: "You can reach us via the contact form on this page, email at hello@tarkashot.com, or call us at +91 88009 90012."
  },
  {
    question: "What are your office hours?",
    answer: "Our office hours are Monday to Friday, 9 AM to 6 PM IST."
  },
  {
    question: "Do you offer free SEO consultations?",
    answer: "Yes, we offer free SEO consultations to understand your business needs and recommend tailored strategies."
  },
  {
    question: "Where is your office located?",
    answer: "Our office is located at A-45, Sector 63, Noida, Uttar Pradesh 201301."
  }
];

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ submitting: false, success: null, error: null });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: null, error: null });
    try {
      // Simulate form submission - replace with actual API call if available
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus({ submitting: false, success: "Thank you for contacting us! We will get back to you soon.", error: null });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus({ submitting: false, success: null, error: "Failed to send message. Please try again later." });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Tarkashot SEO Services</title>
        <meta name="description" content="Contact Tarkashot SEO experts for free consultations and tailored SEO strategies to boost your business." />
        <meta name="keywords" content="Contact SEO experts, SEO consultation, Tarkashot contact, SEO services contact" />
        <link rel="canonical" href="https://yourdomain.com/contact" />
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
        {/* Hero Section */}
        <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#003366', marginBottom: '0.5rem' }}>Contact Tarkashot SEO Experts</h1>
          <p style={{ fontSize: '1.2rem', color: '#555' }}>
            Reach out to us for a free SEO consultation and tailored strategies to grow your business online.
          </p>
          <img 
            src="/contact-hero.jpg" 
            alt="Contact Tarkashot SEO Experts" 
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', marginTop: '1rem' }} 
            loading="lazy"
          />
        </section>

        {/* Contact Form Section */}
        <section style={{ backgroundColor: '#f9faff', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#002244', marginBottom: '1rem' }}>Get in Touch</h2>
          <form onSubmit={handleSubmit} aria-label="Contact form">
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '10px', marginBottom: '1rem', borderRadius: '6px', border: '1px solid #ccc' }} 
              aria-required="true"
            />

            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '10px', marginBottom: '1rem', borderRadius: '6px', border: '1px solid #ccc' }} 
              aria-required="true"
            />

            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message} 
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
              {formStatus.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {formStatus.success && <p style={{ color: 'green', marginTop: '1rem' }} role="alert">{formStatus.success}</p>}
          {formStatus.error && <p style={{ color: 'red', marginTop: '1rem' }} role="alert">{formStatus.error}</p>}
        </section>

        {/* FAQs Section */}
        <section>
          <h2 style={{ fontSize: '1.8rem', color: '#002244', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <details key={index} style={{ marginBottom: '1rem', backgroundColor: '#f7fbff', padding: '1rem', borderRadius: '6px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
              <summary style={{ fontWeight: '600', cursor: 'pointer', fontSize: '1.1rem' }}>{faq.question}</summary>
              <p style={{ marginTop: '0.5rem', fontSize: '1rem', color: '#444' }}>{faq.answer}</p>
            </details>
          ))}
        </section>

        {/* Internal Links Section */}
        <section style={{ marginTop: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#003366', marginBottom: '1rem' }}>Explore More</h3>
          <nav aria-label="Internal links">
            <a href="/seo-audit" style={{ margin: '0 1rem', color: '#007bff', textDecoration: 'underline' }}>Free SEO Audit</a>
            <a href="/seo-services-delhi" style={{ margin: '0 1rem', color: '#007bff', textDecoration: 'underline' }}>SEO Services Delhi</a>
            <a href="/seo-guides" style={{ margin: '0 1rem', color: '#007bff', textDecoration: 'underline' }}>SEO Guides</a>
            <a href="/contact" style={{ margin: '0 1rem', color: '#007bff', textDecoration: 'underline' }}>Contact Us</a>
          </nav>
        </section>
      </main>
    </>
  );
}

export default ContactMe;
