const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

const port = 3003;

app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Express' });
  });

const api_url = "https://opentdb.com/api.php?amount=10&category=12&type=multiple";
app.get('/api/quiz', (req, res) => {
    fetch(api_url)
    .then(res => res.json())
    .then(data => {
        res.send({data});
    });
});

// console.log that your server is up and running
  app.listen(port, () => {
    console.log(`Server listening on ${port}!`);
  })