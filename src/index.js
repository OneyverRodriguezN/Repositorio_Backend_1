const express = require('express');
const conectarDB = require('../config/db');
const cors = require('cors')

// Creamos el Servidor
const app = express();

//Enlazamos la Conexion con DB
conectarDB();
app.use(cors())

app.use(express.json());

// Ruta Principal del Proyecto
app.use('/api/clientes', require('../routes/rutas'))

// Definir ruta Mensaje de comunicacion de Servidor
app.get('/',(req, res) =>{
    res.send('Buenos Dias Oneyver')
})

//Constante para configuracion local o nube de puerto
const port = process.env.PORT || 4000; 

app.listen(port, ()=>{
    console.log('Servidor Conectado');
});










