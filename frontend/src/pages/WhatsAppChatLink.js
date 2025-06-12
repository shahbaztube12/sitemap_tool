import React, { useState } from 'react';

function WhatsAppChatLink() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [chatLink, setChatLink] = useState(null);
  const [error, setError] = useState(null);

  const generateChatLink = () => {
    setError(null);
    if (!phoneNumber) {
      setError('Phone number is required');
      return;
    }
    const encodedMessage = encodeURIComponent(message);
    const link = `https://wa.me/${phoneNumber}${message ? `?text=${encodedMessage}` : ''}`;
    setChatLink(link);
  };

  return (
    <>
     
      <div style={styles.container}>
        <div style={styles.box}>
          <h2 style={styles.heading}>WhatsApp Chat Link Generator</h2>
          <input
            type="text"
            placeholder="Enter phone number (with country code)"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            style={styles.input}
          />
          <textarea
            placeholder="Enter message (optional)"
            value={message}
            onChange={e => setMessage(e.target.value)}
            style={styles.textarea}
            rows={4}
          />
          <button onClick={generateChatLink} disabled={!phoneNumber.trim()} style={styles.button}>
            Generate Link
          </button>
          {error && <p style={styles.error}>{error}</p>}
          {chatLink && (
            <p style={styles.result}>
              Chat Link: <a href={chatLink} target="_blank" rel="noopener noreferrer">{chatLink}</a>
            </p>
          )}
        </div>
      </div>
  
    </>
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
  input: {
    width: '100%',
    padding: '12px 10px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    padding: '12px 10px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
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
  result: {
    marginTop: '15px',
    fontWeight: 'bold',
  }
};

export default WhatsAppChatLink;
