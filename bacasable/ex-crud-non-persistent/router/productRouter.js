const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

// GET - Récupère tous les ordinateurs
router.get('/', productController.getAllProducts);

// GET - Récupère un ordinateur par son ID
router.get('/:id', productController.getProductById);

// POST - Crée un nouvel ordinateur
router.post('/', productController.createProduct);

// PUT - Met à jour un ordinateur existant
router.put('/:id', productController.updateProduct);

// DELETE - Supprime un ordinateur
router.delete('/:id', productController.deleteProduct);

module.exports = router;
