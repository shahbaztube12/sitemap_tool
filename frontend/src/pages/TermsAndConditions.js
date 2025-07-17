import React from 'react';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    question: "What are the terms and conditions for using this website?",
    answer: "By using this website, you agree to comply with all applicable laws and regulations and accept the terms outlined here."
  },
  {
    question: "Can the terms and conditions change?",
    answer: "Yes, we reserve the right to update or modify these terms at any time without prior notice."
  },
  {
    question: "What is the user's responsibility?",
    answer: "Users are responsible for maintaining the confidentiality of their account information and for all activities under their account."
  },
  {
    question: "Are there any restrictions on content usage?",
    answer: "Content on this website is for personal and non-commercial use only unless otherwise stated."
  }
];

function TermsAndConditions() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - Tarkashot SEO Services</title>
        <meta name="description" content="Read the terms and conditions for using Tarkashot SEO Services website, including user responsibilities and content usage." />
        <meta name="keywords" content="Terms and Conditions, Website Use, User Responsibilities, Tarkashot SEO" />
        <link rel="canonical" href="https://yourdomain.com/terms-and-conditions" />
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
          <h1 style={{ fontSize: '2.5rem', color: '#003366', marginBottom: '0.5rem' }}>Terms and Conditions</h1>
          <p style={{ fontSize: '1.2rem', color: '#555' }}>
            Please read these terms and conditions carefully before using our website.
          </p>
        </section>

        <section style={{ backgroundColor: '#f9faff', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#002244', marginBottom: '1rem' }}>User Agreement</h2>
          <p style={{ fontSize: '1rem', color: '#444', lineHeight: '1.6' }}>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>
          <p style={{ fontSize: '1rem', color: '#444', lineHeight: '1.6' }}>
            We reserve the right to update these terms at any time without prior notice. It is your responsibility to review these terms periodically.
          </p>
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

export default TermsAndConditions;
