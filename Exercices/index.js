const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/helloworld', (req, res) => {
  res.send('Hello World');
});

// app.get('/params/:name', (req, res) => {
//   res.send(`Le paramètre est : ${req.params.name}`);
// });

//ou sinon cette version plus longue mais peut etre utile pour lisibilité ?
app.get('/params/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Le paramètre est : ${name}`);
});

app.get('/query', (req, res) => {
  res.send(`Le paramètre est : ${req.query.name}`);
});

app.get('/not-found', (req, res) => {
  res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
