const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3003;


// node_modules not ignored, not sure why?

// my books
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

app.use(cors());

// configure body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const book = req.body;
    
    //output
    console.log(book);
    books.push(book);
    
    res.send('Book is added to the database');
}) 

// app.get('/books', (req, res) => {
//     res.json(books);
// });

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));