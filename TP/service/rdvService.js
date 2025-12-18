const Rdv = require('../model/rdvSchema');

const getAllRdv = async () => {
  console.log('Service: Fetching all equipements');

  return await Rdv.find();
};

const getRdvById = async (id) => {
  return await Rdv.findOne({ id });
};

const addRdv = async (rdvData) => {
  // const { id, titre, description, date_debut, date_fin, done } = datas;
  console.log('Service: Adding new rdv', rdvData);

  if (
    !rdvData.id ||
    !rdvData.titre ||
    !rdvData.date_debut ||
    !rdvData.date_fin
  ) {
    throw new Error(
      'Les champs id, titre, date_debut et date_fin sont obligatoires.'
    );
  }

  const rdv = new Rdv({
    id: rdvData.id,
    titre: rdvData.titre.trim(),
    description: rdvData.description?.trim() || '',
    date_debut: rdvData.date_debut,
    date_fin: rdvData.date_fin,
    done: rdvData.done || false,
  });

  console.log('Datas to save:', rdv);

  return rdv.save();
};

const modifRdv = async (id, rdvData) => {
  const rdv = await Rdv.findOne({ id });
  if (!rdv) {
    throw new Error(`Rdv avec l'ID ${id} non trouvé`);
  }

  const { titre, description, date_debut, date_fin, done } = rdvData;

  if (titre !== undefined) rdv.titre = titre.trim();
  if (description !== undefined) rdv.description = description.trim();
  if (date_debut !== undefined) rdv.date_debut = date_debut;
  if (date_fin !== undefined) rdv.date_fin = date_fin;
  if (done !== undefined) rdv.done = done;

  await rdv.save();
  return rdv;
};

const deleteRdv = async (id) => {
  const rdv = await Rdv.findOne({ id });
  if (!rdv) {
    throw new Error(`Rdv avec l'ID ${id} non trouvé`);
  }

  await rdv.deleteOne();
  return rdv;
};

module.exports = {
  getAllRdv,
  getRdvById,
  addRdv,
  modifRdv,
  deleteRdv,
};
