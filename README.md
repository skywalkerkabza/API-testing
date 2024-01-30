# Exchange Rate API Test Suite

This repository contains a test suite for the Exchange Rate API. The test suite is designed to verify the functionality and behavior of the API endpoint that retrieves the latest exchange rates.

## Description

The test suite performs the following actions:

- Sends a GET request to the Exchange Rate API endpoint to fetch the latest exchange rates.
- Verifies that the HTTP status code of the response is 200.
- Counts the total number of currencies returned within the response.
- Checks if the response includes the currency 'GBP'.

## How to Run the Test

To run the test suite, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using Git.

    ```bash
    git clone https://github.com/your_username/exchange-rate-api-test.git
    ```

2. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies using npm.

    ```bash
    cd exchange-rate-api-test
    npm install
    ```

3. **Run the Tests**: Execute the test suite using npm. This will run the tests and display the results in the console.

    ```bash
    npm test
    ```

## Dependencies

The test suite relies on the following dependencies:

- Axios: For making HTTP requests to the Exchange Rate API.
- Jest: For writing and executing the test cases.
- https: For creating a custom HTTPS agent to ignore SSL certificate errors.

## Notes

- The test suite uses Axios to interact with the Exchange Rate API. It also configures a custom HTTPS agent to ignore SSL certificate errors.
- Ensure that you have a stable internet connection while running the tests to fetch the latest exchange rates from the API endpoint.
- If any test fails, review the error messages displayed in the console for troubleshooting.

