const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/usuarios', (req, res) => {
  res.send('¡Lista de usuarios!');
});

app.listen(3000, () => {
  console.log('La aplicación está corriendo en el puerto 3000.');
});