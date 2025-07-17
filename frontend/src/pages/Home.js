import SEO from '../components/SEO';
import TopSlider from '../components/TopSlider';

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

const Home = () => {
  return (
    <>
      <SEO
        title="Top SEO Services in Delhi | Tarkashot - Boost Your Business"
        description="Get top-rated SEO services in Delhi to boost your business. Expert SEO strategies, on-page optimization, link building, and more. Contact us for a free SEO audit."
        canonical="https://tarkashot.com/"
      >
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Tarkashot",
            "url": "https://tarkashot.com",
            "logo": "https://tarkashot.com/logo192.png",
            "sameAs": [
              "https://www.facebook.com/tarkashot",
              "https://twitter.com/tarkashot",
              "https://www.linkedin.com/company/tarkashot"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8800990012",
              "contactType": "Customer Service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            }
          }
          `}
        </script>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://tarkashot.com/"
              }
            ]
          }
          `}
        </script>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is SEO and how does it help my business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SEO (Search Engine Optimization) improves your website’s visibility on Google by optimizing technical structure, content quality, and backlinks. It helps attract more traffic, build authority, and drive conversions."
                }
              },
              {
                "@type": "Question",
                "name": "How long does SEO take to show measurable results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Generally, you can expect noticeable results in 3–6 months. However, factors like competition, domain age, and website condition can affect timelines."
                }
              },
              {
                "@type": "Question",
                "name": "What types of businesses do you provide SEO for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tarkashot.com offers SEO services for local businesses, e-commerce stores, tech startups, healthcare, education, and many more industries across India and globally."
                }
              },
              {
                "@type": "Question",
                "name": "Is SEO better than paid ads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SEO provides long-term, compounding ROI and brand authority, while paid ads offer short-term bursts. The best strategy often combines both."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer white-label SEO services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we partner with agencies to deliver private-label SEO solutions with full transparency and reporting."
                }
              }
            ]
          }
          `}
        </script>
      </SEO>
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
          <TopSlider />

          {/* HERO SECTION */}
          <section className="section hero-section seo-hero" style={{ padding: '4rem 1rem', backgroundColor: '#f9f9f9' }}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* Text Content - Left Side */}
              <div className="hero-text" style={{ flex: '1 1 500px', maxWidth: '600px' }}>
                <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1rem' }}>
                  🚀 Top-Rated <strong>SEO Services in Delhi</strong> to Boost Your Business
                </h1>
                <p style={{ fontSize: '1.125rem', color: '#333', marginBottom: '1.5rem' }}>
                  Want to dominate Google search results in Delhi? Our professional <strong>SEO experts</strong> use cutting-edge strategies to help your business rank higher, attract targeted traffic, and increase conversions.
                </p>
                <ul style={{ listStyle: '✅', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                  <li>Customized SEO solutions for Delhi-based businesses</li>
                  <li>On-page & technical optimization aligned with Google standards</li>
                  <li>Mobile-first strategies & Core Web Vitals compliance</li>
                  <li>Ethical White Hat SEO following Google's guidelines</li>
                </ul>
                <a 
                  href="#contact"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#0073e6',
                    color: '#fff',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                  }}
                >
                  📈 Get a Free SEO Audit
                </a>
              </div>
              {/* Image or Guide - Right Side */}
              <div className="hero-guide" style={{ flex: '1 1 400px', maxWidth: '500px', textAlign: 'center', marginTop: '2rem' }}>
                <img 
                  src="img1.png"
                  className='img-fluid img-responsive overflow-hidden' 
                  alt="Google SEO Ranking Guide"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
                <p style={{ fontSize: '0.95rem', color: '#555', marginTop: '1rem' }}>
                  Based on Google’s 2025 SEO Ranking Factors: E-E-A-T, Page Experience, Mobile-Friendliness & Content Relevance.
                </p>
              </div>
            </div>
          </section>

         <section className="services-overview">
  <div className="services-header">
    <h2>🚀 Boost Your Visibility with Our SEO Services</h2>
    <p>
      Discover powerful, result-driven <strong>SEO services in Delhi</strong> crafted to improve
      your rankings, drive qualified traffic, and increase conversions. Our strategies
      align with Google's latest ranking factors.
    </p>
  </div>

  <div className="services-grid">
    {[
      { icon: icon.keyword, title: 'Keyword Research & Strategy' },
      { icon: icon.onpage, title: 'On-Page SEO Optimization' },
      { icon: icon.technical, title: 'Technical SEO Audits' },
      { icon: icon.link, title: 'High-Quality Link Building' },
      { icon: icon.content, title: 'SEO-Driven Content Marketing' },
      { icon: icon.growth, title: 'Analytics & Growth Reporting' },
    ].map((service, idx) => (
      <article className="service-card" key={idx}>
        <div className="service-icon">{service.icon}</div>
        <h3>{service.title}</h3>
      </article>
    ))}
  </div>
</section>


<style>
  {`

  .services-overview {
  padding: 4rem 1rem;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.services-header h2 {
  font-size: 2.25rem;
  color: #222;
  margin-bottom: 1rem;
}

.services-header p {
  font-size: 1.125rem;
  color: #555;
  max-width: 750px;
  margin: 0 auto 3rem auto;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 0 1rem;
}

/* Cards style */
.service-card {
  background-color: #f8f8f8;
  padding: 1.75rem 1.25rem;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #0073e6;
}

.service-card h3 {
  font-size: 1.15rem;
  font-weight: 600;
  color: #222;
}

/* Responsive - tablets */
@media (min-width: 600px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

/* Responsive - desktops */
@media (min-width: 900px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .services-header h2 {
    font-size: 2.5rem;
  }
}

  
  
.why-seo-important-section {
  background-color: #f9f9f9;
  padding: 3rem 1rem;
  font-family: Arial, sans-serif;
  color: #222;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.section-header h2 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.section-header p {
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 2rem;
}

.table-wrapper {
  overflow-x: auto;
}

.seo-benefits-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.1);
  min-width: 500px; /* for scroll on small screens */
}

