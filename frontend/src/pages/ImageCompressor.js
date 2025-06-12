import React, { useState } from 'react';

function ImageCompressor() {
  const [imageFile, setImageFile] = useState(null);
  const [compressedImageUrl, setCompressedImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
    setCompressedImageUrl(null);
    setError(null);
  };

  const handleCompress = async () => {
    if (!imageFile) {
      setError('Please select an image file');
      return;
    }
    setLoading(true);
    setError(null);
    setCompressedImageUrl(null);
    try {
      // Placeholder for API call to compress image
      // Example:
      // const formData = new FormData();
      // formData.append('image', imageFile);
      // const response = await fetch('http://localhost:4000/api/image-compressor', {
      //   method: 'POST',
      //   body: formData,
      // });
      // if (!response.ok) throw new Error('Failed to compress image');
      // const data = await response.json();
      // setCompressedImageUrl(data.compressedImageUrl);
      setCompressedImageUrl(URL.createObjectURL(imageFile)); // Placeholder: just show original image
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Image Compressor</h2>
        <input type="file" accept="image/*" onChange={handleFileChange} style={styles.inputFile} />
        <button onClick={handleCompress} disabled={loading || !imageFile} style={styles.button}>
          {loading ? 'Compressing...' : 'Compress Image'}
        </button>
        {error && <p style={styles.error}>{error}</p>}
        {compressedImageUrl && (
          <div style={styles.imagePreview}>
            <p>Compressed Image Preview:</p>
            <img src={compressedImageUrl} alt="Compressed" style={styles.image} />
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f7fa',
    padding: '20px',
  },
  box: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '600px',
    width: '100%',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    marginBottom: '20px',
  },
  inputFile: {
    marginBottom: '15px',
  },
  button: {
    margin: '5px',
    padding: '10px 16px',
    fontSize: '15px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  imagePreview: {
    marginTop: '15px',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '400px',
    borderRadius: '6px',
  },
};

export default ImageCompressor;
