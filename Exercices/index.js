const express = require('express');
const productRouter = require('./route/bookRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/', productRouter);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
