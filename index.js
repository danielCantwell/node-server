const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');


// Create express server
const server = express();

// Allow server to get request parameters
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Define api route for creating a user
server.post('/auth/register', async (req, res) => {
  console.log('Received register request');
  const isValid = api.validateRegistrationRequest(req.params);
  
  if (isValid) {
    const registrationResult = await api.registerUser(req.params);
    if (registrationResult.success) {
      // User was successfully created
      res.json({
        status: 200,
        authToken: registrationResult.token,
        user: registrationResult.user,
      })
    } else {
      // User sent a valid request, but the registration request failed
      res.json({
        status: 400,
        message: 'Hmm, registration request failed.'
      })
    }
  } else {
    // Send an error response back to the user
    res.json({
      status: 400,
      message: 'Invalid registration request.',
    });
  }
});

// Define api route for user login
server.post('/auth/login', async (req, res) => {
  console.log('Received login request');
  const isValid = api.validateLoginRequest(req.params);
  
  if (isValid) {
    const loginResult = await api.loginUser(req.params);
    if (loginResult.success) {
      // User was successfully created
      res.json({
        status: 200,
        authToken: loginResult.token,
        user: loginResult.user,
      })
    } else {
      // User sent a valid request, but the login request failed
      res.json({
        status: 400,
        message: 'Hmm, login request failed.'
      })
    }
  } else {
    // Send an error response back to the user
    res.json({
      status: 400,
      message: 'Invalid login request.',
    });
  }
});

// Start the server on port 5000
server.listen(5000);
console.log('Server running at: http://localhost:5000');