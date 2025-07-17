import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const staticPrompts = [
  "Create a stunning AI-generated image of a futuristic cityscape at sunset.",
  "Generate a viral video prompt for a funny pet moment.",
  "Write a catchy text prompt for an inspirational quote graphic.",
  "Produce an audio prompt for a relaxing nature soundscape.",
];

const ViralPrompts = () => {
  const [category, setCategory] = useState('image');
  const [prompts, setPrompts] = useState([]);
  const [copyStatus, setCopyStatus] = useState({}); // To track copied prompts
  const [inputText, setInputText] = useState('');
  const [loadingPrompt, setLoadingPrompt] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  useEffect(() => {
    fetchPrompts(category);
  }, [category]);

  const fetchPrompts = (cat) => {
    fetch(`/api/viralprompt/generate?category=${cat}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.prompts) {
          setPrompts(data.prompts);
        }
      })
      .catch((error) => {
        console.error('Error fetching prompts:', error);
      });
  };

  const copyToClipboard = (text, key) => {
    console.log('Copying text:', text);
    navigator.clipboard.writeText(text).then(() => {
      setCopyStatus((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopyStatus((prev) => ({ ...prev, [key]: false }));
      }, 2000);
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleGeneratePrompt = () => {
    if (!inputText.trim()) return;
    setLoadingPrompt(true);
    fetch('/api/viralprompt/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: inputText }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.prompt) {
          setGeneratedPrompt(data.prompt);
        }
      })
      .catch((error) => {
        console.error('Error generating prompt:', error);
      })
      .finally(() => {
        setLoadingPrompt(false);
      });
  };

  const promptBoxStyle = {
    border: '1px solid #ccc',
    borderRadius: '6px',
    padding: '10px',
    marginBottom: '10px',
    cursor: 'pointer',
    userSelect: 'none',
    backgroundColor: '#fafafa',
  };

  const inputStyle = {
    width: '100%',
    maxWidth: '800px',
    padding: '15px',
    fontSize: '1.2rem',
    borderRadius: '0px',
    border: '2px solid #007bff',
    marginBottom: '15px',
    fontWeight: '700',
    textAlign: 'center',
    animation: 'inputGlow 3s ease-in-out infinite alternate',
    outline: 'none',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    marginLeft: '10px',
    fontWeight: '600',
  };

  return (
    <>
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          @keyframes grow {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes inputGlow {
            0% {
              box-shadow: 0 0 5px 0 rgba(0, 123, 255, 0.5);
            }
            100% {
              box-shadow: 0 0 15px 5px rgba(0, 123, 255, 0.8);
            }
          }
          @keyframes placeholderBlink {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.4;
            }
          }
          input::placeholder {
            animation: placeholderBlink 2s infinite;
            color: #007bff;
            font-weight: 600;
          }
          .emoji-spin {
            display: inline-block;
            animation: spin 4s linear infinite;
            font-size: 1.5rem;
            margin-left: 8px;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          .emoji-pulse {
            display: inline-block;
            animation: pulse 2s infinite;
            font-size: 1.5rem;
            margin-left: 8px;
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1);}
            50% { transform: scale(1.3);}
          }
        `}
      </style>
      <Header />
      <main style={{ maxWidth: '900px', margin: '20px auto', padding: '0 15px', textAlign: 'center', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        <section style={{ marginBottom: '30px' }}>
          <select value={category} onChange={handleCategoryChange} style={{ marginBottom: '15px', padding: '10px', fontSize: '1.1rem', borderRadius: '6px', border: '1px solid #007bff' }}>
            <option value="image">Image</option>
            <option value="video">Video</option>
            <option value="text">Text</option>
            <option value="audio">Audio</option>
          </select>
          <h2 style={{ fontWeight: '700', marginBottom: '10px' }}>Static Prompts</h2>
          {staticPrompts.map((prompt, index) => (
            <div
              key={`static-prompt-${index}`}
              style={{ ...promptBoxStyle, backgroundColor: '#e0f7fa', position: 'relative' }}
              onClick={() => copyToClipboard(prompt, `static-prompt-${index}`)}
              title={copyStatus[`static-prompt-${index}`] ? 'Copied!' : 'Click to copy'}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b2ebf2'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#e0f7fa'}
            >
              {prompt}
              {copyStatus[`static-prompt-${index}`] && (
                <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: 'green', fontWeight: 'bold' }}>
                  Copied!
                </span>
              )}
            </div>
          ))}
          <h2 style={{ fontWeight: '700', marginTop: '30px', marginBottom: '10px' }}>Dynamic Prompts</h2>
          {prompts.map((prompt, index) => (
            <div
              key={`prompt-${index}`}
              style={{ ...promptBoxStyle, transition: 'background-color 0.3s ease', position: 'relative' }}
              onClick={() => copyToClipboard(prompt, `prompt-${index}`)}
              title={copyStatus[`prompt-${index}`] ? 'Copied!' : 'Click to copy'}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e9f5ff'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#fafafa'}
            >
              {prompt}
              {copyStatus[`prompt-${index}`] && (
                <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: 'green', fontWeight: 'bold' }}>
                  Copied!
                </span>
              )}
            </div>
          ))}
          <input
            type="text"
            placeholder="Enter text to generate professional AI prompt"
            value={inputText}
            onChange={handleInputChange}
            style={inputStyle}
            aria-label="Input text for AI prompt generation"
          />
          <input
            type="text"
            placeholder="Generated prompt will appear here"
            value={generatedPrompt}
            readOnly
            style={{ ...inputStyle, backgroundColor: '#f0f8ff', color: '#333', cursor: 'not-allowed' }}
            aria-label="Generated AI prompt"
          />
          <button onClick={handleGeneratePrompt} style={buttonStyle} disabled={loadingPrompt}>
            {loadingPrompt ? 'Generating...' : 'Generate Prompt'}
          </button>
          <span className="emoji-spin" role="img" aria-label="spinning star">🌟</span>
          <span className="emoji-pulse" role="img" aria-label="pulsing sparkles">✨</span>
        </section>
        <h1 style={{ fontWeight: '700', color: '#0056b3', animation: 'grow 1.5s infinite alternate' }}>
          Viral Image and Video Prompts for AI Tools <span style={{ animation: 'bounce 2s infinite', fontSize: '1.5rem', marginLeft: '8px' }}>🔥🎉</span>
        </h1>
        <p style={{ marginBottom: '30px', fontSize: '1.1rem', fontWeight: '500' }}>
          Welcome to the Viral Prompts page! Here you can find popular and trending image and video prompts that you can copy and use in various AI tools to generate creative content.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default ViralPrompts;
