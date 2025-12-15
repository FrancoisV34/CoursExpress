const serviceBook = require('../service/bookService');
const express = require('express');
const router = express.Router();

// Route to get all books

const getAllBooks = (req, res) => {
  const books = serviceBook.getAllBooks();
  res.json(books);
};

// Route to get a book by ID
const getBookById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const book = serviceBook.getBookById(id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send('Book not found');
  }
};

//route book disponibles
const disponibleBooks = (req, res) => {
  const books = serviceBook.getAvailableBooks();
  res.json(books);
};

//route book genre policier
const genreBooks = (req, res) => {
  console.log('dans le controller.js');
  try {
    const genre = req.query.genre;
    console.log('genre recupéré', genre);
    const result = serviceBook.getGenreBooks(genre);
    console.log(result);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: 'Erreur serveur, le try ne fonctionne donc pas ici rooh grrr',
    });
  }
};

// Route to add a new book
const addBook = (req, res) => {
  const newBook = req.body;
  const addedBook = serviceBook.addBook(newBook);
  res.status(201).json(addedBook);
};

// Route to update a book by ID
const updateBook = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updatedBookData = req.body;
  const updatedBook = serviceBook.updateBook(id, updatedBookData);
  if (updatedBook) {
    res.json(updatedBook);
  } else {
    res.status(404).send('Book not found');
  }
};

// Route to delete a book by ID
const deleteBook = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const deletedBook = serviceBook.deleteBook(id);
  if (deletedBook) {
    res.json(deletedBook);
  } else {
    res.status(404).send('Book not found');
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  disponibleBooks,
  genreBooks,
  addBook,
  updateBook,
  deleteBook,
};
