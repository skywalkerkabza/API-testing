const axios = require('axios');
const https = require('https');

// Axios instance with custom configuration to ignore SSL certificate errors
const instance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});


describe('Exchange Rate API Tests', () => {
    
  test('Verify the HTTP status is 200', async () => {
      try {
          const response = await instance.get('https://v6.exchangerate-api.com/v6/1fc80820c72b0163bc9c7536/latest/USD');
           
           console.log('Response Data:', response.data); // Print out response.data
          expect(response.status).toBe(200);
      } catch (error) {
          console.error('Error:', error.message);
          expect(error).toBeNull();
      }
  });

  test('Count the total number of currencies returned within the response', async () => {
      try {
          const response = await instance.get('https://v6.exchangerate-api.com/v6/1fc80820c72b0163bc9c7536/latest/USD');
          const responseData = response.data;
          expect(responseData).toHaveProperty('conversion_rates');
          const conversionRates = responseData.conversion_rates;
          console.log('Conversion Rates:', conversionRates);// Print Conversion Rates
          const currencyCount = Object.keys(conversionRates).length;
          console.log('Number of Currencies:', currencyCount);// Print Count the total number of currencies returned within the response
          expect(currencyCount).toBeGreaterThan(0);
      } catch (error) {
          console.error('Error:', error.message);
          expect(error).toBeNull();
      }
  });

  test('Verify the currency "GBP" is shown within the response', async () => {
      try {
          const response = await instance.get('https://v6.exchangerate-api.com/v6/1fc80820c72b0163bc9c7536/latest/USD');
          const responseData = response.data;
          const conversionRates = responseData.conversion_rates;
          expect(conversionRates).toHaveProperty('GBP');
      } catch (error) {
          console.error('Error:', error.message);
          expect(error).toBeNull();
      }
  });

  test('Verify that when an invalid currency "ZA" that the test fails and prints out error Stack ', async () => {
    try {
        const response = await instance.get('https://v6.exchangerate-api.com/v6/1fc80820c72b0163bc9c7536/latest/USD');
        const responseData = response.data;
        const conversionRates = responseData.conversion_rates;
        expect(conversionRates).toHaveProperty('ZA');
    } catch (error) {
        console.error('Error:', error.message);
        expect(error);// we expecting an error
    }
});
});
