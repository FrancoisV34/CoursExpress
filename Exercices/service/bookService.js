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

const Books = require('../model/bookModel');
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

function getGenreBooks(genre) {
  console.log('dans le service', genre);
  const bookGenre = String(genre).trim().toLowerCase();
  console.log('bookGenre', bookGenre);
  return books.filter(
    (book) =>
      book.genre && String(book.genre).trim().toLowerCase() === bookGenre
  );
}
console.log('export de genreBooks', getGenreBooks('policier'));

// Function to add a new book
function addBook(newBook) {
  books.push(newBook);
  return newBook;
}

// Function to update a book by ID
function updateBook(id, updatedBook) {
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books[index] = { id, ...updatedBook };
    return books[index];
  }
  return null;
}

// Function to delete a book by ID
function deleteBook(id) {
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    const deletedBook = books.splice(index, 1);
    return deletedBook[0];
  }
  return null;
}

module.exports = {
  getAllBooks,
  getAvailableBooks,
  getGenreBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};
