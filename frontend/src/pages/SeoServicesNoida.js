import React from 'react';

const icon = {
  growth: "📈",
  keyword: "🔑",
  onpage: "🛠️",
  technical: "⚙️",
  link: "🔗",
  content: "✍️",
  local: "📍",
  ecommerce: "🛒",
  national: "🌐",
  international: "✈️",
  audit: "🔍",
  tracking: "📊",
  trust: "🤝",
  roi: "💰",
  traffic: "🚦",
  result: "🏆",
  faq: "❓",
  phone: "📞",
  office: "🏢",
  expert: "👨‍💼",
  package: "📦",
  happy: "😊",
  support: "🧑‍💻",
  visibility: "👀",
  competitor: "⚔️",
  authority: "🏅",
};

const SeoServicesNoida = () => {
  return (
    <>
      <style>
        {`
          body {
            background: linear-gradient(90deg, #e3f0ff 0%, #f8faff 100%);
            width: 100%;
            margin: 0;
          }
          .seo-services-delhi {
            width: 100%;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            background: linear-gradient(90deg, #e3f0ff 0%, #f8faff 100%);
          }
          .seo-main-content {
            max-width: 100%;
            margin: 40px auto 0 auto;
            background: #fff;
            border-radius: 18px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.08);
            padding: 0 0 24px 0;
          }
          .seo-services-delhi h1, .seo-services-delhi h2, .seo-services-delhi h3 {
            color: #007bff;
            margin-bottom: 16px;
            text-align: center;
          }
          .seo-services-delhi h1 {
            font-size: 2.3rem;
            margin-top: 0;
            letter-spacing: 1px;
          }
          .seo-services-delhi h2 {
            font-size: 1.35rem;
            margin-top: 0;
          }
          .seo-services-delhi h3 {
            font-size: 1.1rem;
          }
          .seo-services-delhi p, .seo-services-delhi ul {
            color: #222;
            font-size: 1.08rem;
            text-align: center;
          }
          .btn-primary {
            background: linear-gradient(90deg, #007bff 60%, #0056b3 100%);
            color: #fff;
            padding: 14px 28px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 1.1rem;
            display: inline-block;
            margin: 18px auto 0 auto;
            box-shadow: 0 2px 8px rgba(0,123,255,0.08);
            transition: background 0.2s;
          }
          .btn-primary:hover {
            background: linear-gradient(90deg, #0056b3 60%, #007bff 100%);
          }
          .section {
            padding: 36px 32px 24px 32px;
            border-bottom: 1px solid #e2e8f0;
            margin-bottom: 0;
          }
          .section:last-child, .internal-links {
            border-bottom: none;
          }
          .section ul {
            margin: 18px auto 0 auto;
            padding: 0;
            list-style: none;
            max-width: 420px;
            text-align: left;
          }
          .section ul li {
            margin: 10px 0;
            font-size: 1.08rem;
            display: flex;
            align-items: center;
            gap: 10px;
            background: #f8faff;
            border-radius: 7px;
            padding: 7px 14px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.03);
          }
          .section.hero-section {
            background: linear-gradient(90deg, #e3f0ff 0%, #f8faff 100%);
            border-radius: 18px 18px 0 0;
            box-shadow: none;
            padding-top: 48px;
          }
          .section.contact-form {
            background: #f8faff;
            border-radius: 0 0 18px 18px;
            box-shadow: none;
          }
          .internal-links {
            text-align: center;
            padding: 18px 0 0 0;
            font-size: 1.05rem;
            background: none;
          }
          .internal-links a {
            color: #007bff;
            text-decoration: underline;
            margin: 0 8px;
          }
          @media (max-width: 700px) {
            .seo-main-content {
              max-width: 99vw;
              padding: 0;
            }
            .section {
              padding: 24px 6vw 18px 6vw;
            }
          }
        `}
      </style>
      <div className="seo-services-delhi">
        <main className="seo-main-content">
          <section className="section hero-section">
            <h1>🚀 Top-Rated SEO Services in Noida to Boost Your Business</h1>
            <p>
              Maximize your online visibility with our expert SEO services tailored for businesses in Noida.<br />
              Get more traffic, leads, and sales with our customized SEO strategies.
            </p>
          </section>

          <section className="section services-overview">
            <h2>{icon.growth} Grow Your Website Traffic and Leads</h2>
            <p>
              We offer comprehensive SEO strategies designed to boost your online presence and attract quality leads.
            </p>
            <ul>
              <li>{icon.keyword} Keyword Research & Strategy</li>
              <li>{icon.onpage} On-Page Optimization</li>
              <li>{icon.technical} Technical SEO</li>
              <li>{icon.link} Off-Page Link Building</li>
              <li>{icon.content} Content Marketing</li>
            </ul>
          </section>

          <section className="section why-seo-important">
            <h2>{icon.visibility} Why is SEO Important for Your Business?</h2>
            <p>
              SEO improves your website's visibility, builds trust, and ensures long-term growth by targeting high-intent users.
            </p>
          </section>

          <section className="section affordable-seo">
            <h2>{icon.package} Boost Your Business Through Affordable SEO Services</h2>
            <p>
              Our packages are designed to deliver ROI-focused results without breaking your marketing budget.
            </p>
          </section>

          <section className="section result-driven">
            <h2>{icon.result} Result-Driven SEO Services in Noida</h2>
            <ul>
              <li>{icon.local} Local SEO</li>
              <li>{icon.ecommerce} E-commerce SEO</li>
              <li>{icon.national} National SEO</li>
              <li>{icon.international} International SEO</li>
              <li>{icon.technical} Technical SEO</li>
            </ul>
          </section>

          <section className="section need-seo">
            <h2>{icon.growth} Why Does Your Business Need SEO Services?</h2>
            <ul>
              <li>{icon.visibility} To increase organic visibility</li>
              <li>{icon.authority} To build trust and authority</li>
              <li>{icon.competitor} To stay ahead of competitors</li>
              <li>{icon.roi} To drive long-term ROI</li>
            </ul>
          </section>

          <section className="section seo-work-process">
            <h2>{icon.audit} Our SEO Work Process</h2>
            <ul>
              <li>{icon.audit} Website Audit</li>
              <li>{icon.keyword} Keyword Research</li>
              <li>{icon.onpage} On-Page Optimization</li>
              <li>{icon.content} Content Creation</li>
              <li>{icon.link} Link Building</li>
              <li>{icon.tracking} Performance Tracking</li>
            </ul>
          </section>

          <section className="section about-company">
            <h2>{icon.happy} CyberWorx Technologies: The #1 Best SEO Company in Noida</h2>
            <p>
              With years of experience and a portfolio of happy clients, we offer expert SEO services tailored to all types of businesses.
            </p>
          </section>

          <section className="section benefits">
            <h2>{icon.support} Benefits of Choosing SEO Services of CyberWorx</h2>
            <ul>
              <li>{icon.visibility} Improved visibility</li>
              <li>{icon.traffic} Increased traffic and leads</li>
              <li>{icon.result} Measurable results</li>
              <li>{icon.expert} Expert support</li>
            </ul>
          </section>

          <section className="section client-results">
            <h2>{icon.tracking} Results We Achieved for Our Clients</h2>
            <p>Here is an overview of the traffic growth and keyword rankings we've delivered.</p>
          </section>

          <section className="section faq">
            <h2>{icon.faq} Frequently Asked Questions</h2>
            <ul>
              <li>{icon.faq} What is SEO and how does it work?</li>
              <li>{icon.faq} How long does SEO take to show results?</li>
              <li>{icon.faq} What industries do you serve?</li>
            </ul>
          </section>

          <section className="section location">
            <h2>{icon.office} Contact Our SEO Experts in Noida</h2>
            <p>Visit our office or call us to schedule your free consultation.</p>
          </section>

          <section className="section contact-form">
            <h3>{icon.expert} Ready to Elevate Your Noida Business with SEO?</h3>
            <p>Contact our SEO experts today and discover how we can help you dominate the search engine results pages.</p>
            <a href="/contact" className="btn-primary">{icon.phone} Request a Free SEO Audit</a>
          </section>

          <footer className="section internal-links">
            <p>
              Explore More:
              <a href="/local-seo-noida">{icon.local} Local SEO Noida</a> |
              <a href="/seo-packages">{icon.package} Affordable SEO Packages</a>
            </p>
          </footer>
        </main>
      </div>
    </>
  );
};

export default SeoServicesNoida;
