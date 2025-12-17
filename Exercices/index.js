const express = require('express');
const router = require('./route/bookRoutes');
const db = require('./config/books');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/', router);

const initDatabase = async () => {
  try {
    await db.sync(); // permet de se connecter et de creer la base de donnees

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erreur initialisation:', error);
  }
};

initDatabase();
