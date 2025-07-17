import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is digital marketing?",
    answer:
      "Digital marketing involves promoting products or services through digital channels such as search engines, social media, email, and websites.",
  },
  {
    question: "How does SEO fit into digital marketing?",
    answer:
      "SEO is a key component of digital marketing that focuses on improving website visibility and organic traffic through search engine optimization techniques.",
  },
  {
    question: "Why is responsive design important for digital marketing?",
    answer:
      "Responsive design ensures your website looks and functions well on all devices, improving user experience and search engine rankings.",
  },
];

function DigitalMarketing() {
  return (
    <>
      <Helmet>
        <title>Digital Marketing | Expert SEO & Online Marketing Strategies</title>
        <meta
          name="description"
          content="Learn about digital marketing strategies including SEO, content marketing, social media, and more to grow your online presence."
        />
        <meta
          name="keywords"
          content="digital marketing, SEO, online marketing, content marketing, social media marketing, responsive design"
        />
        <link rel="canonical" href="/digital-marketing" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Digital Marketing",
            "description":
              "A comprehensive guide to digital marketing strategies including SEO, content marketing, and social media.",
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

      <main
        style={{
          width: "100%",
          margin: 0,
          padding: 0,
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          lineHeight: 1.6,
          color: "#222",
        }}
      >
        {/* Hero Section */}
        <section
          style={{
            width: "100%",
            backgroundImage: "url('/public/banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            padding: "6rem 1rem 4rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          aria-label="Digital Marketing Hero Section"
        >
          <h1
            style={{
              fontSize: "3rem",
              maxWidth: "900px",
              margin: "0 auto 1rem",
              fontWeight: "700",
            }}
          >
            Expert Digital Marketing Strategies for Your Business Growth
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Discover proven techniques including SEO, content marketing, social media, and more to boost your online presence and drive conversions.
          </p>
          <img
            src="/public/digital-marketing-illustration.png"
            alt="Illustration representing digital marketing concepts"
            style={{
              marginTop: "2rem",
              maxWidth: "400px",
              width: "100%",
              height: "auto",
              borderRadius: "8px",
            }}
            loading="lazy"
          />
        </section>

        {/* Content Sections */}
        <section
          style={{ maxWidth: "1200px", margin: "3rem auto", padding: "0 1rem" }}
        >
          <h2>What is Digital Marketing?</h2>
          <p>
            Digital marketing encompasses all marketing efforts that use the internet or electronic devices. It includes SEO, content marketing, social media marketing, email marketing, and more.
          </p>

          <h3>Search Engine Optimization (SEO)</h3>
          <p>
            SEO improves your website’s visibility in search engine results, driving organic traffic and increasing your chances of converting visitors into customers.
          </p>

          <h3>Content Marketing</h3>
          <p>
            Creating valuable, relevant content helps attract and engage your target audience, building trust and authority in your niche.
          </p>

          <h3>Social Media Marketing</h3>
          <p>
            Leveraging social media platforms allows you to connect with your audience, promote your brand, and drive traffic to your website.
          </p>

          <h2>Why Responsive Design Matters</h2>
          <p>
            With more users accessing websites on mobile devices, responsive design ensures your site looks great and functions well on all screen sizes, improving user experience and SEO.
          </p>

          <h2>Meta Tags, Schema Markup, and Accessibility</h2>
          <p>
            Proper meta tags improve search engine understanding and click-through rates. Schema markup helps search engines display rich results. Alt tags on images improve accessibility and SEO.
          </p>

          <h2>Internal Linking Best Practices</h2>
          <p>
            Use descriptive anchor text and link to relevant pages within your site to help users navigate and distribute page authority effectively.
          </p>
        </section>

        {/* FAQs Section */}
        <section
          style={{
            backgroundColor: "#f9f9f9",
            padding: "2rem 1rem",
            maxWidth: "1200px",
            margin: "0 auto 3rem",
            borderRadius: "8px",
          }}
          aria-label="Frequently Asked Questions"
        >
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} style={{ marginBottom: "1.5rem" }}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>

        {/* Internal Links Section */}
        <section
          style={{ maxWidth: "1200px", margin: "0 auto 4rem", padding: "0 1rem" }}
        >
          <h2>Explore More Resources</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
            <li>
              <Link
                to="/seo-guides"
                style={{ color: "#0056b3", textDecoration: "none" }}
              >
                SEO Guides
              </Link>
            </li>
            <li>
              <Link
                to="/seo-services-delhi"
                style={{ color: "#0056b3", textDecoration: "none" }}
              >
                SEO Services in Delhi
              </Link>
            </li>
            <li>
              <Link
                to="/seo-optimized-page"
                style={{ color: "#0056b3", textDecoration: "none" }}
              >
                SEO Optimized Page
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default DigitalMarketing;
