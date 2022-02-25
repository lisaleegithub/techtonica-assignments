// Import the express framework
const express = require('express');

// Import body-parser: decodes the body from an HTTP request
const bodyParser = require('body-parser');

// Import cors (cross-origin resource sharing): a browser security feature 
// that restricts cross-origin HTTP requests with other servers and 
// specifies which domains access your resources.
const cors = require('cors');

// Instantiate express and assign app variable.
const app = express();
// Set port to be used when we tell the app to listen to requests.
const port = 3003;

// Array to store books
let books = [{
    "isbn": "9781846276149",
    "title": "Nine Pints",
    "author": "Rose George",
    "publishedDate": "2018-10-23",
    "publisher": "Metropolitan Books",
    "pageCount": 368,
},
{
    "isbn": "9780143132547",
    "title": "Learning How to Learn",
    "author": "Barbara Oakley, PhD",
    "publishedDate": "2018-08-07",
    "publisher": "Penguin",
    "pageCount": 256,
},
{
    "isbn": "9780385679060",
    "title": "Crazy Rich Asians",
    "author": "Kevin Kwan",
    "publishedDate": "2013-06-11",
    "publisher": "Doubleday Canada",
    "pageCount": 384,
},
{
    "isbn": "9781529033779",
    "title": "Crying in H Mart",
    "author": "Michelle Zauner",
    "publishedDate": "2021-08-05",
    "publisher": "Picador",
    "pageCount": 256,
}];

// Configure cors middleware
app.use(cors());

// Configure body parser middleware.
// Grab the HTTP body, decode the info, and append it to the req.body.
// Can easily retrieve info from the form.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Syntax: app.method(path on the server, function executed when the route is matched)
app.post('/book', (req, res) => {
    const book = req.body;
    
    // Output the book to the console for debugging.
    console.log(book);
    // Add the book to the book array.
    books.push(book);
    
    // This function accepts a single parameter body 
    // that describe the body which is to be sent in the response.
    res.send('Book is added to the database');
}) 

// Create an endpoint to get all the books from the API.
// Restart server and there will be a JSON response of all the books.
app.get('/book', (req, res) => {
    res.json(books);
});

// Retrieve a book by ISBN
// Parametrized URL - by adding a colon to the path, we can define
// a variable, mapped to the variable isbn.
app.get('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Searching books for the isbn
    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            console.log(res.json(book));
            return;
        }
    }

    // Sending 404 when not found
    res.status(404).send('Book not found');
});

// Start clients and run the app and visit the endpoint.
// node book-api.js
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));