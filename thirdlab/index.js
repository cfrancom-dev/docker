const express = require('express');
 const app = express();
 const port = 3000;
 app.get('/', (req, res) => {
 res.send('¡Bienvenido a mi aplicación NodeJS en Docker!');
 });
 app.listen(port, () => {
 console.log(`Aplicación escuchando en http://localhost:${port}`);
 });
 app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal.');
});
