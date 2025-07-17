import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Header.css";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <Helmet>
        <title>Tarkashot - SEO Services & Tools</title>
        <meta
          name="description"
          content="Tarkashot offers top SEO services and free SEO tools to boost your online presence and search rankings."
        />
        <link rel="canonical" href="https://tarkashot.com/" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="logo">
            <Link to="/" onClick={handleLinkClick}>
              🌐 Website Sitemap
            </Link>
          </div>

          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>

          <nav className={`nav ${mobileMenuOpen ? "open" : ""}`}>
            <ul className="nav-list">
              <li className="dropdown">
                <button
                  className="dropdown-toggle"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === "seoServices"}
                  onClick={() => toggleDropdown("seoServices")}
                >
                  SEO Services ▾
                </button>
                {openDropdown === "seoServices" && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/seo-services-delhi" onClick={handleLinkClick}>
                        SEO Services in Delhi
                      </Link>
                    </li>
                    <li>
                      <Link to="/seo-services-rohini" onClick={handleLinkClick}>
                        SEO Services in Rohini
                      </Link>
                    </li>
                    <li>
                      <Link to="/seo-services-noida" onClick={handleLinkClick}>
                        SEO Services in Noida
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/seo-services-laxmi-nagar"
                        onClick={handleLinkClick}
                      >
                        SEO Services in Laxmi Nagar
                      </Link>
                    </li>
                    <li>
                      <Link to="/seo-company-janakpuri" onClick={handleLinkClick}>
                        SEO Company in Janakpuri
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link to="/seo-audit" onClick={handleLinkClick}>
                  Free SEO Audit
                </Link>
              </li>

              <li className="dropdown">
                <button
                  className="dropdown-toggle"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === "categories"}
                  onClick={() => toggleDropdown("categories")}
                >
                  Categories ▾
                </button>
                {openDropdown === "categories" && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/seo-guides" onClick={handleLinkClick}>
                        SEO Guides
                      </Link>
                    </li>
                    <li>
                      <Link to="/digital-marketing" onClick={handleLinkClick}>
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link to="/career-guidance" onClick={handleLinkClick}>
                        Career Guidance
                      </Link>
                    </li>
                    <li>
                      <Link to="/google-core-updates" onClick={handleLinkClick}>
                        Google Core Updates
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="dropdown">
                <button
                  className="dropdown-toggle"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === "resources"}
                  onClick={() => toggleDropdown("resources")}
                >
                  Resources ▾
                </button>
                {openDropdown === "resources" && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/try-free-tools" onClick={handleLinkClick}>
                        Try Free Tools
                      </Link>
                    </li>
                    <li>
                      <Link to="/bulk-url-redirection-tool" onClick={handleLinkClick}>
                        Bulk URL Redirection Tool
                      </Link>
                    </li>
                    <li>
                      <Link to="/google-index-checker" onClick={handleLinkClick}>
                        Google Index Checker
                      </Link>
                    </li>
                    <li>
                      <Link to="/youtube-transcript-tool" onClick={handleLinkClick}>
                        YouTube Transcript Tool
                      </Link>
                    </li>
                    <li>
                      <Link to="/bulk-anchor-text-generators" onClick={handleLinkClick}>
                        Bulk Anchor Text Generators
                      </Link>
                    </li>
                    <li>
                      <Link to="/youtube-tag-generator" onClick={handleLinkClick}>
                        YouTube Tag Generator
                      </Link>
                    </li>
                    <li>
                      <Link to="/whatsapp-chat-link" onClick={handleLinkClick}>
                        WhatsApp Chat Link
                      </Link>
                    </li>
                    <li>
                      <Link to="/comma-separator-tool" onClick={handleLinkClick}>
                        Comma Separator Tool
                      </Link>
                    </li>
                    <li>
                      <Link to="/youtube-video-tags-extractor" onClick={handleLinkClick}>
                        Video Tags Extractor
                      </Link>
                    </li>
                    <li>
                      <Link to="/url-domain-extractor" onClick={handleLinkClick}>
                        URL Domain Extractor
                      </Link>
                    </li>
                    <li>
                      <Link to="/backlink-generator-tool" onClick={handleLinkClick}>
                        Backlink Generator Tool
                      </Link>
                    </li>
                    <li>
                      <Link to="/image-compressor" onClick={handleLinkClick}>
                        Image Compressor
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us-page-generator" onClick={handleLinkClick}>
                        About Us Generator
                      </Link>
                    </li>
                    <li>
                      <Link to="/mobile-friendly-tester-tool" onClick={handleLinkClick}>
                        Mobile-Friendly Tester
                      </Link>
                    </li>
                    <li>
                      <Link to="/canonical-tag-generator" onClick={handleLinkClick}>
                        Canonical Tag Generator
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="dropdown">
                <button
                  className="dropdown-toggle"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === "quickLinks"}
                  onClick={() => toggleDropdown("quickLinks")}
                >
                  Quick Links ▾
                </button>
                {openDropdown === "quickLinks" && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/" onClick={handleLinkClick}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact-me" onClick={handleLinkClick}>
                        Contact Me
                      </Link>
                    </li>
                    <li>
                      <Link to="/disclaimer" onClick={handleLinkClick}>
                        Disclaimer
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms-and-conditions" onClick={handleLinkClick}>
                        Terms and Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/write-for-us" onClick={handleLinkClick}>
                        Write For Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/sitemap" onClick={handleLinkClick}>
                        Sitemap
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="dropdown">
                <button
                  className="dropdown-toggle"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === "videoDownloader"}
                  onClick={() => toggleDropdown("videoDownloader")}
                >
                  Video Downloader ▾
                </button>
                {openDropdown === "videoDownloader" && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/YouTubeShortsDownloader" onClick={handleLinkClick}>
                        YouTube shorts
                      </Link>
                    </li>
                    <li>
                      <Link to="/InstagramReelDownloader" onClick={handleLinkClick}>
                        Instagram reels download
                      </Link>
                    </li>
                    <li>
                      <Link to="/PinterestDownloader" onClick={handleLinkClick}>
                        Pinterest video downloader
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link to="/viral-prompts" onClick={handleLinkClick}>
                  Viral Prompts
                </Link>
              </li>
              <li>
                <Link to="/sitemap-tool" onClick={handleLinkClick}>
                  Sitemap Tool
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
