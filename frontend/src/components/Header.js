import React, { useState } from 'react';

function Header({ onNavigate }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleNavigate = (page) => {
    setOpenDropdown(null);
    onNavigate(page);
  };

  return (
    <header className="App-header">
      <div className="logo" onClick={() => handleNavigate('home')} style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '24px' }}>
        🌐 Website Sitemap
      </div>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item" onClick={() => handleNavigate('home')}>
            Home
          </li>
          <li className="nav-item" onClick={() => handleNavigate('about')}>
            About Us
          </li>
          <li className="nav-item dropdown" onClick={() => toggleDropdown('seoServices')}>
            SEO Services
            {openDropdown === 'seoServices' && (
              <ul className="dropdown-menu">
                <li><a href="#">SEO Services in Delhi</a></li>
                <li><a href="#">SEO Services in Rohini</a></li>
                <li><a href="#">SEO Services in Noida</a></li>
                <li><a href="#">SEO Services in Laxmi Nagar</a></li>
                <li><a href="#">SEO Company in Janakpuri</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item dropdown" onClick={() => toggleDropdown('categories')}>
            Categories
            {openDropdown === 'categories' && (
              <ul className="dropdown-menu">
                <li><a href="#">SEO Guides</a></li>
                <li><a href="#">Digital Marketing</a></li>
                <li><a href="#">Career Guidance</a></li>
                <li><a href="#">Google Core Updates</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item dropdown" onClick={() => toggleDropdown('resources')}>
            Resources
            {openDropdown === 'resources' && (
              <ul className="dropdown-menu">
                <li><a href="#">Try free Tools</a></li>
                <li><a href="#">Bulk URL Redirection Tool</a></li>
                <li><a href="#">Google Index Checker</a></li>
                <li><a href="#">YouTube Transcript Tool</a></li>
                <li><a href="#">Bulk Anchor Text Generators</a></li>
                <li><a href="#">YouTube Tag Generator</a></li>
                <li><a href="#">WhatsApp Chat Link</a></li>
                <li><a href="#">Comma Separator Tool</a></li>
                <li><a href="#">YouTube Video Tags Extractor</a></li>
                <li><a href="#">URL Domain Extractor</a></li>
                <li><a href="#">Backlink Generator Tool</a></li>
                <li><a href="#">Image Compressor</a></li>
                <li><a href="#">About Us Page Generator</a></li>
                <li><a href="#">Mobile-Friendly Tester Tool</a></li>
                <li><a href="#">Canonical Tag Generator</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item dropdown" onClick={() => toggleDropdown('quickLinks')}>
            Quick Links
            {openDropdown === 'quickLinks' && (
              <ul className="dropdown-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact me</a></li>
                <li><a href="#">Disclaimer</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Write For Us</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item" onClick={() => handleNavigate('sitemap')}>
            Sitemap Tool
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
