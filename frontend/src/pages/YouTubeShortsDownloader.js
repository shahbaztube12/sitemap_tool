import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is YouTube Shorts Downloader?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "YouTube Shorts Downloader is a tool that allows you to download YouTube Shorts videos easily by providing the video URL."
      }
    },
    {
      "@type": "Question",
      "name": "Is it free to use the YouTube Shorts Downloader?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this YouTube Shorts Downloader tool is completely free to use."
      }
    },
    {
      "@type": "Question",
      "name": "How do I download a YouTube Shorts video?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply enter the URL of the YouTube Shorts video you want to download and click the 'Get Download Link' button."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any limitations on the video downloads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There are no limitations on the number of videos you can download using this tool."
      }
    }
  ]
};

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://sitemap-backend.onrender.com";

function YouTubeShortsDownloader() {
  const [videoUrl, setVideoUrl] = useState('');
  const [message, setMessage] = useState('');
  const [downloadLink, setDownloadLink] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!videoUrl) {
      setMessage('Please enter a YouTube Shorts video URL.');
      return;
    }
    setMessage('');
    setDownloadLink('');
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/youtube/download`, {
        videoUrl,
      });
      if (response.data && response.data.downloadUrl) {
        setDownloadLink(response.data.downloadUrl);
        setMessage('Video ready for download.');
      } else {
        setMessage('Failed to get download URL.');
      }
    } catch (error) {
      setMessage('Error downloading video: ' + (error.response?.data?.error || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>YouTube Shorts Downloader - Download YouTube Shorts Videos Easily</title>
        <meta
          name="description"
          content="Use our YouTube Shorts Downloader tool to easily download YouTube Shorts videos by entering the video URL. Fast, free, and simple to use."
        />
        <meta
          name="keywords"
          content="YouTube Shorts Downloader, download YouTube Shorts, YouTube Shorts video download, free YouTube Shorts downloader"
        />
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      </Helmet>

      <main style={styles.main}>
        {/* Hero Section */}
        <section style={styles.hero}>
          <h1 style={styles.heroTitle}>YouTube Shorts Downloader</h1>
          <p style={styles.heroSubtitle}>
            Enter the URL of the YouTube Shorts video you want to download quickly and easily.
          </p>
          <div style={styles.inputGroup}>
            <input
              type="text"
              placeholder="Enter YouTube Shorts video URL"
              value={videoUrl}
              onChange={e => setVideoUrl(e.target.value)}
              style={styles.input}
              aria-label="YouTube Shorts video URL"
            />
            <button onClick={handleDownload} disabled={loading || !videoUrl.trim()} style={styles.button}>
              {loading ? 'Downloading...' : 'Get Download Link'}
            </button>
          </div>
          {message && <p style={message.startsWith('Error') ? styles.error : styles.success}>{message}</p>}
          {downloadLink && (
            <a
              href={downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.downloadLink}
            >
              Click here to download the video
            </a>
          )}
        </section>

        {/* Benefits Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Benefits of Using Our YouTube Shorts Downloader</h2>
          <ul style={styles.benefitsList}>
            <li>✅ Download YouTube Shorts videos quickly and easily</li>
            <li>✅ Free to use with no hidden charges</li>
            <li>✅ No software installation required</li>
            <li>✅ Compatible with all devices and browsers</li>
            <li>✅ Safe and secure video downloads</li>
          </ul>
        </section>

        {/* FAQs Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
          <dl style={styles.faqList}>
            <dt style={styles.faqQuestion}>What is YouTube Shorts Downloader?</dt>
            <dd style={styles.faqAnswer}>
              YouTube Shorts Downloader is a tool that allows you to download YouTube Shorts videos easily by providing the video URL.
            </dd>
            <dt style={styles.faqQuestion}>Is it free to use the YouTube Shorts Downloader?</dt>
            <dd style={styles.faqAnswer}>
              Yes, this YouTube Shorts Downloader tool is completely free to use.
            </dd>
            <dt style={styles.faqQuestion}>How do I download a YouTube Shorts video?</dt>
            <dd style={styles.faqAnswer}>
              Simply enter the URL of the YouTube Shorts video you want to download and click the 'Get Download Link' button.
            </dd>
            <dt style={styles.faqQuestion}>Are there any limitations on the video downloads?</dt>
            <dd style={styles.faqAnswer}>
              There are no limitations on the number of videos you can download using this tool.
            </dd>
          </dl>
        </section>

        {/* CTA Section */}
        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Ready to Download Your Favorite YouTube Shorts?</h2>
          <p style={styles.ctaText}>Enter the video URL above and get your download link instantly!</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={styles.ctaButton}>
            Get Download Link
          </button>
        </section>
      </main>
    </>
  );
}

const styles = {
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#222',
  },
  hero: {
    textAlign: 'center',
    padding: '60px 20px 40px',
    backgroundColor: '#e9f0ff',
    borderRadius: '8px',
  },
  heroTitle: {
    fontSize: '2.8rem',
    marginBottom: '15px',
    fontWeight: '700',
    color: '#003366',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#555',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  inputGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  input: {
    flex: '1 1 300px',
    padding: '12px 15px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '12px 25px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#ff0000',
    color: '#fff',
    cursor: 'pointer',
    minWidth: '160px',
    transition: 'background-color 0.3s ease',
  },
  error: {
    color: '#d9534f',
    marginTop: '15px',
  },
  success: {
    color: '#28a745',
    marginTop: '15px',
  },
  downloadLink: {
    marginTop: '20px',
    fontWeight: '700',
    color: '#ff0000',
    textDecoration: 'none',
  },
  section: {
    marginTop: '60px',
    padding: '0 10px',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '25px',
    color: '#003366',
    fontWeight: '700',
    textAlign: 'center',
  },
  benefitsList: {
    listStyleType: 'none',
    paddingLeft: '0',
    maxWidth: '700px',
    margin: '0 auto',
    fontSize: '1.1rem',
    color: '#444',
  },
  faqList: {
    maxWidth: '700px',
    margin: '0 auto',
    fontSize: '1rem',
    color: '#333',
  },
  faqQuestion: {
    fontWeight: '700',
    marginTop: '20px',
  },
  faqAnswer: {
    marginTop: '8px',
    lineHeight: '1.6',
  },
  ctaSection: {
    marginTop: '80px',
    padding: '40px 20px',
    backgroundColor: '#003366',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '8px',
  },
  ctaTitle: {
    fontSize: '2.2rem',
    marginBottom: '15px',
    fontWeight: '700',
  },
  ctaText: {
    fontSize: '1.2rem',
    marginBottom: '30px',
  },
  ctaButton: {
    padding: '14px 30px',
    fontSize: '1.1rem',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#ffcc00',
    color: '#003366',
    cursor: 'pointer',
    fontWeight: '700',
    transition: 'background-color 0.3s ease',
  },
};

export default YouTubeShortsDownloader;
