const axios = require('axios');

async function testGenerateSitemap() {
  try {
    const response = await axios.post('http://localhost:4000/api/sitemap/', {
      url: 'https://bhurjisurfacegrinder.com'
    });
    console.log('Response:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    console.error('Full error:', error);
  }
}

testGenerateSitemap();
