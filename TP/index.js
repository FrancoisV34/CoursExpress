const express = require('express');
const connectDB = require('./config/configData');
const rdvRouter = require('./router/rdvRouter');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/rdv', rdvRouter);

const startServer = async () => {
  try {
    await connectDB(); // Connexion à MongoDB
    app.listen(PORT, () => {
      console.log(`Serveur démarré sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erreur initialisation:', error);
  }
};

startServer();
