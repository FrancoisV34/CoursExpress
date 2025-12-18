const rdvService = require('../service/rdvService');

const getAllRdv = async (req, res) => {
  console.log('Controller: Handling request to get all equipements');
  try {
    const rdvs = await rdvService.getAllRdv();
    res.status(200).json({
      success: true,
      data: rdvs,
      count: rdvs.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des équipements',
      error: error.message,
    });
  }
};

const getRdvById = async (req, res) => {
  console.log(
    `Controller: Handling request to get equipement by ID: ${req.params.id}`
  );
  try {
    const rdv = await rdvService.getRdvById(req.params.id);
    res.status(200).json({
      success: true,
      data: rdv,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const addRdv = async (req, res) => {
  console.log('Controller: Handling request to add new rdv');

  try {
    const newRdv = await rdvService.addRdv(req.body);
    res.status(201).json({
      success: true,
      message: 'Rdv créé avec succès',
      data: newRdv,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const modifRdv = async (req, res) => {
  console.log(
    `Controller: Handling request to update rdv by ID: ${req.params.id}`
  );

  try {
    const updatedRdv = await rdvService.modifRdv(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: 'Rdv mis à jour avec succès',
      data: updatedRdv,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteRdv = async (req, res) => {
  console.log(
    `Controller: Handling request to delete rdv by ID: ${req.params.id}`
  );

  try {
    const deletedRdv = await rdvService.deleteRdv(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Rdv supprimé avec succès',
      data: deletedRdv,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllRdv,
  getRdvById,
  addRdv,
  modifRdv,
  deleteRdv,
};
