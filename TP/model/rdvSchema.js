const mongoose = require('mongoose');

const rdvSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    titre: {
      type: String,
      required: [true, 'Le nom est requis'],
      trim: true,
    },
    description: {
      type: String,
      // required: [true, 'La description est requise'],
      trim: true,
    },
    date_debut: {
      type: Number,
      required: [true, 'La date est requise'],
    },
    date_fin: {
      type: Number,
      required: [true, 'La date est requise'],
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: false,
    collection: 'Rdvs',
  }
);

const Rdv = mongoose.model('Rdv', rdvSchema);

module.exports = Rdv;
