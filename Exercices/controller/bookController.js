const serviceBook = require('../service/bookService');
const express = require('express');
const router = express.Router();

// Route to get all books

const getAllBooks = async (req, res) => {
  try {
    const books = await serviceBook.getAllBooks();
    res.status(200).json({
      success: true,
      data: books,
      count: books.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des livres',
      error: error.message,
    });
  }
};

// Route to get a book by ID
const getBookById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const book = await serviceBook.getBookById(id);
    if (!book) {
      res.status(404).json({
        success: false,
        message: 'Livre non trouvé',
      });
    } else {
      res.status(200).json({
        success: true,
        data: book,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération du livre',
      error: error.message,
    });
  }
};

//route book disponibles
const disponibleBooks = async (req, res) => {
  try {
    const books = await serviceBook.getAvailableBooks();

    res.status(200).json({
      success: true,
      data: books,
      count: books.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des livres disponibles',
      error: error.message,
    });
  }
};

//route book genre policier
const genreBooks = async (req, res) => {
  console.log('dans le controller.js');
  try {
    const genre = req.query.genre;
    console.log('genre recupéré', genre);
    const result = await serviceBook.getGenreBooks(genre);
    console.log(result);
    res.status(200).json({
      success: true,
      data: result,
      count: result.length,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: 'Erreur serveur, le try ne fonctionne donc pas ici rooh grrr',
    });
  }
};

// Route to add a new book
const addBook = async (req, res) => {
  try {
    const { newBook } = req.body;
    const addedBook = await serviceBook.addBook(newBook);
    res.status(201).json({
      success: true,
      message: 'Livre ajouté avec succès',
      data: addedBook,
    });
  } catch (error) {
    res.status(500).json({
      error: "Erreur lors de l'ajout du livre",
    });
  }
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
