const expres = require('express');
const bodyParser = require('body-parser');
const path= require('path');
require('dotenv').config();
const app= expres();

//DBCONFIG


const server = require('http').createServer(app);

//Path publico
const publicPath= path.resolve(__dirname,'public');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(expres.static(publicPath));
app.use(bodyParser.json())

//Rutas
app.use('/api/sendForm', require('./routes/form'));


server.listen(process.env.PORT,(err)=>{
    if(err) throw new Error(err);

    console.log('Servidor corriendo en puerto ',process.env.PORT)
});