import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SitemapTool from './pages/SitemapTool';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <AboutUs />;
      case 'sitemap':
        return <SitemapTool />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header onNavigate={setCurrentPage} />
      {renderPage()}
      <footer className="App-footer">
        <div className="footer-logo">🌐 Website Sitemap</div>
        <div className="footer-sections">
          <div className="footer-section">
            <h4>SEO Services</h4>
            <ul>
              <li><a href="#">SEO Services in Delhi</a></li>
              <li><a href="#">SEO Services in Rohini</a></li>
              <li><a href="#">SEO Services in Noida</a></li>
              <li><a href="#">SEO Services in Laxmi Nagar</a></li>
              <li><a href="#">SEO Company in Janakpuri</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><a href="#">SEO Guides</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Career Guidance</a></li>
              <li><a href="#">Google Core Updates</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
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
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Contact me</a></li>
              <li><a href="#">Disclaimer</a></li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Write For Us</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-legal">
          <p>©2022 SEO Shades copyright all rights reserved.</p>
          <p><a href="#">Disclaimer</a> | <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
