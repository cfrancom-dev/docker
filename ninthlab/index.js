require('dotenv').config();
const express = require('express');
const app = express();

// Leer variables de entorno
const password = process.env.PASSWORD;
const apiUrl = process.env.API_URL;
const apiToken = process.env.API_TOKEN;

app.get('/', (req, res) => {
  res.send(`Password: ${password}, API URL: ${apiUrl}, API Token: ${apiToken}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