.seo-benefits-table th,
.seo-benefits-table td {
  padding: 1rem 1.25rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.seo-benefits-table thead {
  background-color: #0073e6;
  color: white;
}

.seo-benefits-table tbody tr:nth-child(even) {
  background-color: #f1f5f9;
}

@media (max-width: 600px) {
  .section-header h2 {
    font-size: 1.5rem;
  }

  .section-header p {
    font-size: 1rem;
  }

  .seo-benefits-table {
    min-width: 100%;
  }
}


  
  `}
</style>

<section className="why-seo-important-section">
  <div className="container-fluid">
    {/* Title & Description full width, centered */}
    <div className="row">
      <div className="container-fluid text-blue text-center section-header">
        <h2>🔍 Why SEO is Crucial for Your Business in 2025</h2>
        <p>
          SEO boosts your website's visibility, builds trust, and drives organic traffic for long-term growth.
        </p>
      </div>
    </div>

    {/* Table full width */}
    <div className="row">
      <div className="container table-wrapper">
        <table className="seo-benefits-table" aria-label="SEO advantages and their importance">
          <thead>
            <tr>
              <th>SEO Advantage</th>
              <th>Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Increased Visibility</td>
              <td>Higher rankings help customers find your business easily.</td>
            </tr>
            <tr>
              <td>Targeted Traffic</td>
              <td>Attracts users actively searching for your products/services.</td>
            </tr>
            <tr>
              <td>Builds Trust</td>
              <td>SEO enhances brand credibility and authority.</td>
            </tr>
            <tr>
              <td>Better User Experience</td>
              <td>Optimizes site speed and navigation for visitors.</td>
            </tr>
            <tr>
              <td>Cost-Effective</td>
              <td>Delivers long-term results without constant ad spend.</td>
            </tr>
            <tr>
              <td>Supports E-E-A-T</td>
              <td>Boosts expertise, authoritativeness, and trustworthiness.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>







    <section
  className="seo-tools-section animate__animated animate__fadeInUp"
  style={{
    padding: '4rem 1rem',
    backgroundColor: '#f9f9f9',
    textAlign: 'center'
  }}
>
  <div className="container-fluid" style={{  margin: '0 auto' }}>
    {/* Header Content */}
    <div className="section-header  col-12" style={{ marginBottom: '3rem' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#222' }}>
        🔧 Free SEO Tools to Improve Your Website’s Performance
      </h2>
      <p style={{ fontSize: '1.125rem', color: '#555', maxWidth: '800px', margin: '0 auto' }}>
        Discover a powerful collection of free SEO tools designed to help you optimize your website for Google search, 
        enhance content quality, and follow best practices for technical SEO. These tools support E-E-A-T principles and 
        help build a strong digital presence through trust, performance, and experience.
      </p>
    </div>

    {/* Tools Table */}
    <div className="tools-table-wrapper container col-12" style={{ overflowX: 'auto' }}>
      <table
        className="tools-table"
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '1rem',
          backgroundColor: '#fff',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 0 15px rgba(0,0,0,0.05)',
          textAlign: 'left'
        }}
      >
        <thead style={{ backgroundColor: '#003366', color: '#fff' }}>
          <tr>
            <th style={{ padding: '1rem' }}>Tool Name</th>
            <th style={{ padding: '1rem' }}>Description</th>
            <th style={{ padding: '1rem' }}>URL</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              name: "Try Free Tools",
              desc: "Access all SEO tools from one dashboard to optimize your digital strategy.",
              url: "/free-seo-tools"
            },
            {
              name: "Bulk URL Redirection Tool",
              desc: "Manage bulk 301/302 redirects efficiently to preserve ranking signals.",
              url: "/bulk-url-redirection-tool"
            },
            {
              name: "Google Index Checker",
              desc: "Check if your web pages are indexed on Google to ensure visibility.",
              url: "/google-index-checker"
            },
            {
              name: "YouTube Transcript Tool",
              desc: "Extract full transcripts from YouTube videos for accessibility and SEO.",
              url: "/youtube-transcript-tool"
            },
            {
              name: "Bulk Anchor Text Generators",
              desc: "Create multiple optimized anchor texts for better internal linking.",
              url: "/bulk-anchor-text-generator"
            },
            {
              name: "YouTube Tag Generator",
              desc: "Generate effective tags to improve your YouTube video SEO.",
              url: "/youtube-tag-generator"
            },
            {
              name: "WhatsApp Chat Link",
              desc: "Generate direct WhatsApp chat links to boost user interaction.",
              url: "/whatsapp-chat-link-generator"
            },
            {
              name: "Comma Separator Tool",
              desc: "Format keywords and tags into clean comma-separated lists.",
              url: "/comma-separator-tool"
            },
            {
              name: "YouTube Video Tags Extractor",
              desc: "Extract tags from YouTube videos to analyze and improve strategy.",
              url: "/youtube-tags-extractor"
            },
            {
              name: "URL Domain Extractor",
              desc: "Get domain names from long URL lists for backlink analysis.",
              url: "/url-domain-extractor"
            },
            {
              name: "Backlink Generator Tool",
              desc: "Create initial backlinks to improve crawlability and indexing.",
              url: "/backlink-generator-tool"
            },
            {
              name: "Image Compressor",
              desc: "Compress images to reduce load times and improve Core Web Vitals.",
              url: "/image-compressor"
            },
            {
              name: "About Us Page Generator",
              desc: "Generate a compliant, trust-building About Us page using E-E-A-T.",
              url: "/about-us-page-generator"
            },
            {
              name: "Mobile-Friendly Tester Tool",
              desc: "Test your site for mobile responsiveness and mobile-first indexing.",
              url: "/mobile-friendly-tester"
            },
            {
              name: "Canonical Tag Generator",
              desc: "Create canonical URLs to prevent duplicate content issues.",
              url: "/canonical-tag-generator"
            },
            {
              name: "Free SEO Audit",
              desc: "Run a full SEO audit to detect issues and improve Google ranking.",
              url: "/free-seo-audit"
            }
          ].map((tool, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '1rem', fontWeight: '600', color: '#222' }}>{tool.name}</td>
              <td style={{ padding: '1rem', color: '#555' }}>{tool.desc}</td>
              <td style={{ padding: '1rem' }}>
                <a
                  href={tool.url}
                  style={{ color: '#003366', textDecoration: 'underline' }}
                >
                  Visit Tool
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section>



       {/* AFFORDABLE SEO */}
<section
  className="section affordable-seo animate__animated animate__fadeInUp"
  style={{
    backgroundColor: '#e6f2ff',
    padding: '3rem 1.5rem',
    textAlign: 'center',
    borderRadius: '12px',
    maxWidth: '900px',
    margin: '3rem auto',
    boxShadow: '0 8px 20px rgba(0, 51, 102, 0.15)',
    color: '#003366',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  }}
  aria-labelledby="affordable-seo-title"
>
  <header>
    <h2
      id="affordable-seo-title"
      style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        color: '#002244'
      }}
    >
      <span aria-hidden="true" style={{ fontSize: '2.5rem' }}>
        {icon.package}
      </span>
      Boost Your Business Through Affordable SEO Services
    </h2>
  </header>

  <p
    style={{
      fontSize: '1.2rem',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
      color: '#004080'
    }}
  >
    Our packages are designed to deliver <strong>ROI-focused results</strong> without breaking your marketing budget.
    Get tailored strategies that improve your search rankings, increase organic traffic, and maximize your online visibility.
  </p>
</section>


     <section
  className="section container-fluid result-driven animate__animated animate__fadeInUp"
  style={{
    backgroundColor: '#ffffff',
    padding: '4rem 1.5rem',
    maxWidth: '100%',
    margin: '3rem auto',
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.08)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#002244'
  }}
  aria-labelledby="result-driven-title"
>
  <header style={{ marginBottom: '2rem' }}>
    <h2
      id="result-driven-title"
      style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.6rem',
        color: '#001f3f'
      }}
    >
      <span aria-hidden="true" style={{ fontSize: '2.5rem' }}>
        {icon.result}
      </span>
      Result-Driven SEO Services in Delhi NCR
    </h2>
    <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: '#444' }}>
      Our SEO strategies are built for performance. We don't just offer services — we deliver **tangible outcomes** that align with your business goals.
    </p>
  </header>

  {/* Comparison Table */}
  <div style={{ overflowX: 'auto', marginTop: '2rem' }}>
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'left',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 0 12px rgba(0,0,0,0.05)',
        backgroundColor: '#f9f9f9'
      }}
    >
      <thead style={{ backgroundColor: '#003366', color: '#fff' }}>
        <tr>
          <th style={{ padding: '1rem' }}>SEO Strategy</th>
          <th style={{ padding: '1rem' }}>Effective?</th>
          <th style={{ padding: '1rem' }}>Why It Matters</th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            name: `${icon.local} Local SEO`,
            effective: '✅ Yes',
            reason: 'Captures nearby customers searching with high intent, ideal for local businesses.'
          },
          {
            name: `${icon.ecommerce} E-commerce SEO`,
            effective: '✅ Yes',
            reason: 'Boosts product visibility and organic traffic on your online store.'
          },
          {
            name: `${icon.national} National SEO`,
            effective: '✅ Yes',
            reason: 'Targets broader audiences and builds national brand authority.'
          },
          {
            name: `${icon.international} International SEO`,
            effective: '✅ Yes',
            reason: 'Helps you rank in multiple countries and languages to expand reach.'
          },
          {
            name: `${icon.technical} Technical SEO`,
            effective: '✅ Yes',
            reason: 'Ensures fast load times, crawlability, and fixes indexing issues.'
          },
          {
            name: 'Keyword Stuffing',
            effective: '❌ No',
            reason: 'Hurts readability and can lead to Google penalties.'
          },
          {
            name: 'Buying Backlinks',
            effective: '❌ No',
            reason: 'Violates Google guidelines and can destroy your site’s trust.'
          }
        ].map((row, i) => (
          <tr
            key={i}
            style={{
              backgroundColor: i % 2 === 0 ? '#fff' : '#f0f4f8',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e0f7ff')}
            onMouseLeave={e =>
              (e.currentTarget.style.backgroundColor = i % 2 === 0 ? '#fff' : '#f0f4f8')
            }
          >
            <td style={{ padding: '1rem', fontWeight: '600' }}>{row.name}</td>
            <td style={{ padding: '1rem', color: row.effective.includes('Yes') ? 'green' : 'red' }}>
              {row.effective}
            </td>
            <td style={{ padding: '1rem', color: '#333' }}>{row.reason}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>


      <section
  className="section container-fluid need-seo animate__animated animate__fadeInUp"
  style={{
    padding: '4rem 1.5rem',
    backgroundColor: '#f4faff',
    textAlign: 'center',
    maxWidth: '100%',
    margin: '0 auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  }}
  aria-labelledby="need-seo-title"
>
  <header style={{ marginBottom: '2.5rem' }}>
    <h2
      id="need-seo-title"
      style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#003366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem'
      }}
    >
      <span aria-hidden="true" style={{ fontSize: '2.5rem' }}>{icon.growth}</span>
      Why Does Your Business Need SEO Services?
    </h2>
    <p
      style={{
        maxWidth: '700px',
        margin: '1rem auto 0',
        color: '#444',
        fontSize: '1.1rem'
      }}
    >
      Search engine optimization is essential to compete, rank, and grow in a digital-first world. Here’s how SEO aligns with Google’s E-E-A-T and YMYL principles to build lasting trust and visibility.
    </p>
  </header>

  {/* Cards */}
  <div
    className="seo-benefits-grid container-fluid"
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1.5rem',
      marginTop: '2rem'
    }}
  >
    {[
      {
        icon: icon.visibility,
        title: 'Increase Organic Visibility',
        detail:
          'Appear where your customers are searching. SEO ensures your brand is discoverable without paid ads.'
      },
      {
        icon: icon.authority,
        title: 'Build Trust and Authority',
        detail:
          'Content aligned with E-E-A-T (Expertise, Experience, Authoritativeness, Trust) earns rankings and trust.'
      },
      {
        icon: icon.competitor,
        title: 'Stay Ahead of Competitors',
        detail:
          'Competitive SEO strategies keep you one step ahead in search results, even in saturated industries.'
      },
      {
        icon: icon.roi,
        title: 'Drive Long-Term ROI',
        detail:
          'Unlike paid campaigns, SEO delivers sustainable traffic and leads, making it a high-ROI investment.'
      }
    ].map((item, index) => (
      <div
        key={index}
        className="seo-benefit-card"
        onClick={() => alert(item.title)} // You can replace this with modal/expand logic
        style={{
          backgroundColor: '#ffffff',
          padding: '2rem',
          borderRadius: '12px',
          width: '280px',
          textAlign: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.12)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
        }}
      >
        <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#003366' }}>{item.title}</h3>
        <p style={{ fontSize: '0.95rem', color: '#444', marginTop: '0.5rem' }}>{item.detail}</p>
      </div>
    ))}
  </div>
</section>


         <section
  className="section seo-work-process animate__animated animate__fadeInUp"
  style={{
    padding: '4rem 1.5rem',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  }}
  aria-labelledby="seo-process-title"
>
  <h2
    id="seo-process-title"
    style={{
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '3rem',
      color: '#003366',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem'
    }}
  >
    <span aria-hidden="true" style={{ fontSize: '2.5rem' }}>{icon.audit}</span>
    Our SEO Work Process
  </h2>

  <div
    className="timeline-container"
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem'
    }}
  >
    {[
      {
        icon: icon.audit,
        title: 'Website Audit',
        desc: 'Comprehensive technical and content audit to find SEO issues and opportunities.'
      },
      {
        icon: icon.keyword,
        title: 'Keyword Research',
        desc: 'We discover the best short-tail and long-tail keywords with high intent.'
      },
      {
        icon: icon.onpage,
        title: 'On-Page Optimization',
        desc: 'We optimize meta tags, headings, content structure, internal links, and more.'
      },
      {
        icon: icon.content,
        title: 'Content Creation',
        desc: 'We create high-quality, optimized content that aligns with your brand’s voice and E-E-A-T principles.'
      },
      {
        icon: icon.link,
        title: 'Link Building',
        desc: 'We build authoritative backlinks through white-hat outreach and partnerships.'
      },
      {
        icon: icon.tracking,
        title: 'Performance Tracking',
        desc: 'We monitor rankings, traffic, and conversions with detailed monthly reports.'
      }
    ].map((step, index) => (
      <div
        key={index}
        className="timeline-step"
        style={{
          position: 'relative',
          width: '250px',
          padding: '1.5rem',
          backgroundColor: '#f4f8ff',
          borderRadius: '12px',
          textAlign: 'center',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          cursor: 'pointer'
        }}
       onMouseEnter={e => {
  const tooltip = e.currentTarget.querySelector('.tooltip');
  if (tooltip) {
    tooltip.style.opacity = '1';
    tooltip.style.visibility = 'visible';
  }
}}
onMouseLeave={e => {
  const tooltip = e.currentTarget.querySelector('.tooltip');
  if (tooltip) {
    tooltip.style.opacity = '0';
    tooltip.style.visibility = 'hidden';
  }
}}

      >
        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{step.icon}</div>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#003366' }}>{step.title}</h3>

        {/* Tooltip Description */}
        <div
          className="tooltip"
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '260px',
            padding: '0.75rem',
            backgroundColor: '#002244',
            color: '#fff',
            borderRadius: '8px',
            fontSize: '0.9rem',
            textAlign: 'left',
            visibility: 'hidden',
            opacity: 0,
            transition: 'opacity 0.3s ease, visibility 0.3s ease',
            zIndex: 10
          }}
        >
          {step.desc}
        </div>
      </div>
    ))}
  </div>
</section>


       <section
  className="section container-fluid about-company animate__animated animate__fadeInUp"
  style={{
    padding: '4rem 1.5rem',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    maxWidth: '100%',
    margin: '0 auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  }}
  aria-labelledby="about-title"
>
  <header>
    <h2
      id="about-title"
      style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#002244',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        marginBottom: '1rem'
      }}
    >
      <span aria-hidden="true" style={{ fontSize: '2.5rem' }}>{icon.happy}</span>
     Tarkashot.com: The #1 Best SEO Company in Delhi
    </h2>
    <p style={{ fontSize: '1.15rem', color: '#444', maxWidth: '800px', margin: '0 auto 2rem' }}>
      At <strong>Tarkashot.com</strong>, we help businesses of all sizes grow sustainably through Google-compliant SEO strategies.
      As a trusted digital partner, our team brings years of proven success across <strong>local SEO, national SEO, and enterprise SEO solutions</strong>.
    </p>
  </header>

  <div
    className="about-highlights container-fluid"
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1.5rem',
      marginTop: '1.5rem'
    }}
  >
    {[
      {
        title: 'Proven SEO Experience',
        desc: 'We have consistently ranked competitive keywords and delivered results for high-stakes YMYL niches.'
      },
      {
        title: 'E-E-A-T Focused Strategies',
        desc: 'We prioritize trust, content quality, and authoritativeness—aligned with Google’s E-E-A-T standards.'
      },
      {
        title: 'Client-Centric Approach',
        desc: 'We build lasting partnerships by understanding your goals, KPIs, and delivering personalized campaigns.'
      },
      {
        title: 'Transparent Work & Reporting',
        desc: 'Every action we take is documented. You receive full visibility through detailed monthly reporting.'
      }
    ].map((item, i) => (
      <div
        key={i}
        className="about-box"
        style={{
          backgroundColor: '#ffffff',
          padding: '1.75rem',
          borderRadius: '10px',
          width: '260px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'default',
          textAlign: 'left'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.06)';
        }}
      >
        <h3 style={{ fontSize: '1.15rem', fontWeight: '600', color: '#002244' }}>{item.title}</h3>
        <p style={{ fontSize: '0.95rem', color: '#555', marginTop: '0.5rem' }}>{item.desc}</p>
      </div>
    ))}
  </div>

  {/* Optional CTA */}
  <div style={{ marginTop: '2.5rem' }}>
    <a
      href="/contact"
      style={{
        padding: '0.8rem 1.6rem',
        backgroundColor: '#003366',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: '600',
        fontSize: '1rem',
        transition: 'background 0.3s ease'
      }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#002244')}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#003366')}
    >
      Book Your Free SEO Consultation
    </a>
  </div>
</section>


         <section
  className="section container-fluid benefits animate__animated animate__fadeInUp"
  style={{
    padding: '4rem 1.5rem',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    maxWidth: '100%',
    margin: '0 auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  }}
  aria-labelledby="benefits-title"
>
  <header>
    <h2
      id="benefits-title"
      style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#002244',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        marginBottom: '1rem'
      }}
    >
      <span aria-hidden="true" style={{ fontSize: '2.5rem' }}>{icon.support}</span>
      Why Choose Tarkashot for SEO Services?
    </h2>
    <p style={{ fontSize: '1.15rem', color: '#444', maxWidth: '800px', margin: '0 auto 2rem' }}>
      Our SEO solutions are designed to drive results, improve visibility, and align with the latest Google algorithm updates — all while keeping your business goals at the center.
    </p>
  </header>

  <div
    className="benefit-cards container-fluid"
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1.5rem'
    }}
  >
    {[
      {
        icon: icon.visibility,
        title: 'Improved Online Visibility',
        desc: 'Rank higher on search engines and reach your target audience at the right moment.'
      },
      {
        icon: icon.traffic,
        title: 'Increased Traffic & Leads',
        desc: 'Our SEO campaigns are built to drive qualified traffic that converts into leads and customers.'
      },
      {
        icon: icon.result,
        title: 'Trackable, Measurable Results',
        desc: 'With real-time analytics and monthly reports, you know exactly how SEO is impacting your business.'
      },
      {
        icon: icon.expert,
        title: 'Expert Support & Guidance',
        desc: 'Our SEO specialists bring years of hands-on experience across industries and platforms.'
      }
    ].map((benefit, i) => (
      <div
        key={i}
        className="benefit-card"
        style={{
          backgroundColor: '#f5f9ff',
          padding: '2rem',
          borderRadius: '12px',
          width: '250px',
          textAlign: 'left',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-6px)';
          e.currentTarget.style.boxShadow = '0 8px 18px rgba(0,0,0,0.1)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
        }}
      >
        <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{benefit.icon}</div>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#002244' }}>{benefit.title}</h3>
        <p style={{ fontSize: '0.95rem', color: '#555', marginTop: '0.5rem' }}>{benefit.desc}</p>
      </div>
    ))}
  </div>

  {/* CTA */}
  <div style={{ marginTop: '2.5rem' }}>
    <a
      href="/contact"
      style={{
        padding: '0.8rem 1.6rem',
        backgroundColor: '#003366',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: '600',
        fontSize: '1rem',
        transition: 'background 0.3s ease'
      }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#002244')}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#003366')}
    >
      Get a Free SEO Strategy Session
    </a>
  </div>
</section>


       <section
  className="section container-fluid client-results animate__animated animate__fadeInUp"
  style={{
    padding: '4rem 1.5rem',
    backgroundColor: '#f4faff',
    textAlign: 'center',
    maxWidth: '100%',
    margin: '0 auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  }}
  aria-labelledby="client-results-title"
>
  <header>
    <h2
      id="client-results-title"
      style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#002244',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        marginBottom: '1rem'
      }}
    >
      <span aria-hidden="true" style={{ fontSize: '2.5rem' }}>{icon.tracking}</span>
      Results We Achieved for Our Clients
    </h2>
    <p style={{ fontSize: '1.15rem', color: '#444', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
      See the real SEO impact we've created — from exponential traffic growth to top-ranking keywords in competitive industries.
    </p>
  </header>

  <div
    className="results-table container-fluid"
    style={{
      overflowX: 'auto',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 18px rgba(0,0,0,0.06)',
      margin: '0 auto',
      maxWidth: '1000px'
    }}
  >
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '1rem',
        textAlign: 'left',
        minWidth: '600px'
      }}
    >
      <thead style={{ backgroundColor: '#003366', color: '#fff' }}>
        <tr>
          <th style={{ padding: '1rem' }}>Client</th>
          <th style={{ padding: '1rem' }}>Traffic Growth</th>
          <th style={{ padding: '1rem' }}>Top Ranking Keywords</th>
          <th style={{ padding: '1rem' }}>Conversion Increase</th>
          <th style={{ padding: '1rem' }}>SEO Duration</th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            client: "Healthcare SaaS",
            traffic: "↑ 300% in 6 months",
            keywords: "120+ keywords in Top 10",
            conversions: "↑ 70%",
            duration: "6 months"
          },
          {
            client: "E-commerce (Apparel)",
            traffic: "↑ 450% YoY",
            keywords: "200+ in Top 5",
            conversions: "↑ 85%",
            duration: "12 months"
          },
          {
            client: "Local Law Firm",
            traffic: "↑ 180% local search traffic",
            keywords: "30+ in Google 3-Pack",
            conversions: "↑ 60%",
            duration: "4 months"
          },
          {
            client: "Tech Startup (SaaS)",
            traffic: "↑ 260% in organic",
            keywords: "90+ B2B keywords in Top 10",
            conversions: "↑ 90%",
            duration: "8 months"
          }
        ].map((item, index) => (
          <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '1rem', fontWeight: '600', color: '#002244' }}>{item.client}</td>
            <td style={{ padding: '1rem', color: '#007c00' }}>{item.traffic} ✅</td>
            <td style={{ padding: '1rem', color: '#444' }}>{item.keywords} ✅</td>
            <td style={{ padding: '1rem', color: '#007c00' }}>{item.conversions} ✅</td>
            <td style={{ padding: '1rem', color: '#003366' }}>{item.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Optional CTA */}
  <div style={{ marginTop: '2.5rem' }}>
    <a
      href="/case-studies"
      style={{
        padding: '0.8rem 1.6rem',
        backgroundColor: '#003366',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: '600',
        fontSize: '1rem',
        transition: 'background 0.3s ease'
      }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#001f3f')}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#003366')}
    >
      Explore Our SEO Case Studies
    </a>
  </div>
</section>




          <section
  className="section faq-section animate__animated animate__fadeInUp"
  style={{
    padding: '4rem 1.5rem',
    backgroundColor: '#ffffff',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  }}
  aria-labelledby="faq-title"
>
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '2rem'
    }}
  >
    {/* Left: FAQ Content */}
    <div style={{ flex: '1 1 600px' }}>
      <h2
        id="faq-title"
        style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#002244',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <span style={{ fontSize: '2.5rem' }}>{icon.faq}</span> Frequently Asked Questions
      </h2>

      {[
        {
          question: 'What is SEO and how does it help my business?',
          answer:
            'SEO (Search Engine Optimization) improves your website’s visibility on Google by optimizing technical structure, content quality, and backlinks. It helps attract more traffic, build authority, and drive conversions.'
        },
        {
          question: 'How long does SEO take to show measurable results?',
          answer:
            'Generally, you can expect noticeable results in 3–6 months. However, factors like competition, domain age, and website condition can affect timelines.'
        },
        {
          question: 'What types of businesses do you provide SEO for?',
          answer:
            'Tarkashot.com offers SEO services for local businesses, e-commerce stores, tech startups, healthcare, education, and many more industries across India and globally.'
        },
        {
          question: 'Is SEO better than paid ads?',
          answer:
            'SEO provides long-term, compounding ROI and brand authority, while paid ads offer short-term bursts. The best strategy often combines both.'
        },
        {
          question: 'Do you offer white-label SEO services?',
          answer:
            'Yes, we partner with agencies to deliver private-label SEO solutions with full transparency and reporting.'
        }
      ].map((faq, index) => (
        <details
          key={index}
          style={{
            background: '#f7faff',
            padding: '1rem 1.25rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}
        >
          <summary
            style={{
              fontWeight: '600',
              fontSize: '1.1rem',
              color: '#002244',
              marginBottom: '0.5rem',
              outline: 'none'
            }}
          >
            {faq.question}
          </summary>
          <p style={{ fontSize: '0.95rem', color: '#555', marginTop: '0.5rem' }}>{faq.answer}</p>
        </details>
      ))}
    </div>

    {/* Right: FAQ Image */}
    <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
      <img
        src="/faq.webp"
        alt="Frequently Asked Questions - Tarkashot SEO"
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
        loading="lazy"
      />
    </div>
  </div>
</section>


        <section
  className="section container-fluid location animate__animated animate__fadeInUp"
  style={{
    padding: '4rem 1.5rem',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    maxWidth: '100%',
    margin: '0 auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  }}
  aria-labelledby="location-title"
>
  <header>
    <h2
      id="location-title"
      style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#002244',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        marginBottom: '1rem'
      }}
    >
      <span style={{ fontSize: '2.5rem' }}>{icon.office}</span> Contact Our SEO Experts in Delhi NCR
    </h2>
    <p style={{ fontSize: '1.15rem', color: '#444', maxWidth: '800px', margin: '0 auto 2rem' }}>
      Whether you're a local business in Delhi, Noida, Gurgaon, or Ghaziabad, our SEO experts are ready to help you grow your search visibility and drive conversions.
    </p>
  </header>

  {/* Contact Info + Map Grid */}
  <div
    className="contact-grid"
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '2rem',
      marginTop: '2rem'
    }}
  >
    {/* Left: Contact Details */}
    <div style={{ flex: '1 1 450px', textAlign: 'left' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#003366' }}>
        📍 Office Location
      </h3>
      <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
        <strong>Tarkashot Digital Solutions</strong><br />
        A-45, Sector 63, Noida, Uttar Pradesh 201301
      </p>
      <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
        📞 <a href="tel:+918800990012" style={{ color: '#003366', textDecoration: 'none' }}>+91 88009 90012</a>
      </p>
      <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
        ✉️ <a href="mailto:hello@tarkashot.com" style={{ color: '#003366', textDecoration: 'none' }}>hello@tarkashot.com</a>
      </p>

      <a
        href="/contact"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#003366',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '600',
          fontSize: '1rem',
          transition: 'background 0.3s ease'
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#001f3f')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#003366')}
      >
        Schedule Free Consultation
      </a>
    </div>

    {/* Right: Google Map Embed */}
    <div style={{ flex: '1 1 500px' }}>
      <iframe
        title="Tarkashot Office Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14004.123456789!2d77.3865!3d28.6271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce58d71a7d6b1%3A0x123456789abcdef!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v0000000000000"
        width="100%"
        height="300"
        style={{
          border: '0',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

{/* CONTACT FORM SECTION */}
<section
  className="section contact-form animate__animated animate__fadeInUp"
  style={{
    backgroundColor: 'white',
    color: '#fff',
    textAlign: 'center',
    padding: '4rem 1.5rem',
    maxWidth: '100%',
    margin: '0 auto',
    borderRadius: '10px'
  }}
  aria-labelledby="cta-contact-title"
>
  <h3
    id="cta-contact-title"
    style={{
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem'
    }}
  >
    {icon.expert} Ready to Elevate Your Delhi Business with SEO?
  </h3>
  <p
    style={{
      fontSize: '1.1rem',
      maxWidth: '100%',
      margin: '0 auto 2rem',
      lineHeight: '1.6'
    }}
  >
    Let Tarkashot's SEO experts craft a tailored strategy to help your brand dominate search engines, boost ROI, and build online trust.
  </p>
  <a
    href="/contact"
    style={{
      backgroundColor: '#fff',
      color: '#003366',
      padding: '0.75rem 1.5rem',
      borderRadius: '8px',
      fontWeight: '600',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '1rem',
      transition: 'background 0.3s ease, color 0.3s ease'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.backgroundColor = '#005299';
      e.currentTarget.style.color = '#fff';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.backgroundColor = '#fff';
      e.currentTarget.style.color = '#003366';
    }}
  >
    {icon.phone} Request a Free SEO Audit
  </a>
</section>

{/* INTERNAL LINKS FOOTER */}
<footer
  className="section internal-links"
  style={{
    padding: '2rem 1.5rem',
    backgroundColor: 'white',
    textAlign: 'center',
    marginTop: '2rem'
  }}
>
  <p style={{ fontSize: '1rem', color: '#444' }}>
    <strong>Explore More:</strong>
    <a
      href="/local-seo-delhi"
      style={{
        margin: '0 0.75rem',
        color: '#003366',
        textDecoration: 'underline',
        fontWeight: '500'
      }}
    >
      {icon.local} Local SEO Delhi
    </a>
    |
    <a
      href="/seo-packages"
      style={{
        margin: '0 0.75rem',
        color: '#003366',
        textDecoration: 'underline',
        fontWeight: '500'
      }}
    >
      {icon.package} Affordable SEO Packages
    </a>
  </p>
</footer>

        </main>
      </div>
    </>
  );
};

export default Home;
