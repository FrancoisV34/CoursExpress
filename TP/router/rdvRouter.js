const express = require('express');
const router = express.Router();
const rdvController = require('../controller/rdvController');

router.get('/', rdvController.getAllRdv);
router.get('/:id', rdvController.getRdvById);
router.post('/', rdvController.addRdv);
router.put('/:id', rdvController.modifRdv);
router.delete('/:id', rdvController.deleteRdv);

module.exports = router;
