const Books = require('../model/bookModel');
const { Op } = require('sequelize');
// Function to get all books
const getAllBooks = async () => {
  return await Books.findAll();
};

// Function to get a book by ID
const getBookById = async (id) => {
  return await Books.findByPk(id);
};

//rechercher les livres disponibles
const getAvailableBooks = async () => {
  return await Books.findAll({ where: { disponible: true } });
};

//add a new book
const addBook = async (bookData) => {
  const { titre, auteur, annee_publication, genre, disponible } = bookData;
  console.log('dans le service avant le if', bookData);
  if (!titre || titre.trim() === '') {
    throw new Error('Le nom du livre est requis');
  }
  console.log('titre', titre);
  const newBook = await Books.create({
    titre: titre.trim(),
    auteur: auteur.trim(),
    annee_publication: annee_publication || null,
    genre: genre.trim(),
    disponible: disponible !== undefined ? disponible : true,
  });
  console.log('dans le service', newBook);
  return newBook;
};

// Function to get books by genre
const getGenreBooks = async (genre) => {
  console.log('dans le service', genre);
  return await Books.findAll({
    where: {
      genre: genre,
    },
  });
};

// function getGenreBooks(genre) {
//   console.log('dans le service', genre);
//   const bookGenre = String(genre).trim().toLowerCase();
//   console.log('bookGenre', bookGenre);
//   return books.filter(
//     (book) =>
//       book.genre && String(book.genre).trim().toLowerCase() === bookGenre
//   );
// }
// console.log('export de genreBooks', getGenreBooks('policier'));

// Function to update a book by ID
const updateBook = async (id, bookData) => {
  const book = await Books.findByPk(id);
  if (!book) {
    throw new Error(`Livre avec l'ID ${id} non trouvé`);
  }

  const { titre, auteur, annee_publication, genre, disponible } = bookData;

  if (titre !== undefined) book.titre = titre.trim();
  if (auteur !== undefined) book.auteur = auteur.trim();
  if (annee_publication !== undefined)
    book.annee_publication = annee_publication;
  if (genre !== undefined) book.genre = genre.trim();
  if (disponible !== undefined) book.disponible = disponible;

  await book.save();
  return book;
};

// Function to delete a book by ID
const deleteBook = async (id) => {
  const book = await Books.findByPk(id);
  if (!book) {
    throw new Error(`Livre avec l'ID ${id} non trouvé`);
  }

  await book.destroy();
  return book;
};

module.exports = {
  getAllBooks,
  getAvailableBooks,
  getGenreBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};

let books = [
  {
    id: 1,
    titre: 'Le Petit Prince',
    auteur: 'Antoine de Saint-Exupéry',
    annee_publication: 1943,
    genre: 'Conte philosophique',
    disponible: true,
  },
  {
    id: 2,
    titre: '1984',
    auteur: 'George Orwell',
    annee_publication: 1949,
    genre: 'Policier',
    disponible: false,
  },
  {
    id: 3,
    titre: 'To Kill a Mockingbird',
    auteur: 'Harper Lee',
    annee_publication: 1960,
    genre: 'Roman',
    disponible: true,
  },
];
