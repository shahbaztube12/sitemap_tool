import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = "http://localhost:4000";

function PinterestDownloader() {
  const [videoUrl, setVideoUrl] = useState('');
  const [resolution, setResolution] = useState('1080');
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
      const response = await axios.post(`${API_BASE_URL}/api/pinterest/download`, {
        videoUrl,
        resolution,
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
        Pinterest Video Downloader
      </h1>
      <p
        className="page-description"
        style={{ marginBottom: '30px', textAlign: 'center', maxWidth: '600px' }}
      >
        Use this tool to download videos from Pinterest easily and quickly.
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
          placeholder="Enter Pinterest video URL"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />
        <label htmlFor="resolution" style={{ marginBottom: '8px', fontWeight: 'bold' }}>
          Select Resolution:
        </label>
        <select
          id="resolution"
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        >
          <option value="1080">1080p</option>
          <option value="720">720p</option>
          <option value="480">480p</option>
          <option value="360">360p</option>
        </select>
        <button
          onClick={handleDownload}
          style={{
            padding: '12px 0',
            fontSize: '18px',
            borderRadius: '4px',
            backgroundColor: '#e60023',
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
          style={{ marginTop: '20px', fontWeight: 'bold', color: '#e60023' }}
        >
          Click here to download the video
        </a>
      )}
    </div>
  );
}

export default PinterestDownloader;
