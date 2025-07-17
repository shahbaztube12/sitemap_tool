import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const videoSubmissionSites = [
  { id: 1, name: 'YouTube', url: 'https://www.youtube.com', description: 'Largest video sharing platform.', da: 100 },
  { id: 2, name: 'Vimeo', url: 'https://vimeo.com', description: 'High‑quality video hosting and sharing.', da: 97 },
  { id: 3, name: 'Dailymotion', url: 'https://www.dailymotion.com', description: 'Video sharing with diverse content.', da: 96 },
  { id: 4, name: 'Facebook', url: 'https://www.facebook.com/videos', description: 'Video hosting via Facebook Watch.', da: 96 },
  { id: 5, name: 'Instagram', url: 'https://www.instagram.com', description: 'Video posts and Reels.', da: 94 },
  { id: 6, name: 'Twitch', url: 'https://www.twitch.tv', description: 'Live-streaming platform with video hosting.', da: 93 },
  { id: 7, name: 'Myspace', url: 'https://myspace.com', description: 'Music-focused site with video features.', da: 95 },
  { id: 8, name: 'Metacafe', url: 'https://www.metacafe.com', description: 'Short‑form video entertainment (inactive since Aug 2021).', da: 88 },
  { id: 9, name: 'Veoh', url: 'https://www.veoh.com', description: 'Internet television network (shut down Nov 2024).', da: 84 },
  { id: 10, name: 'Blinkx', url: 'https://www.blinkx.com', description: 'Video search and content sharing.', da: 93 },
  { id: 11, name: 'Break', url: 'https://www.break.com', description: 'Entertaining video clips.', da: 84 },
  { id: 12, name: 'Funny or Die', url: 'https://www.funnyordie.com', description: 'Comedy and satire video site.', da: 86 },
  { id: 13, name: 'Archive.org', url: 'https://archive.org', description: 'Digital library hosting video and media.', da: 75 },
  { id: 14, name: 'LiveLeak', url: 'https://www.liveleak.com', description: 'Citizen journalism video uploads.', da: 71 },
  { id: 15, name: 'TeacherTube', url: 'https://www.teachertube.com', description: 'Educational video sharing.', da: 66 },
  { id: 16, name: 'Viddler', url: 'https://www.viddler.com', description: 'Business and training video hosting.', da: 75 },
  { id: 17, name: 'GodTube', url: 'https://www.godtube.com', description: 'Christian video sharing network.', da: 69 },
  { id: 18, name: 'Ustream', url: 'https://www.ustream.tv', description: 'Live streaming and recorded video hosting.', da: 92 },
  { id: 19, name: 'Coub', url: 'https://coub.com', description: 'Looped video sharing platform.', da: 83 },
  { id: 20, name: 'DTube', url: 'https://d.tube', description: 'Decentralized blockchain-based video platform.', da: 71 },
];

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem 1rem 3rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: 1.6,
    color: '#222',
  },
  hero: {
    padding: '4rem 1rem',
    textAlign: 'center',
    backgroundColor: '#f0f0ff',
    borderRadius: '12px',
    marginBottom: '2rem',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '1rem',
    color: '#0a1a72',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    color: '#333',
    maxWidth: '700px',
    margin: '0 auto',
  },
  keywordHighlight: {
    backgroundColor: '#ffff00',
    padding: '0 6px',
  },
  th: {
    padding: '12px 15px',
    textAlign: 'left',
    backgroundColor: '#0a1a72',
    color: '#fff',
    fontWeight: '600',
    fontSize: '1rem',
  },
  td: {
    padding: '12px 15px',
    fontSize: '0.95rem',
    verticalAlign: 'top',
  },
  faqSection: {
    marginTop: '3rem',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '2rem',
  },
  faqTitle: {
    fontSize: '2.25rem',
    fontWeight: '700',
    color: '#0a1a72',
    marginBottom: '1rem',
  },
  faqItem: {
    marginBottom: '1rem',
  },
  faqQuestion: {
    fontWeight: '700',
    cursor: 'pointer',
    fontSize: '1.15rem',
    color: '#003366',
    backgroundColor: '#e6e9f7',
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: 'none',
    width: '100%',
    textAlign: 'left',
  },
  faqAnswer: {
    marginTop: '0.5rem',
    fontSize: '1rem',
    color: '#444',
    paddingLeft: '1rem',
  },
  internalLinks: {
    marginTop: '3rem',
    textAlign: 'center',
  },
  internalLink: {
    margin: '0 12px',
    color: '#0a1a72',
    textDecoration: 'underline',
    fontWeight: '600',
  },
};

const faqData = [
  {
    question: 'What are video submission sites?',
    answer:
      'Video submission sites are platforms where you can upload and share your videos to reach a wider audience and improve SEO through backlinks.',
  },
  {
    question: 'How do video submission sites help SEO?',
    answer:
      'Submitting videos to high-authority sites can generate backlinks, increase brand visibility, and drive traffic to your website.',
  },
  {
    question: 'Are all video submission sites free to use?',
    answer:
      'Most popular video submission sites offer free accounts, but some may have premium features or restrictions.',
  },
  {
    question: 'How often should I submit videos?',
    answer:
      'Regular submissions help maintain visibility and engagement, but quality is more important than quantity.',
  },
  {
    question: 'Can I submit the same video to multiple sites?',
    answer:
      'Yes, but ensure you optimize titles and descriptions to avoid duplicate content penalties.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

const VideoSubmissionSites = () => {
  const currentPosts = videoSubmissionSites.slice(0, 20);

  return (
    <>
      <Helmet>
        <title>Top Video Submission Sites (DA & SEO Benefits)</title>
        <meta name="description" content="Explore the best 20 video submission sites, their Domain Authority scores, and boost your SEO & traffic." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main style={{ padding: '2rem 1rem', background: '#f0f0ff' }}>
        <section style={styles.hero}>
          <h1 style={styles.heroTitle}>
            Top <span style={styles.keywordHighlight}>Video Submission Sites</span> with DA Scores
          </h1>
          <p style={styles.heroSubtitle}>
            Share your videos on high-authority platforms to build backlinks and drive traffic.
          </p>
        </section>

        <section style={{ maxWidth: 1200, margin: '2rem auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8 }}>
            <thead>
              <tr>
                {['#', 'Name', 'Description', 'DA'].map((txt, i) => (
                  <th key={i} style={styles.th}>{txt}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((site, idx) => (
                <tr key={site.id} style={{ background: idx % 2 ? '#f9f9f9' : '#fff' }}>
                  <td style={styles.td}>{site.id}</td>
                  <td style={styles.td}>
                    <a href={site.url} target="_blank" rel="noopener noreferrer" style={{ color: '#00008b' }}>
                      {site.name}
                    </a>
                  </td>
                  <td style={styles.td}>{site.description}</td>
                  <td style={styles.td}>{site.da}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section style={styles.faqSection}>
          <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
          {faqData.map((faq, i) => (
            <div key={i} style={styles.faqItem}>
              <div style={styles.faqQuestion}>{faq.question}</div>
              <div style={styles.faqAnswer}>{faq.answer}</div>
            </div>
          ))}
        </section>

        <div style={styles.internalLinks}>
          {[
            { to: '/ad-post-sites', text: 'Ad Post Sites' },
            { to: '/social-bookmarking-sites', text: 'Social Bookmarking Sites' },
            { to: '/image-submission-sites', text: 'Image Submission Sites' },
            { to: '/', text: 'Home' },
          ].map(({ to, text }, idx) => (
            <Link key={idx} to={to} style={styles.internalLink}>
              {text}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default VideoSubmissionSites;
