import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is YMYL and why is it important for SEO?",
    answer:
      "YMYL stands for Your Money or Your Life. It refers to pages that can impact a person's health, finances, or safety. Google holds these pages to higher standards to ensure trustworthiness and accuracy.",
  },
  {
    question: "How does E-E-A-T improve website rankings?",
    answer:
      "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. It helps Google assess the quality and reliability of content, which can improve rankings especially for YMYL topics.",
  },
  {
    question: "What are best practices for internal linking?",
    answer:
      "Use descriptive anchor text, link to relevant pages, and maintain a logical site structure to help users and search engines navigate your website effectively.",
  },
];

function FullWidthSeoOptimizedPage() {
  return (
    <>
      <Helmet>
        <title>SEO Optimized Full-Width Page | Expert SEO Guides & Services</title>
        <meta
          name="description"
          content="Learn how to create a full-width SEO optimized page following YMYL and E-E-A-T guidelines with responsive design, fast loading, schema markup, and internal linking."
        />
        <meta
          name="keywords"
          content="SEO optimized page, YMYL SEO, E-E-A-T SEO, responsive SEO, schema markup, internal linking, fast loading SEO"
        />
        <link rel="canonical" href="https://www.example.com/full-width-seo-optimized-page" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "SEO Optimized Full-Width Page",
            "description":
              "A full-width SEO optimized page following YMYL and E-E-A-T guidelines with responsive layout, hero section, FAQs, meta tags, schema markup, alt tags, and internal linking.",
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

      <main style={{ width: "100%", margin: 0, padding: 0, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", lineHeight: 1.6, color: "#222" }}>
        {/* Hero Section */}
        <section
          style={{
            width: "100%",
            backgroundImage: "url('/public/seo-hero-bg.jpg')",
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
          aria-label="SEO Optimized Page Hero Section"
        >
          <h1 style={{ fontSize: "3rem", maxWidth: "900px", margin: "0 auto 1rem", fontWeight: "700" }}>
            Create a Full-Width SEO Optimized Page with YMYL & E-E-A-T
          </h1>
          <p style={{ fontSize: "1.25rem", maxWidth: "700px", margin: "0 auto" }}>
            Follow best SEO practices including responsive design, fast loading, schema markup, alt tags, and internal linking to boost your website’s authority and rankings.
          </p>
          <img
            src="/public/seo-hero-image.png"
            alt="Illustration showing SEO optimization concepts"
            style={{ marginTop: "2rem", maxWidth: "400px", width: "100%", height: "auto", borderRadius: "8px" }}
            loading="lazy"
          />
        </section>

        {/* Content Sections */}
        <section style={{ maxWidth: "1200px", margin: "3rem auto", padding: "0 1rem" }}>
          <h2>Understanding YMYL and E-E-A-T</h2>
          <p>
            YMYL (Your Money or Your Life) pages require high standards of trust and accuracy because they impact users' well-being or finances. E-E-A-T principles help demonstrate your website’s credibility through experience, expertise, authoritativeness, and trustworthiness.
          </p>

          <h3>Experience and Expertise</h3>
          <p>
            Showcase your credentials, author bios, and real-world experience to build trust with your audience and search engines.
          </p>

          <h3>Authoritativeness and Trustworthiness</h3>
          <p>
            Use credible sources, secure your website with HTTPS, and maintain transparent policies to enhance your site’s authority and trust.
          </p>

          <h2>Responsive Layout and Fast Loading</h2>
          <p>
            Ensure your page adapts seamlessly to all devices using flexible grids and media queries. Optimize images and minimize scripts to improve loading speed and user experience.
          </p>

          <h2>Meta Tags and Schema Markup</h2>
          <p>
            Use descriptive meta titles and descriptions to improve click-through rates. Implement schema markup like FAQPage to help search engines understand your content better.
          </p>

          <h2>Alt Tags and Internal Linking</h2>
          <p>
            Add meaningful alt text to all images for accessibility and SEO benefits. Use internal links to guide users to related content and distribute page authority across your site.
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
        <section style={{ maxWidth: "1200px", margin: "0 auto 4rem", padding: "0 1rem" }}>
          <h2>Explore More SEO Resources</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
            <li>
              <Link to="/seo-guides" style={{ color: "#0056b3", textDecoration: "none" }}>
                SEO Guides
              </Link>
            </li>
            <li>
              <Link to="/seo-services-delhi" style={{ color: "#0056b3", textDecoration: "none" }}>
                SEO Services in Delhi
              </Link>
            </li>
            <li>
              <Link to="/seo-optimized-page" style={{ color: "#0056b3", textDecoration: "none" }}>
                SEO Optimized Page
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default FullWidthSeoOptimizedPage;
