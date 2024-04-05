const mongoose = require('mongoose')
require('dotenv').config();

// conexion con MongoDB
const conectarDB = () =>{
    mongoose
    .connect(process.env.DB_Mongo)
    .then(() => console.log('Conexion MongoDB Exitosa'))
    .catch((err) => console.error(err));
}

module.exports = conectarDB;
