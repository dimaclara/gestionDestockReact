// Quick API test script
// Run with: node test-api.js (after starting backend)

const axios = require('axios');

const BASE_URL = 'http://localhost:8888/gestiondestock/api/v1';

async function testAPI() {
  console.log('🧪 Testing API Endpoints...\n');

  try {
    // Test 1: Categories endpoint
    console.log('1. Testing Categories endpoint...');
    const categoriesResponse = await axios.get(`${BASE_URL}/categories/showAll`);
    console.log('✅ Categories endpoint working');
    console.log(`   Found ${categoriesResponse.data.length} categories\n`);

    // Test 2: Articles endpoint
    console.log('2. Testing Articles endpoint...');
    const articlesResponse = await axios.get(`${BASE_URL}/articles/showAll`);
    console.log('✅ Articles endpoint working');
    console.log(`   Found ${articlesResponse.data.length} articles\n`);

    // Test 3: Auth endpoint structure (will fail without credentials, but tests endpoint exists)
    console.log('3. Testing Auth endpoint...');
    try {
      await axios.post(`${BASE_URL}/auth/login`, { email: 'test', password: 'test' });
    } catch (error) {
      if (error.response && error.response.status !== 404) {
        console.log('✅ Auth endpoint exists (expected auth failure)');
      } else {
        console.log('❌ Auth endpoint not found');
      }
    }

    console.log('\n🎉 API alignment test completed!');
    
  } catch (error) {
    console.error('❌ API Test failed:', error.message);
    if (error.code === 'ECONNREFUSED') {
      console.log('💡 Make sure your Spring Boot backend is running on port 8888');
    }
  }
}

testAPI();