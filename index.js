/*****************************************************************
Part 1: Understanding Objects

You are given the task of representing a book in a library system. 
Use an object to model the book with the following information:

- Title: "JavaScript: The Definitive Guide"
- Author: "David Flanagan"
- Published Year: 2020
- Genre: "Programming"*/

const books = {
  Title: "JavaScript: The Definitive Guide",
  Author: "David Flanagan",
  PublishedYear: 2020,
  Genre: "Programming",
};
console.log(books.Title, books.PublishedYear);
books.pageCount = 1096;
console.log(books);
books.ISBN = "978-1491952023";
console.log(books);
books.PublishedYear = 2021;
console.log(books);

books.Author = ["David Flanagan", "Another Author"];
console.log(books);
books.review = [
  { reviewer: "Book Critic", comment: "A comprehensive guide to JavaScript." },
];
console.log(books);
