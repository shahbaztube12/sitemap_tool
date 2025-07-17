const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

const BACKEND_BASE_URL = isLocal
  ? 'http://localhost:4000'
  : 'https://sitemap-backend.onrender.com';

export default BACKEND_BASE_URL;
