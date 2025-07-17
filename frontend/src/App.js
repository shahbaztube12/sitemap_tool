import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SitemapTool from './pages/SitemapTool';
import SeoServicesDelhi from './pages/SeoServicesDelhi';
import SeoServicesRohini from './pages/SeoServicesRohini';
import SeoServicesNoida from './pages/SeoServicesNoida';
import SeoServicesLaxmiNagar from './pages/SeoServicesLaxmiNagar';
import SeoCompanyJanakpuri from './pages/SeoCompanyJanakpuri';
import SeoGuides from './pages/SeoGuides';
import DigitalMarketing from './pages/DigitalMarketing';
import CareerGuidance from './pages/CareerGuidance';
import GoogleCoreUpdates from './pages/GoogleCoreUpdates';
import TryFreeTools from './pages/TryFreeTools';
import BulkUrlRedirectionTool from './pages/BulkUrlRedirectionTool';
import GoogleIndexChecker from './pages/GoogleIndexChecker';
import YouTubeTranscriptTool from './pages/YouTubeTranscriptTool';
import BulkAnchorTextGenerators from './pages/BulkAnchorTextGenerators';
import YouTubeTagGenerator from './pages/YouTubeTagGenerator';
import WhatsAppChatLink from './pages/WhatsAppChatLink';
import CommaSeparatorTool from './pages/CommaSeparatorTool';
import YouTubeVideoTagsExtractor from './pages/YouTubeVideoTagsExtractor';
import UrlDomainExtractor from './pages/UrlDomainExtractor';
import BacklinkGeneratorTool from './pages/BacklinkGeneratorTool';
import ImageCompressor from './pages/ImageCompressor';
import AboutUsPageGenerator from './pages/AboutUsPageGenerator';
import MobileFriendlyTesterTool from './pages/MobileFriendlyTesterTool';
import CanonicalTagGenerator from './pages/CanonicalTagGenerator';
import ContactMe from './pages/ContactMe';
import Disclaimer from './pages/Disclaimer';
import TermsAndConditions from './pages/TermsAndConditions';
import WriteForUs from './pages/WriteForUs';
import Sitemap from './pages/Sitemap';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AdPostPage from './pages/AdPostPage';
import SocialBookmarkingSites from './pages/SocialBookmarkingSites';
import GuestPostSites from './pages/GuestPostSites';
import ArticleSubmissionSites from './pages/ArticleSubmissionSites';
import DirectorySubmissionSites from './pages/DirectorySubmissionSites';
import ImageSubmissionSites from './pages/ImageSubmissionSites';
import VideoSubmissionSites from './pages/VideoSubmissionSites';
import PinterestDownloader from './pages/PinterestDownloader';
import InstagramReelDownloader from './pages/InstagramReelDownloader';
import YouTubeShortsDownloader from './pages/YouTubeShortsDownloader';
import NotFound from './pages/NotFound';
import SeoAudit from './pages/SeoAudit';
import SeoOptimizedPage from './pages/SeoOptimizedPage';
import ViralPrompts from './pages/ViralPrompts';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <Header />
          <div className="fluid-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/sitemap-tool" element={<SitemapTool />} />
              <Route path="/seo-services-delhi" element={<SeoServicesDelhi />} />
              <Route path="/seo-services-rohini" element={<SeoServicesRohini />} />
              <Route path="/seo-services-noida" element={<SeoServicesNoida />} />
              <Route path="/seo-services-laxmi-nagar" element={<SeoServicesLaxmiNagar />} />
              <Route path="/seo-company-janakpuri" element={<SeoCompanyJanakpuri />} />
              <Route path="/seo-guides" element={<SeoGuides />} />
              <Route path="/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/career-guidance" element={<CareerGuidance />} />
              <Route path="/google-core-updates" element={<GoogleCoreUpdates />} />
              <Route path="/try-free-tools" element={<TryFreeTools />} />
              <Route path="/bulk-url-redirection-tool" element={<BulkUrlRedirectionTool />} />
              <Route path="/google-index-checker" element={<GoogleIndexChecker />} />
              <Route path="/youtube-transcript-tool" element={<YouTubeTranscriptTool />} />
              <Route path="/bulk-anchor-text-generators" element={<BulkAnchorTextGenerators />} />
              <Route path="/youtube-tag-generator" element={<YouTubeTagGenerator />} />
              <Route path="/whatsapp-chat-link" element={<WhatsAppChatLink />} />
              <Route path="/comma-separator-tool" element={<CommaSeparatorTool />} />
              <Route path="/youtube-video-tags-extractor" element={<YouTubeVideoTagsExtractor />} />
              <Route path="/url-domain-extractor" element={<UrlDomainExtractor />} />
              <Route path="/backlink-generator-tool" element={<BacklinkGeneratorTool />} />
              <Route path="/image-compressor" element={<ImageCompressor />} />
              <Route path="/about-us-page-generator" element={<AboutUsPageGenerator />} />
              <Route path="/mobile-friendly-tester-tool" element={<MobileFriendlyTesterTool />} />
              <Route path="/canonical-tag-generator" element={<CanonicalTagGenerator />} />
              <Route path="/contact-me" element={<ContactMe />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/write-for-us" element={<WriteForUs />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/ad-post-sites" element={<AdPostPage />} />
              <Route path="/social-bookmarking-sites" element={<SocialBookmarkingSites />} />
              <Route path="/guest-post-sites" element={<GuestPostSites />} />
              <Route path="/article-submission-sites" element={<ArticleSubmissionSites />} />
              <Route path="/directory-submission-sites" element={<DirectorySubmissionSites />} />
              <Route path="/image-submission-sites" element={<ImageSubmissionSites />} />
              <Route path="/video-submission-sites" element={<VideoSubmissionSites />} />
              <Route path="/sitemap-tool" element={<SitemapTool />} />
              <Route path="/InstagramReelDownloader" element={<InstagramReelDownloader />} />
              <Route path="/YouTubeShortsDownloader" element={<YouTubeShortsDownloader />} />
              <Route path="/PinterestDownloader" element={<PinterestDownloader />} />
              <Route path="/seo-audit" element={<SeoAudit />} />
              {/* Redirect old paths to new ones */}                                                          

              <Route path="/seo-optimized-page" element={<SeoOptimizedPage />} />
              <Route path="/viral-prompts" element={<ViralPrompts />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
