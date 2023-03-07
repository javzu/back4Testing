const connection = require('../database/database_connection');
const FormData = require("../models/form_data");


const AddFormData=(data)=> {

    connection.query("INSERT INTO consutlas ?",data, (error, result) => {
       if (error) throw  error;
       console.log('resultado ',result)
    });
}

const GetAllData=()=> {

    connection.query("Select * from consultas", (error, result) => {
       if (error) throw  error;
       console.log('resultado ',result);
    });
}

module.exports=[
    AddFormData,
    GetAllData,
]