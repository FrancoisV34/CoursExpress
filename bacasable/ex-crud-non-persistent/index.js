const express = require('express');
const productRouter = require('./router/productRouter');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/product', productRouter);

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
