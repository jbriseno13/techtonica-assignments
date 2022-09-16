const BOOKS = [{
    "isbn": "0553120441",
    "title": "Harry Potter and the Sorcerer's Stone",
    "author": "J.K. Rowling",
    "format": "Hardcover"
},
{
    "isbn": "0679889175",
    "title": "A Song Of Ice And Fire",
    "author": "George R. Martin",
    "format": "Paperback"
},
{
    "isbn": "2740326412832",
    "title": "The Evolution of Childhood",
    "author": "Melvin Konner",
    "format": "Paperback"
},
{
    "isbn": "0553096095",
    "title": "Inequality and Startification Race,Class, and Gender",
    "author": "Robert A. Rothman",
    "format": "Paperback"
},
{
    "isbn": "05530962356",
    "title": "The Design of Everyday Things",
    "author": "Don Norman",
    "format": "e-book"
},
{
    "isbn": "0553098976",
    "title": "JavaScript from Beginner to Professional ",
    "author": "Laurence Lars Svekis",
    "format": "e-book"
},
{
    "isbn": "0553093476",
    "title": "Man's Search for Meaning",
    "author": "Viktor E Frankl",
    "format": "e-book"
},
{
    "isbn": "0553115634",
    "title": "Multicultural /Multiracial Psychology",
    "author": "Manuel Ramirez, III",
    "format": "Hardcover"
},

]

 export default BOOKS;


 /*

 psql rest_apibooks 
 Table Name: books

 create table books (id integer unique, isbn integer, title text, author text, format text);

//inserting data: 

INSERT INTO books (id, isbn, title, author, format) VALUES (1, 0553120441, 'Harry Potter and the Sorcerers Stone', 'J.K. Rowling', 'Hardcover');
INSERT INTO books (id, isbn, title, author, format) VALUES (2, 0679889175, 'A Song Of Ice And Fire', 'George R. Martin', 'Paperback');
INSERT INTO books (id, isbn, title, author, format) VALUES (3, 0740326412, 'The Evolution of Childhood', 'Melvin Konner', 'Paperback');
INSERT INTO books (id, isbn, title, author, format) VALUES (4, 0553096095, 'Inequality and Startification Race,Class, and Gender', 'Robert A. Rothman', 'Paperback');
INSERT INTO books (id, isbn, title, author, format) VALUES (5, 0553098976, 'The Design of Everyday Things', 'Don Norman', 'e-book');
INSERT INTO books (id, isbn, title, author, format) VALUES (6, 0553093476, 'JavaScript from Beginner to Professional', 'Laurence Lars Svekis', 'e-book');


 */