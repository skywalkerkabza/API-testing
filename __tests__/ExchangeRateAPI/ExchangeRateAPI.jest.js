const axios = require('axios');
const https = require('https');

// Axios instance with custom configuration to ignore SSL certificate errors
const instance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

describe('Exchange Rate API Tests', () => {
    test('get latest exchange', async () => {
        try {
            const response = await instance.get('https://v6.exchangerate-api.com/v6/1fc80820c72b0163bc9c7536/latest/USD');

            // Print out response.data
            console.log('Response Data:', response.data);

            
            expect(response.status).toBe(200);// test to check 200

            
            const responseData = response.data;
            expect(responseData).toHaveProperty('conversion_rates');
            const conversionRates = responseData.conversion_rates;

            
            console.log('Conversion Rates:', conversionRates);// Print Conversion Rates

            const currencyCount = Object.keys(conversionRates).length;
            
            console.log('Number of Currencies:', currencyCount);// Print Count the total number of currencies returned within the response


            expect(currencyCount).toBeGreaterThan(0);

            
            expect(conversionRates).toHaveProperty('GBP');// Verify the currency 'GBP' is shown within the response
        } catch (error) {
            
            console.error('Error:', error.message);// Handle errors
            
            expect(error).toBeNull();
        }
    });
});
