const dotenv = require("dotenv");   // requiriendo dotenv
dotenv.config();

const express = require("express"); // requiriendo express
const app = express();              // iniciando la app

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Iniciando el servidor perro en el puerto ${port}`);
})