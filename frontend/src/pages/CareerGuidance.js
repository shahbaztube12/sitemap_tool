import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is career guidance in digital marketing?",
    answer:
      "Career guidance in digital marketing helps professionals understand the skills, roles, and growth opportunities available in the SEO and digital marketing industry.",
  },
  {
    question: "How can I build a career in SEO?",
    answer:
      "Building a career in SEO involves learning key concepts like keyword research, on-page and technical SEO, content marketing, and gaining practical experience through projects or internships.",
  },
  {
    question: "Why is continuous learning important in digital marketing?",
    answer:
      "Digital marketing is a rapidly evolving field. Continuous learning helps professionals stay updated with the latest trends, tools, and best practices to remain competitive.",
  },
];

function CareerGuidance() {
  return (
    <>
      <Helmet>
        <title>Career Guidance | SEO & Digital Marketing Career Advice</title>
        <meta
          name="description"
          content="Get expert career guidance and resources for building a successful career in SEO and digital marketing."
        />
        <meta
          name="keywords"
          content="career guidance, digital marketing career, SEO career, career advice, digital marketing resources"
        />
        <link rel="canonical" href="https://www.example.com/career-guidance" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Career Guidance",
            "description":
              "Resources and advice for professionals building careers in SEO and digital marketing.",
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
            backgroundImage: "url('https://imgs.search.brave.com/4Ue8QC232lpArTpCtasvi0Ge47U8g6kbi_hw9sQDepo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTM1/Njc3NzIzL3ZlY3Rv/ci9sZWFkZXJzaGlw/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1rekZCM0ZORmgz/bGNTQlpodnM1MjVj/VjlGU0E0MG5aaFFB/LWJTRldab2E4PQ')",
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
          aria-label="Career Guidance Hero Section"
        >
          <h1
            style={{
              fontSize: "3rem",
              maxWidth: "900px",
              margin: "0 auto 1rem",
              fontWeight: "700",
              color: "#003366",
            }}
          >
            Expert Career Guidance for SEO & Digital Marketing Professionals
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "700px",
              margin: "0 auto",
              color: "#003366",
            }}
          >
            Access valuable resources and advice to build and advance your career in the dynamic field of SEO and digital marketing.
          </p>
          <img
            src="https://imgs.search.brave.com/uwTfCf84gasq2J03dcJcYBfr1ZL8bV5-f8PSHyCngBA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvc3R1ZGVu/dC1jYXJlZXItZ3Vp/ZGFuY2UtaWxsdXN0/cmF0aW9uLWRvd25s/b2FkLWluLXN2Zy1w/bmctZ2lmLWZpbGUt/Zm9ybWF0cy0tY291/bnNlbGluZy1zY2hv/b2wtYW5kLWVkdWNh/dGlvbi1wYWNrLWls/bHVzdHJhdGlvbnMt/OTI1MTk2OC5wbmc_/Zj13ZWJw"
            alt="Illustration representing career guidance in digital marketing"
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
          <h2>What is Career Guidance in Digital Marketing?</h2>
          <p>
            Career guidance helps individuals understand the opportunities, skills, and pathways available in the SEO and digital marketing industry to make informed career decisions.
          </p>

          <h3>Building a Career in SEO</h3>
          <p>
            Learn essential SEO skills including keyword research, on-page optimization, technical SEO, and content marketing to establish a strong foundation.
          </p>

          <h3>Importance of Continuous Learning</h3>
          <p>
            Stay updated with the latest digital marketing trends, tools, and best practices to remain competitive and grow professionally.
          </p>

          <h2>Responsive Design and Accessibility</h2>
          <p>
            Ensure your career resources are accessible on all devices with responsive design and include alt tags for images to improve SEO and usability.
          </p>

          <h2>Meta Tags, Schema Markup, and Internal Linking</h2>
          <p>
            Use meta tags and schema markup to enhance search engine understanding. Internal linking helps users navigate related content and improves site authority.
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
                to="/digital-marketing"
                style={{ color: "#0056b3", textDecoration: "none" }}
              >
                Digital Marketing
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

export default CareerGuidance;
