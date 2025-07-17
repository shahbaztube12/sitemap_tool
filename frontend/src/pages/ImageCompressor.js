import React, { useState } from 'react';
import TopSlider from '../components/TopSlider';

function ImageCompressor() {
  const [imageFile, setImageFile] = useState(null);
  const [compressedImageUrl, setCompressedImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quality, setQuality] = useState(70);
  const [compressionPercent, setCompressionPercent] = useState(null);

  const [urls, setUrls] = useState('');
  const [results, setResults] = useState([]);
  const [indexLoading, setIndexLoading] = useState(false);
  const [indexError, setIndexError] = useState(null);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
    setCompressedImageUrl(null);
    setError(null);
    setCompressionPercent(null);
  };

  const handleQualityChange = (e) => {
    setQuality(Number(e.target.value));
  };

  const handleCompress = async () => {
    if (!imageFile) {
      setError('Please select an image file');
      return;
    }
    setLoading(true);
    setError(null);
    setCompressedImageUrl(null);
    setCompressionPercent(null);
    try {
      const formData = new FormData();
      formData.append('image', imageFile);
      formData.append('quality', quality);
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL || "https://sitemap-backend.onrender.com"}/api/image-compressor/compress`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Failed to compress image');
      const data = await response.json();
      setCompressedImageUrl(data.compressedImageUrl);

      // Calculate compression percentage
      const originalSize = imageFile.size;
      // Estimate compressed size from base64 length
      const compressedSize = (data.compressedImageUrl.length * 3) / 4;
      const percent = ((originalSize - compressedSize) / originalSize) * 100;
      setCompressionPercent(percent.toFixed(2));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!compressedImageUrl) return;
    const link = document.createElement('a');
    link.href = compressedImageUrl;
    link.download = 'compressed-image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleUrlsChange = (e) => {
    setUrls(e.target.value);
  };

  const handleCheck = async () => {
    const urlList = urls.split('\n').map(url => url.trim()).filter(url => url.length > 0);
    if (urlList.length === 0) {
      setIndexError('Please enter at least one URL');
      return;
    }
    setIndexLoading(true);
    setIndexError(null);
    setResults([]);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL || "https://sitemap-backend.onrender.com"}/api/google-index-checker/check`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ urls: urlList }),
      });
      if (!response.ok) throw new Error('Failed to check index status');
      const data = await response.json();
      setResults(data.result);
    } catch (err) {
      setIndexError(err.message);
    } finally {
      setIndexLoading(false);
    }
  };

  return (
    <>
      <style>
        {`
          body {
            background: linear-gradient(90deg, #e3f0ff 0%, #f8faff 100%);
            width: 100%;
            margin: 0;
          }
          .seo-page {
            width: 100%;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            background: linear-gradient(90deg, #e3f0ff 0%, #f8faff 100%);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          .seo-main-content {
            max-width: 1200px;
            margin: 40px auto 40px auto;
            background: #fff;
            border-radius: 18px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.08);
            padding: 24px 32px;
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
            justify-content: center;
          }
          .seo-section {
            flex: 1 1 500px;
            min-width: 320px;
            background: #f9f9f9;
            border-radius: 12px;
            padding: 24px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          }
          .seo-section h1, .seo-section h2, .seo-section h3 {
            color: #007bff;
            margin-bottom: 16px;
          }
          .seo-section h1 {
            font-size: 2.3rem;
            margin-top: 0;
            letter-spacing: 1px;
          }
          .seo-section h2 {
            font-size: 1.8rem;
            margin-top: 0;
          }
          .seo-section h3 {
            font-size: 1.3rem;
          }
          .seo-section p, .seo-section ul, .seo-section ol {
            color: #222;
            font-size: 1.1rem;
            line-height: 1.5;
          }
          .seo-section ul, .seo-section ol {
            padding-left: 1.2rem;
          }
          .inputFile, .textarea {
            width: 100%;
            padding: 10px;
            font-size: 1rem;
            border-radius: 6px;
            border: 1px solid #ccc;
            margin-bottom: 15px;
            box-sizing: border-box;
          }
          .sliderContainer {
            margin-bottom: 15px;
          }
          .slider {
            width: 100%;
          }
          .button {
            padding: 12px 20px;
            font-size: 1.1rem;
            border-radius: 8px;
            border: none;
            background-color: #007bff;
            color: white;
            cursor: pointer;
            width: 100%;
            margin-bottom: 15px;
          }
          .button:disabled {
            background-color: #a0c8ff;
            cursor: not-allowed;
          }
          .error {
            color: red;
            margin-top: 10px;
            font-weight: 600;
          }
          .imagePreview {
            margin-top: 15px;
            text-align: center;
          }
          .imagePreview img {
            max-width: 100%;
            max-height: 400px;
            border-radius: 6px;
          }
          .downloadButton {
            margin-top: 10px;
            padding: 10px 16px;
            font-size: 1rem;
            border-radius: 6px;
            border: none;
            background-color: #28a745;
            color: white;
            cursor: pointer;
          }
          .resultsTable {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
          }
          .resultsTable th, .resultsTable td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          .resultsTable thead {
            background-color: #007bff;
            color: white;
          }
        `}
      </style>
      <div className="seo-page">
        <TopSlider />
        <main className="seo-main-content">
          {/* Image Compressor Section */}
          <section className="seo-section" aria-labelledby="image-compressor-title">
            <h1 id="image-compressor-title">Image Compressor - Optimize Your Images for Faster Loading</h1>
            <h2>Image Compressor</h2>
            <p>
              Compressing images reduces their file size without significantly affecting quality, which helps your website load faster and improves user experience. Optimized images also contribute to better SEO rankings by reducing page load times and bandwidth usage.
            </p>
            <p>
              Our tool supports various image formats including JPEG, PNG, and WebP, allowing you to optimize images for different platforms and use cases. By reducing image size, you not only enhance page load times but also improve Core Web Vitals, a key factor in Google's ranking algorithm.
            </p>
            <p>
              Whether you're a blogger, e-commerce store owner, or digital marketer, using an image compressor is essential to deliver a fast and engaging user experience. Smaller images consume less bandwidth, which benefits users on mobile devices and slower connections.
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="inputFile"
              aria-describedby="image-compressor-desc"
            />
            <div className="sliderContainer">
              <label htmlFor="qualitySlider">Compression Quality: {quality}%</label>
              <input
                id="qualitySlider"
                type="range"
                min="10"
                max="100"
                value={quality}
                onChange={handleQualityChange}
                className="slider"
              />
            </div>
            <button
              onClick={handleCompress}
              disabled={loading || !imageFile}
              className="button"
              aria-live="polite"
            >
              {loading ? 'Compressing...' : 'Compress Image'}
            </button>
            {error && <p className="error">{error}</p>}
            {compressedImageUrl && (
              <div className="imagePreview">
                <p>Compressed Image Preview:</p>
<img src={compressedImageUrl} alt="Compressed optimized" />
                <p>Compression: {compressionPercent}%</p>
                <button onClick={handleDownload} className="downloadButton">Download Compressed Image</button>
              </div>
            )}
          </section>

          {/* Google Index Checker Section */}
          <section className="seo-section" aria-labelledby="google-index-checker-title">
            <h1 id="google-index-checker-title">Google Index Checker - Verify Your Website's Google Index Status</h1>
            <h2>Google Index Checker</h2>
            <p>Enter URLs (one per line) to check if they are indexed by Google.</p>
            <p>
              Ensuring your web pages are indexed by Google is crucial for visibility in search results. Our Google Index Checker tool helps you quickly verify the index status of multiple URLs, so you can identify pages that need attention or re-submission.
            </p>
            <p>
              Regularly monitoring your website's index status helps maintain SEO health and ensures that your content is discoverable by your target audience. This tool supports bulk URL checks, saving you time and effort.
            </p>
            <textarea
              value={urls}
              onChange={handleUrlsChange}
              placeholder="Enter URLs here, one per line"
              className="textarea"
              aria-describedby="google-index-checker-desc"
            />
            <button
              onClick={handleCheck}
              disabled={indexLoading}
              className="button"
              aria-live="polite"
            >
              {indexLoading ? 'Checking...' : 'Check Index Status'}
            </button>
            {indexError && <p className="error">{indexError}</p>}
            {results.length > 0 && (
              <table className="resultsTable" aria-label="Google index check results">
                <thead>
                  <tr>
                    <th>URL</th>
                    <th>Indexed</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map(({ url, indexed }, idx) => (
                    <tr key={idx}>
                      <td>{url}</td>
                      <td>{indexed ? 'Yes' : 'No'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
        </main>
      </div>
    </>
  );
}

export default ImageCompressor;
