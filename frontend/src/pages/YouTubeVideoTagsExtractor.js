import  { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What is a YouTube Video Tags Extractor?",
    answer:
      "A YouTube Video Tags Extractor helps you extract existing tags from any YouTube video to analyze and optimize your own content.",
  },
  {
    question: "How do I use the YouTube Video Tags Extractor?",
    answer:
      "Enter the URL of the YouTube video and click 'Extract Tags' to get the list of tags used in that video.",
  },
  {
    question: "Why is extracting tags useful?",
    answer:
      "Extracting tags from popular videos helps you understand what keywords are effective and can improve your video SEO.",
  },
  {
    question: "Is this tool free to use?",
    answer:
      "Yes, this YouTube Video Tags Extractor is completely free and easy to use for all content creators.",
  },
];

function YouTubeVideoTagsExtractor() {
  const [videoUrl, setVideoUrl] = useState('');
  const [tags, setTags] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleExtractTags = async () => {
    setLoading(true);
    setError(null);
    setTags(null);
    try {
      // Placeholder for API call to extract YouTube video tags
      // Example:
      // const response = await fetch('http://localhost:4000/api/youtube-video-tags-extractor', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ videoUrl }),
      // });
      // if (!response.ok) throw new Error('Failed to extract tags');
      // const data = await response.json();
      // setTags(data.tags);
      setTags('YouTube video tags extracted successfully (placeholder).');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>YouTube Video Tags Extractor - Analyze and Optimize Your Video Tags</title>
        <meta
          name="description"
          content="Use our YouTube Video Tags Extractor to analyze tags from any YouTube video and optimize your own video SEO."
        />
        <meta
          name="keywords"
          content="YouTube video tags extractor, extract YouTube tags, video SEO, tag analysis"
        />
        <link rel="canonical" href="youtube-video-tags-extractor" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
        {/* Hero Section */}
        <section
          style={{
            backgroundColor: '#e9f0fb',
            padding: '3rem 1rem',
            textAlign: 'center',
            borderRadius: '8px',
            marginBottom: '2rem',
          }}
        >
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            YouTube Video Tags Extractor
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#333' }}>
            Analyze and extract tags from any YouTube video to improve your video SEO strategy.
          </p>
        </section>

        {/* Extractor Section */}
        <section
          style={{
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '2rem',
            textAlign: 'center',
          }}
        >
          <h2>Extract Tags from YouTube Video</h2>
          <input
            type="text"
            placeholder="Enter YouTube video URL"
            value={videoUrl}
            onChange={e => setVideoUrl(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 10px',
              margin: '15px 0',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
            aria-label="YouTube video URL"
          />
          <button
            onClick={handleExtractTags}
            disabled={loading || !videoUrl.trim()}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: '#007bff',
              color: 'white',
              cursor: loading || !videoUrl.trim() ? 'not-allowed' : 'pointer',
            }}
            aria-disabled={loading || !videoUrl.trim()}
          >
            {loading ? 'Extracting...' : 'Extract Tags'}
          </button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          {tags && <p style={{ marginTop: '15px', fontWeight: 'bold' }}>{tags}</p>}
        </section>

        {/* Benefits Section */}
        <section>
          <h2>Why Use Our YouTube Video Tags Extractor?</h2>
          <h3>Understand Competitor Tags</h3>
          <p>
            See what tags popular videos are using to improve your own video SEO.
          </p>
          <h3>Optimize Your Content</h3>
          <p>
            Use extracted tags to optimize your video metadata and increase visibility.
          </p>
          <h3>Free and Easy to Use</h3>
          <p>
            Our tool is free and designed for ease of use by all content creators.
          </p>
        </section>

        {/* FAQ Section */}
        <section style={{ marginTop: '3rem' }}>
          <h2>Frequently Asked Questions</h2>
          <div>
            {faqs.map((faq, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links Section */}
        <section style={{ marginTop: '3rem' }}>
          <h2>Explore Related Tools and Guides</h2>
          <ul>
            <li>
              <Link to="/youtube-tag-generator">YouTube Tag Generator</Link>
            </li>
            <li>
              <Link to="/whatsapp-chat-link">WhatsApp Chat Link</Link>
            </li>
            <li>
              <Link to="/seo-guides">SEO Guides</Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default YouTubeVideoTagsExtractor;
