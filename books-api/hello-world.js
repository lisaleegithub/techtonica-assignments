// It'll have a single simple endpoint that 
// just returns a message as a response to our request to get the home page.
// 홈 페이지를 가져오기 위한 request에 대한 response로 메시지를 return하는 single endpoint

// Boilerplate (next three lines excluding comments)
// Import the express framework
const express = require('express')

// Instantiate the express app
const app = express()

// Set port to be used when we tell the app to listen to requests
const port = 3003

// Create a simple GET endpoint
// When a user hits the endpoint with a GET request, 
// returns the message "Hello World, from express" as a response
// Note: returned & rendered in the browser or displayed on the console table
// The URL for the endpoint is '/' because we want to set it to be on the home page
app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

// Start clients and run the app and visit the endpoint
// node hello-world.js
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));