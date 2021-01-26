const express = require('express');
require('dotenv').config();
const {dbConnection} = require('./database/config');
var cors = require('cors')

 
//Crear el Servidor de Express
const app = express();

// CORS
app.use(cors())

//Base de Datos

dbConnection();


//Directorio Public
app.use(express.static('public'));

// Lectura y Parseo del Body
app.use(express.json());


app.use('/api/auth',require('./routes/auth'));

app.use('/api/events',require('./routes/event'));


app.listen( process.env.PORT,()=>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
} );

