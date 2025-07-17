import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Instagram Video Downloader?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Instagram Video Downloader is a tool that allows you to download videos from Instagram easily and quickly."
      }
    },
    {
      "@type": "Question",
      "name": "Is it free to use the Instagram Video Downloader?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this Instagram Video Downloader tool is completely free to use."
      }
    },
    {
      "@type": "Question",
      "name": "How do I download an Instagram video?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply enter the URL of the Instagram video you want to download and click the 'Download' button."
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

function InstagramDownloader() {
  const [videoUrl, setVideoUrl] = useState('');
  const [message, setMessage] = useState('');
  const [downloadLink, setDownloadLink] = useState('');

  const handleDownload = async () => {
    if (!videoUrl) {
      setMessage('Please enter a video URL.');
      return;
    }
    setMessage('Downloading video...');
    setDownloadLink('');
    try {
      const response = await axios.post(`${API_BASE_URL}/api/instagram/download`, {
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
    }
  };

  return (
    <>
      <Helmet>
        <title>Instagram Video Downloader - Download Instagram Videos Easily</title>
        <meta
          name="description"
          content="Use our Instagram Video Downloader tool to easily download videos from Instagram by entering the video URL. Fast, free, and simple to use."
        />
        <meta
          name="keywords"
          content="Instagram Video Downloader, download Instagram videos, Instagram video download, free Instagram downloader"
        />
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      </Helmet>

      <div
        className="page-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          padding: '20px',
        }}
      >
        <h1 className="page-title" style={{ marginBottom: '20px' }}>
          Instagram Video Downloader
        </h1>
        <p
          className="page-description"
          style={{ marginBottom: '30px', textAlign: 'center', maxWidth: '600px' }}
        >
          Use this tool to download videos from Instagram easily and quickly.
        </p>
        <div
          className="downloader-form"
          style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column' }}
        >
          <label htmlFor="videoUrl" style={{ marginBottom: '8px', fontWeight: 'bold' }}>
            Video URL:
          </label>
          <input
            type="text"
            id="videoUrl"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Enter Instagram video URL"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '20px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
          />
          <button
            onClick={handleDownload}
            style={{
              padding: '12px 0',
              fontSize: '18px',
              borderRadius: '4px',
              backgroundColor: '#405de6',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Download
          </button>
        </div>
        {message && (
          <p style={{ marginTop: '30px', fontWeight: 'bold', color: '#333', textAlign: 'center' }}>
            {message}
          </p>
        )}
        {downloadLink && (
          <a
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: '20px', fontWeight: 'bold', color: '#405de6' }}
          >
            Click here to download the video
          </a>
        )}
      </div>
    </>
  );
}

export default InstagramDownloader;
