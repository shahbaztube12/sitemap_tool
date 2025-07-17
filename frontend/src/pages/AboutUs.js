function AboutUs() {
  return (
    <main className="homepage">
      <style>{`
        .homepage {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding: 1rem;
          background-color: #f8f9fa;
          color: #212529;
          max-width: 1200px;
          margin: auto;
        }

        .hero-section {
          text-align: center;
          padding: 3rem 1rem;
        }

        .hero-section img {
          max-width: 100%;
          border-radius: 10px;
          margin-bottom: 2rem;
        }

        .hero-section h1 {
          font-size: 2.5rem;
          color: #003366;
          margin-bottom: 1rem;
        }

        .hero-section p {
          font-size: 1.125rem;
          color: #555;
          max-width: 750px;
          margin: 0 auto;
        }

        .features {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-top: 3rem;
        }

        .feature {
          background-color: #fff;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }

        .feature:hover {
          transform: translateY(-5px);
        }

        .feature h2 {
          color: #0073e6;
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .feature p {
          font-size: 1rem;
          color: #444;
        }

        .cta-section {
          margin-top: 4rem;
          background: #0073e6;
          color: #fff;
          padding: 2.5rem 1.5rem;
          border-radius: 10px;
          text-align: center;
        }

        .cta-section h3 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
        }

        .cta-section p {
          font-size: 1.1rem;
        }

        @media (min-width: 768px) {
          .features {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) {
          .features {
            grid-template-columns: repeat(3, 1fr);
          }

          .hero-section h1 {
            font-size: 3rem;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="hero-section animate__animated animate__fadeInDown">
        <img src="/banner.png" alt="Boost SEO visibility banner" />
        <h1>🚀 Boost Your Online Visibility with SEO Tools</h1>
        <p>
          Welcome to <strong>TarkaShot.com</strong> — your destination for accurate, fast, and effective SEO solutions. From sitemap generation to advanced on-page audits, we help improve your website rankings while maintaining E-E-A-T compliance.
        </p>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <div className="feature animate__animated animate__fadeInUp animate__delay-1s">
          <h2>🔎 SEO Analysis Tools</h2>
          <p>
            Perform detailed audits, keyword research, and backlink tracking. Our tools help you make informed SEO decisions based on real data.
          </p>
        </div>
        <div className="feature animate__animated animate__fadeInUp animate__delay-2s">
          <h2>📄 Sitemap Generator</h2>
          <p>
            Instantly generate XML and HTML sitemaps for better indexing. Essential for improving crawlability and site structure.
          </p>
        </div>
        <div className="feature animate__animated animate__fadeInUp animate__delay-3s">
          <h2>📊 E-E-A-T Optimized Content</h2>
          <p>
            Ensure your website follows Google’s guidelines for Expertise, Experience, Authoritativeness, and Trustworthiness.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section animate__animated animate__fadeInUp animate__delay-4s">
        <h3>🧩 Try Our Free SEO Tools</h3>
        <p>
          Get started with our free tools including mobile-friendliness tester, YouTube tag extractor, and more. Designed for both beginners and professionals.
        </p>
      </section>
    </main>
  );
}

export default AboutUs;
