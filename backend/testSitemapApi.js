const axios = require('axios');

const baseUrl = 'http://localhost:4000'; // Adjust if backend runs on different host/port

async function testCreateWebsite() {
  try {
    const response = await axios.post(`${baseUrl}/api/sitemap`, {
      url: 'https://www.racksmart.in/',
      title: 'Example Website',
      description: 'Test website for crawling'
    });
    console.log('Create Website Response:', response.data);
  } catch (error) {
    console.error('Error creating website:', error.response ? error.response.data : error.message);
  }
}

testCreateWebsite();
