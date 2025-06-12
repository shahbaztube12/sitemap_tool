import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:4000";

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
        YouTube Shorts Downloader
      </h1>
      <p
        className="page-description"
        style={{ marginBottom: '30px', textAlign: 'center', maxWidth: '600px' }}
      >
        Enter the URL of the YouTube Shorts video you want to download.
      </p>
      <div
        className="downloader-form"
        style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column' }}
      >
        <label htmlFor="videoUrl" style={{ marginBottom: '8px', fontWeight: 'bold' }}>
          YouTube Shorts Video URL:
        </label>
        <input
          type="text"
          id="videoUrl"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Enter YouTube Shorts video URL"
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
          disabled={loading || !videoUrl.trim()}
          style={{
            padding: '12px 0',
            fontSize: '18px',
            borderRadius: '4px',
            backgroundColor: '#ff0000',
            color: 'white',
            border: 'none',
            cursor: loading || !videoUrl.trim() ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Downloading...' : 'Get Download Link'}
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
          style={{ marginTop: '20px', fontWeight: 'bold', color: '#ff0000' }}
        >
          Click here to download the video
        </a>
      )}
    </div>
  );
}

export default YouTubeShortsDownloader;
