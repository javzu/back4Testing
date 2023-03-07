const { response } = require("express");
const { validationResult } = require("express-validator");
const FormData = require("../models/form_data");


const crearFormulario = async (req, res = response) => {

    try {
        const formulario = new FormData(req.body);
       const inserted= await formulario.AddFormData();
       if(!inserted){
       return res.status(400).json({
            ok:false,
            msg:'Problema de servidor'
        });
       }
        res.json({
            ok: true,
            msg: 'Consulta enviada',
        });
    }
    catch (e) {
        console.log('error ', e)
    }

}


module.exports = {
 crearFormulario
};


// CREATE TABLE IF NOT EXISTS consultas (
//     seq_consulta INT AUTO_INCREMENT PRIMARY KEY,
//     nombre VARCHAR(100) NOT NULL,
//     empresa VARCHAR(40) NOT NULL,
//     telefono VARCHAR(20) NOT NULL,
//     email VARCHAR(30) NOT NULL,
//     tema INT NOT NULL,
//     mensaje TEXT NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// CREATE TABLE IF NOT EXISTS tema (
//     seq_tema INT NOT NULL,
//     descripción VARCHAR(100) NOT NULL
// );