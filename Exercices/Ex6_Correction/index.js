const express = require('express');
const db = require('./config/database');
const { Library, Book, User } = require('./config/associations');
const bookRouter = require('./router/bookRouter');
const libraryRouter = require('./router/libraryRouter');
const authRouter = require('./router/authRouter');
const swaggerUi = require('swagger-ui-express');
const apiSpec = require('./swagger/swagger');

const app = express();
const PORT = 3007;

app.use(express.json());

// Routes d'authentification
app.use('/auth', authRouter);

// Routes de l'API
app.use('/books', bookRouter);
app.use('/libraries', libraryRouter);

//doc Swagger
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Ma Super API - Documentation',
    customfavIcon: '/assets/favicon.ico',
  })
);

const initDatabase = async () => {
  try {
    await db.sync(); // permet de se connecter et de creer la base de donnees
    app.listen(PORT, () => {
      console.log(`Serveur demarre sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erreur initialisation:', error);
  }
};

initDatabase();
