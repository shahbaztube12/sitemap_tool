import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What is a WhatsApp Chat Link Generator?",
    answer:
      "A WhatsApp Chat Link Generator creates a direct link that allows users to start a chat with a specific phone number on WhatsApp, optionally with a pre-filled message.",
  },
  {
    question: "How do I use the WhatsApp Chat Link Generator?",
    answer:
      "Enter the phone number with country code and an optional message, then click 'Generate Link' to get your custom WhatsApp chat link.",
  },
  {
    question: "Is this tool free to use?",
    answer:
      "Yes, this WhatsApp Chat Link Generator is completely free and easy to use for everyone.",
  },
  {
    question: "Can I share the generated link on my website or social media?",
    answer:
      "Absolutely! You can share the generated WhatsApp chat link anywhere to make it easy for people to contact you directly.",
  },
];

function WhatsAppChatLink() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [chatLink, setChatLink] = useState(null);
  const [error, setError] = useState(null);

  const generateChatLink = () => {
    setError(null);
    if (!phoneNumber.trim()) {
      setError('Phone number is required');
      return;
    }
    const encodedMessage = encodeURIComponent(message);
    const link = "https://wa.me/" + phoneNumber + (message ? "?text=" + encodedMessage : "");
    setChatLink(link);
  };

  return (
    <>
      <Helmet>
        <title>WhatsApp Chat Link Generator - Create Direct WhatsApp Chat Links</title>
        <meta
          name="description"
          content="Generate direct WhatsApp chat links with optional pre-filled messages. Make it easy for customers to contact you via WhatsApp."
        />
        <meta
          name="keywords"
          content="WhatsApp chat link generator, create WhatsApp link, WhatsApp direct message link, WhatsApp contact link"
        />
        <link rel="canonical" href="https://yourdomain.com/whatsapp-chat-link" />
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
            WhatsApp Chat Link Generator
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#333' }}>
            Create direct WhatsApp chat links with optional messages to connect easily with your customers.
          </p>
        </section>

        {/* Chat Link Generator Section */}
        <section
          style={{
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '2rem',
          }}
        >
          <h2>Generate Your WhatsApp Chat Link</h2>
          <input
            type="text"
            placeholder="Enter phone number (with country code)"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 10px',
              margin: '15px 0',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
            aria-label="Phone number with country code"
          />
          <textarea
            placeholder="Enter message (optional)"
            value={message}
            onChange={e => setMessage(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 10px',
              marginBottom: '15px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '16px',
              fontFamily: 'Arial, sans-serif',
            }}
            rows={4}
            aria-label="Optional message"
          />
          <button
            onClick={generateChatLink}
            disabled={!phoneNumber.trim()}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: '#007bff',
              color: 'white',
              cursor: !phoneNumber.trim() ? 'not-allowed' : 'pointer',
            }}
            aria-disabled={!phoneNumber.trim()}
          >
            Generate Link
          </button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          {chatLink && (
            <p style={{ marginTop: '15px', fontWeight: 'bold' }}>
              Chat Link:{' '}
              <a href={chatLink} target="_blank" rel="noopener noreferrer">
                {chatLink}
              </a>
            </p>
          )}
        </section>

        {/* Benefits Section */}
        <section>
          <h2>Why Use Our WhatsApp Chat Link Generator?</h2>
          <h3>Easy Customer Communication</h3>
          <p>
            Create direct links that make it simple for customers to start a chat with you on WhatsApp.
          </p>
          <h3>Customizable Messages</h3>
          <p>
            Add pre-filled messages to greet your customers or provide important information.
          </p>
          <h3>Free and User-Friendly</h3>
          <p>
            Our tool is free to use and designed for ease of use by everyone.
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
              <Link to="/seo-guides">SEO Guides</Link>
            </li>
            <li>
              <Link to="/seo-optimized-page">SEO Optimized Page</Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default WhatsAppChatLink;
