const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
require('dotenv').config();

// set port to 8000 since react uses 3000 by default
const port = 8000;

app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Hello World, from express');
// });

// an api endpoint that returns the first day weather info from 5-day forecast
const api_key = process.env.API_KEY
app.get('/api/weather', (req, res) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=47.6038321&lon=-122.3300624&appid=${api_key}&units=imperial`)
    .then(res => res.json())
    .then(data => data.list[0])
    .then(day => {
        res.send({day});
    })
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))