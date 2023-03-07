const { response } = require("express");
const { validationResult } = require("express-validator");
const FormData = require("../models/form_data");


const crearFormulario = async (req, res = response) => {

    try {
        const formulario = new FormData(req.body);
       const inserted= await formulario.AddFormData();
       if(inserted){
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