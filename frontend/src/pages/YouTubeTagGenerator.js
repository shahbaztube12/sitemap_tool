import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What is a YouTube Tag Generator?",
    answer:
      "A YouTube Tag Generator helps you create relevant tags for your YouTube videos to improve their visibility and search ranking.",
  },
  {
    question: "How does this YouTube Tag Generator work?",
    answer:
      "Simply enter the URL of your YouTube video, and the tool will generate optimized tags based on the video content and metadata.",
  },
  {
    question: "Why are YouTube tags important for SEO?",
    answer:
      "Tags help YouTube understand the content of your video, making it easier to recommend and rank your video in search results.",
  },
  {
    question: "Is this tool free to use?",
    answer:
      "Yes, this YouTube Tag Generator is completely free and easy to use for all content creators.",
  },
];

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://sitemap-backend.onrender.com";

function YouTubeTagGenerator() {
  const [videoUrl, setVideoUrl] = useState('');
  const [tags, setTags] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateTags = async () => {
    setLoading(true);
    setError(null);
    setTags(null);
    try {
      // Placeholder for API call to generate YouTube tags
      // Example:
      const response = await fetch(`${API_BASE_URL}/api/youtube-tag-generator`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoUrl }),
      });
      if (!response.ok) throw new Error('Failed to generate tags');
      const data = await response.json();
      setTags(data.tags);
      setTags('YouTube tags generated successfully (placeholder).');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>YouTube Tag Generator - Generate SEO Optimized Tags for Your Videos</title>
        <meta
          name="description"
          content="Use our YouTube Tag Generator to create SEO optimized tags for your YouTube videos. Improve your video visibility and ranking with relevant tags."
        />
        <meta
          name="keywords"
          content="YouTube tag generator, generate YouTube tags, SEO tags for YouTube, video tags, YouTube SEO"
        />
        <link rel="canonical" href="https://yourdomain.com/youtube-tag-generator" />
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
            YouTube Tag Generator
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#333' }}>
            Generate SEO optimized tags for your YouTube videos to boost visibility and reach a wider audience.
          </p>
        </section>

        {/* Tag Generator Section */}
        <section
          style={{
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '2rem',
          }}
        >
          <h2>Generate Your YouTube Video Tags</h2>
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
            onClick={handleGenerateTags}
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
            {loading ? 'Generating...' : 'Generate Tags'}
          </button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          {tags && <p style={{ marginTop: '15px', fontWeight: 'bold' }}>{tags}</p>}
        </section>

        {/* Benefits Section */}
        <section>
          <h2>Why Use Our YouTube Tag Generator?</h2>
          <h3>Improve Video SEO</h3>
          <p>
            Tags help YouTube understand your video content, improving its chances of appearing in search results and recommendations.
          </p>
          <h3>Save Time and Effort</h3>
          <p>
            Automatically generate relevant tags without spending hours researching keywords.
          </p>
          <h3>Boost Video Visibility</h3>
          <p>
            Well-optimized tags increase your video’s reach and engagement, helping you grow your audience.
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
              <Link to="/youtube-video-tags-extractor">YouTube Video Tags Extractor</Link>
            </li>
            <li>
              <Link to="/seo-guides">SEO Guides</Link>
            </li>
            <li>
              <Link to="/seo-optimized-page">SEO Optimized Page</Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default YouTubeTagGenerator;
