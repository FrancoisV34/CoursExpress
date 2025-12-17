const { DataTypes } = require('sequelize');
const db = require('../config/books');

const Book = db.define(
  'Book',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    auteur: {
      type: DataTypes.STRING,
    },
    annee_publication: {
      type: DataTypes.INTEGER,
    },
    genre: {
      type: DataTypes.STRING,
    },
    disponible: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: 'books',
    timestamps: false,
  }
);

module.exports = Book;
