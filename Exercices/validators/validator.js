const { body, param, validationResult } = require('express-validator');

// Validator for adding a new book
const validateAddBook = [
  body('titre')
    .notEmpty()
    .withMessage('Le titre du livre est requis')
    .isString()
    .withMessage('Le titre doit être une chaîne de caractères')
    .trim(),
  body('auteur')
    .notEmpty()
    .withMessage("L'auteur est requis")
    .isString()
    .withMessage("L'auteur doit être une chaîne de caractères")
    .trim(),
  body('annee_publication')
    .optional()
    .isInt({ min: 0 })
    .withMessage("L'année de publication doit être un entier positif"),
  body('genre')
    .optional()
    .isString()
    .withMessage('Le genre doit être une chaîne de caractères')
    .trim(),
  body('disponible')
    .optional()
    .isBoolean()
    .withMessage('La disponibilité doit être un booléen'),
];

//validator pour id dans les parametres
const validateIdParam = [
  param('id').isInt({ min: 1 }).withMessage("L'ID doit être un entier positif"),
];

// Middleware to handle validation results
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array.map((err) => ({
        field: err.parth,
        message: err.msg,
      })),
    });
  }
  next();
};

module.exports = {
  handleValidation,
  validateAddBook,
  validateIdParam,
};
