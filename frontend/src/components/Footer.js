import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    {
      title: 'SEO Services',
      links: [
        { label: 'SEO Services in Delhi', to: '/seo-services-delhi' },
        { label: 'SEO Services in Rohini', to: '/seo-services-rohini' },
        { label: 'SEO Services in Noida', to: '/seo-services-noida' },
        { label: 'SEO Services in Laxmi Nagar', to: '/seo-services-laxmi-nagar' },
        { label: 'SEO Company in Janakpuri', to: '/seo-company-janakpuri' },
      ],
    },
    {
      title: 'Categories',
      links: [
        { label: 'SEO Guides', to: '/seo-guides' },
        { label: 'Digital Marketing', to: '/digital-marketing' },
        { label: 'Career Guidance', to: '/career-guidance' },
        { label: 'Google Core Updates', to: '/google-core-updates' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Try free Tools', to: '/try-free-tools' },
        { label: 'Bulk URL Redirection Tool', to: '/bulk-url-redirection-tool' },
        { label: 'Google Index Checker', to: '/google-index-checker' },
        { label: 'YouTube Transcript Tool', to: '/youtube-transcript-tool' },
        { label: 'Bulk Anchor Text Generators', to: '/bulk-anchor-text-generators' },
        { label: 'YouTube Tag Generator', to: '/youtube-tag-generator' },
        { label: 'WhatsApp Chat Link', to: '/whatsapp-chat-link' },
        { label: 'Comma Separator Tool', to: '/comma-separator-tool' },
        { label: 'YouTube Video Tags Extractor', to: '/youtube-video-tags-extractor' },
        { label: 'URL Domain Extractor', to: '/url-domain-extractor' },
        { label: 'Backlink Generator Tool', to: '/backlink-generator-tool' },
        { label: 'Image Compressor', to: '/image-compressor' },
        { label: 'About Us Page Generator', to: '/about-us-page-generator' },
        { label: 'Mobile-Friendly Tester Tool', to: '/mobile-friendly-tester-tool' },
        { label: 'Canonical Tag Generator', to: '/canonical-tag-generator' },
        { label: 'Free SEO Audit', to: '/seo-audit' },
      ],
    },
      {
      title: 'Quick Links',
      links: [
        { label: 'Home', to: '/' },
        { label: 'Contact me', to: '/contact-me' },
        { label: 'Disclaimer', to: '/disclaimer' },
        { label: 'Terms and Conditions', to: '/terms-and-conditions' },
        { label: 'Write For Us', to: '/write-for-us' },
        { label: 'Sitemap', to: '/sitemap' },
        { label: 'Viral Prompts', to: '/viral-prompts' },
      ],
    },
    {
      title: 'Ad Post Sites',
      links: [
        { label: 'Ad Post Sites', to: '/ad-post-sites' },
        { label: 'Social Bookmarking Sites', to: '/social-bookmarking-sites' },
        { label: 'Guest Post Sites', to: '/guest-post-sites' },
        { label: 'Article Submission Sites', to: '/article-submission-sites' },
        { label: 'Directory Submission Sites', to: '/directory-submission-sites' },
        { label: 'Image Submission Sites', to: '/image-submission-sites' },
        { label: 'Video Submission Sites', to: '/video-submission-sites' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">🌐 Website Sitemap</div>
        <div className="footer-links">
          {footerLinks.map((section) => (
            <div className="footer-column" key={section.title}>
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>©2025 SEO Shades. All rights reserved.</p>
          <p>
            <Link to="/disclaimer" className="footer-link">Disclaimer</Link> |{' '}
            <Link to="/terms-and-conditions" className="footer-link">Terms & Conditions</Link> |{' '}
            <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
