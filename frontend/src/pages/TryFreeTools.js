import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const benefits = [
  "Access a wide range of free SEO and digital marketing tools in one place.",
  "Improve your website's search engine rankings with our expert tools.",
  "Save time and effort with easy-to-use, fast-loading tools.",
  "Get actionable insights to optimize your online presence.",
  "Enhance your content marketing and backlink strategies.",
  "Ensure your website is mobile-friendly and technically sound."
];

const faqs = [
  {
    question: "Are these SEO tools really free to use?",
    answer: "Yes, all the tools listed on this page are completely free to use without any hidden charges."
  },
  {
    question: "Do I need to create an account to use the tools?",
    answer: "No account is required. You can use all the tools instantly without signing up."
  },
  {
    question: "Can these tools help improve my website ranking?",
    answer: "Absolutely! These tools are designed to help you analyze, optimize, and improve your website's SEO performance."
  },
  {
    question: "Is the data from these tools accurate and reliable?",
    answer: "We strive to provide accurate and up-to-date data, but SEO results can vary based on many factors."
  },
  {
    question: "How often are the tools updated?",
    answer: "We regularly update our tools to ensure compatibility with the latest SEO best practices and search engine algorithms."
  }
];

const TryFreeTools = () => {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/try-free-tools/list')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch tools list');
        }
        return response.json();
      })
      .then(data => {
        setTools(data.tools);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <SEO
        title="Free SEO Tools - Comprehensive Digital Marketing Tools | Try Free Tools"
        description="Explore our free SEO tools to improve your website ranking, analyze SEO health, generate backlinks, and more. Fast, reliable, and easy to use."
        keywords="free SEO tools, digital marketing tools, backlink generator, SEO audit, sitemap tool, image compressor, YouTube tag generator"
        canonical="https://tarkashot.com/try-free-tools"
        robots="index, follow"
      >
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Try Free SEO Tools",
              "description": "Access a wide range of free SEO and digital marketing tools to optimize your website and improve search engine rankings."
            }
          `}
        </script>
      </SEO>
      <div className="try-free-tools-page" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {/* Hero Section */}
        <section style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1>Try Free SEO and Digital Marketing Tools</h1>
          <p style={{ fontSize: '1.2rem', color: '#555' }}>
            Discover our powerful suite of free SEO and digital marketing tools designed to help you boost your website's performance, increase traffic, and grow your online presence.
          </p>
        </section>

        {/* Comparison Table Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2>Comparison of Our Free SEO Tools</h2>
          {loading && <p>Loading tools...</p>}
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          {!loading && !error && (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Tool Name</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Description</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Link</th>
                </tr>
              </thead>
              <tbody>
                {tools.map(tool => {
                  let path = '';
                  let description = '';
                  switch (tool) {
                    case 'Bulk URL Redirection Tool':
                      path = '/BulkUrlRedirectionTool';
                      description = 'Manage multiple URL redirections easily to maintain SEO value.';
                      break;
                    case 'Google Index Checker':
                      path = '/GoogleIndexChecker';
                      description = 'Check if your website pages are indexed by Google quickly and easily.';
                      break;
                    case 'YouTube Transcript Tool':
                      path = '/YouTubeTranscriptTool';
                      description = 'Generate transcripts for YouTube videos to improve accessibility and SEO.';
                      break;
                    case 'Bulk Anchor Text Generators':
                      path = '/BulkAnchorTextGenerators';
                      description = 'Create bulk anchor texts for SEO campaigns efficiently.';
                      break;
                    case 'YouTube Tag Generator':
                      path = '/YouTubeTagGenerator';
                      description = 'Generate effective tags for your YouTube videos to increase visibility.';
                      break;
                    case 'WhatsApp Chat Link':
                      path = '/WhatsAppChatLink';
                      description = 'Create WhatsApp chat links to connect with your customers instantly.';
                      break;
                    case 'Comma Separator Tool':
                      path = '/CommaSeparatorTool';
                      description = 'Convert lists into comma-separated values for SEO and marketing use.';
                      break;
                    case 'YouTube Video Tags Extractor':
                      path = '/YouTubeVideoTagsExtractor';
                      description = 'Extract tags from any YouTube video for SEO research.';
                      break;
                    case 'URL Domain Extractor':
                      path = '/UrlDomainExtractor';
                      description = 'Extract domain names from URLs for backlink and SEO analysis.';
                      break;
                    case 'Backlink Generator Tool':
                      path = '/BacklinkGeneratorTool';
                      description = 'Generate high-quality backlinks to boost your website authority.';
                      break;
                    case 'Image Compressor':
                      path = '/ImageCompressor';
                      description = 'Compress images to reduce file size without losing quality for faster website loading.';
                      break;
                    case 'About Us Page Generator':
                      path = '/AboutUsPageGenerator';
                      description = 'Create professional About Us pages to enhance your website credibility.';
                      break;
                    case 'Mobile-Friendly Tester Tool':
                      path = '/MobileFriendlyTesterTool';
                      description = 'Test if your website is mobile-friendly and responsive.';
                      break;
                    case 'Canonical Tag Generator':
                      path = '/CanonicalTagGenerator';
                      description = 'Generate canonical tags to avoid duplicate content issues.';
                      break;
                    case 'Free SEO Audit':
                      path = '/SeoAudit';
                      description = 'Analyze your website SEO health and get actionable insights to improve rankings.';
                      break;
                    default:
                      path = '/TryFreeTools';
                      description = 'Explore this useful SEO tool.';
                  }
                  return (
                    <tr key={tool}>
                      <td style={{ border: '1px solid #ddd', padding: '8px' }}>{tool}</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px' }}>{description}</td>
                      <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                        <Link to={path}>Try Now</Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </section>

        {/* Benefits Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2>Benefits of Using Our Free SEO Tools</h2>
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>{benefit}</li>
            ))}
          </ul>
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>

        {/* Call to Action Section */}
        <section style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2>Get Started with Our Free SEO Tools Today!</h2>
          <p>Boost your website’s SEO performance and grow your online presence with our easy-to-use, free digital marketing tools.</p>
          <Link to="/Contact" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#007bff', color: '#fff', borderRadius: '4px', textDecoration: 'none' }}>
            Contact Us for More Information
          </Link>
        </section>
      </div>
    </>
  );
};

export default TryFreeTools;
