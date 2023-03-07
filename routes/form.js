const {Router, response }= require('express');
const {check} = require('express-validator');
const { crearFormulario } = require('../controllers/create_form_data');
const { dataValidation } = require('../middlewares/data_validation');
const router=Router();

router.post('/', [
    check('nombre','El campo nombre es obligatorio').not().isEmpty(),
    check('empresa','El campo empresa es obligatorio').not().isEmpty(),
    check('email','El correo es obligatorio').isEmail(),
    check('telefono','El campo telefono es obligatorio').not().isEmpty(),
    check('tema','El campo tema es obligatorio').not().isEmpty(),
    check('mensaje','El campo mensaje es obligatorio').not().isEmpty(),
    dataValidation,
 ],crearFormulario);

 module.exports=router;