import React from 'react';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    question: "What is the purpose of this disclaimer?",
    answer: "This disclaimer outlines the limitations of liability and the terms of use for the information provided on this website."
  },
  {
    question: "Is the information on this website guaranteed to be accurate?",
    answer: "While we strive to provide accurate and up-to-date information, we make no warranties or guarantees regarding the completeness or accuracy of the content."
  },
  {
    question: "Can I rely on the information for legal or professional advice?",
    answer: "No, the information provided is for general informational purposes only and should not be considered legal, financial, or professional advice."
  },
  {
    question: "Are there any liabilities for damages from using this website?",
    answer: "We disclaim any liability for damages arising from the use or inability to use the information on this website."
  }
];

function Disclaimer() {
  return (
    <>
      <Helmet>
        <title>Disclaimer - Tarkashot SEO Services</title>
        <meta name="description" content="Read the disclaimer for Tarkashot SEO Services website outlining terms of use and limitations of liability." />
        <meta name="keywords" content="Disclaimer, Terms of Use, Liability, Tarkashot SEO" />
        <link rel="canonical" href="https://yourdomain.com/disclaimer" />
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
          <h1 style={{ fontSize: '2.5rem', color: '#003366', marginBottom: '0.5rem' }}>Disclaimer</h1>
          <p style={{ fontSize: '1.2rem', color: '#555' }}>
            Please read this disclaimer carefully before using our website.
          </p>
        </section>

        <section style={{ backgroundColor: '#f9faff', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#002244', marginBottom: '1rem' }}>Terms of Use</h2>
          <p style={{ fontSize: '1rem', color: '#444', lineHeight: '1.6' }}>
            The information provided on this website is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information contained on the website for any purpose.
          </p>
          <p style={{ fontSize: '1rem', color: '#444', lineHeight: '1.6' }}>
            Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
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

export default Disclaimer;
