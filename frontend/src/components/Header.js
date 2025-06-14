import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create this CSS file for styles

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  
  const [videoDownloaderOpen, setVideoDownloaderOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">🌐 Website Sitemap</Link>
        </div>
        <button className="menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              {/* <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
              <li><Link to="/about" onClick={toggleMobileMenu}>About Us</Link></li> */}

              <li className="dropdown">
                <button onClick={() => toggleDropdown('seoServices')}>
                  SEO Services ▾
                </button>
                {openDropdown === 'seoServices' && (
                  <ul className="dropdown-menu">
                    <li><Link to="/seo-services-delhi">SEO Services in Delhi</Link></li>
                    <li><Link to="/seo-services-rohini">SEO Services in Rohini</Link></li>
                    <li><Link to="/seo-services-noida">SEO Services in Noida</Link></li>
                    <li><Link to="/seo-services-laxmi-nagar">SEO Services in Laxmi Nagar</Link></li>
                    <li><Link to="/seo-company-janakpuri">SEO Company in Janakpuri</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/seo-audit" onClick={toggleMobileMenu}>Free SEO Audit</Link>
              </li>

            <li className="dropdown">
              <button onClick={() => toggleDropdown('categories')}>
                Categories ▾
              </button>
              {openDropdown === 'categories' && (
                <ul className="dropdown-menu">
                  <li><Link to="/seo-guides">SEO Guides</Link></li>
                  <li><Link to="/digital-marketing">Digital Marketing</Link></li>
                  <li><Link to="/career-guidance">Career Guidance</Link></li>
                  <li><Link to="/google-core-updates">Google Core Updates</Link></li>
                </ul>
              )}
            </li>

            <li className="dropdown">
              <button onClick={() => toggleDropdown('resources')}>
                Resources ▾
              </button>
              {openDropdown === 'resources' && (
                <ul className="dropdown-menu">
                  <li><Link to="/try-free-tools">Try Free Tools</Link></li>
                  <li><Link to="/bulk-url-redirection-tool">Bulk URL Redirection Tool</Link></li>
                  <li><Link to="/google-index-checker">Google Index Checker</Link></li>
                  <li><Link to="/youtube-transcript-tool">YouTube Transcript Tool</Link></li>
                  <li><Link to="/bulk-anchor-text-generators">Bulk Anchor Text Generators</Link></li>
                  <li><Link to="/youtube-tag-generator">YouTube Tag Generator</Link></li>
                  <li><Link to="/whatsapp-chat-link">WhatsApp Chat Link</Link></li>
                  <li><Link to="/comma-separator-tool">Comma Separator Tool</Link></li>
                  <li><Link to="/youtube-video-tags-extractor">Video Tags Extractor</Link></li>
                  <li><Link to="/url-domain-extractor">URL Domain Extractor</Link></li>
                  <li><Link to="/backlink-generator-tool">Backlink Generator Tool</Link></li>
                  <li><Link to="/image-compressor">Image Compressor</Link></li>
                  <li><Link to="/about-us-page-generator">About Us Generator</Link></li>
                  <li><Link to="/mobile-friendly-tester-tool">Mobile-Friendly Tester</Link></li>
                  <li><Link to="/canonical-tag-generator">Canonical Tag Generator</Link></li>
                </ul>
              )}
            </li>

            <li className="dropdown">
              <button onClick={() => toggleDropdown('quickLinks')}>
                Quick Links ▾
              </button>
              {openDropdown === 'quickLinks' && (
                <ul className="dropdown-menu">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/contact-me">Contact Me</Link></li>
                  <li><Link to="/disclaimer">Disclaimer</Link></li>
                  <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
                  <li><Link to="/write-for-us">Write For Us</Link></li>
                  <li><Link to="/sitemap">Sitemap</Link></li>
                 
                </ul>
              )}
            </li>
             <li className="dropdown">
              <button onClick={() => toggleDropdown('videoDownloader')}>
                Video Downloader ▾
              </button>
              {openDropdown === 'videoDownloader' && (
                <ul className="dropdown-menu">
                   <li><Link to="/YouTubeShortsDownloader" onClick={toggleMobileMenu}>YouTube shorts </Link></li>
            <li><Link to="/InstagramReelDownloader" onClick={toggleMobileMenu}>Instagram reels download</Link></li>
            <li><Link to="/PinterestDownloader" onClick={toggleMobileMenu}>Pinterest video downloader</Link></li>
        
                 
                </ul>
              )}
            </li>

            <li><Link to="/sitemap-tool" onClick={toggleMobileMenu}>Sitemap Tool</Link></li>
            </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
