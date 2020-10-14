import express from 'express';

const app = express();


// Rota = Conjunto
// Recurso = Usuario
// Metodos HTTP = GET, POSt, PUT, DELETE
// Parametros

app.get('./users', (request, response) => {
    return response.json({ message: 'Hello World' })
});

app.listen(3333);
