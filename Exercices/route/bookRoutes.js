const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');
const bookValidator = require('../validators/validator');

// Route to get all books
router.get('/books', bookController.getAllBooks);

// Route to get a book by ID
router.get(
  '/books/:id',
  bookValidator.validateIdParam,
  bookController.getBookById
);

//route to get books disponibles
router.get('/available', bookController.disponibleBooks);

//route to get books genre policier
router.get('/genre', bookController.genreBooks); // GET /genre?genre=ta-recherche-ici (exemple: /genre?genre=policier)

// Route to add a new book
router.post('/books', bookValidator.validateAddBook, bookController.addBook);

// Route to update a book by ID
router.put(
  '/books/:id',
  bookValidator.validateIdParam,
  bookController.updateBook
);

// Route to delete a book by ID
router.delete(
  '/books/:id',
  bookValidator.validateIdParam,
  bookController.deleteBook
);

module.exports = router;
