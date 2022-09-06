//this is my express server 

//these are the dependencies 
import express from "express"; 
import bodyParser from "body-parser";
import cors from "cors"; 
import books from "./books.js";
import path from 'path'; 

//create an app
const app = express(); 
const PORT = 3001; 

app.use(cors()); //explain cors it is middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//to let server know what directory we are working on 
const __dirname = path.resolve(); 
app.use(express.static('client')); 

// /api/books
//creating the /api/books endpoint-if someone visits host they are doing a GET request 
app.get('/api/books', (req, resp) => {
    resp.json(books); 

})


//this is a route-sends a request for an html
app.get('/', (req, resp) => {
    //telling response to open the index.html file in client directory 
    resp.sendFile(path.join(__dirname, 'client', 'index.html')); 
})

app.use(bodyParser.json()); 

app.post('/api/books', (req, resp) => {
  const book = req.body;
  
  console.log(book);
  books.push(book);

  resp.send('Book is added to the database');
})

// reading the books json 
// update the json array with book 
// write file 

app.get('/books', (req, res) => {
    res.json(books);
});


app.delete('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Remove item from the books array
    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }
        return false;
    });

    res.send('Book is deleted');
});




app.listen(PORT, () => console.log(`Hello Server running at ${PORT}`)); 
