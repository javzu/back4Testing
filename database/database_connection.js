const mysql = require('mysql')
const config=require('../database/database_config');
const {promisify} = require('util');

  
    console.log('DB connection...');
    const connection = mysql.createPool(config.db);
  
    connection.getConnection(error=>{
        if (error) throw error;
        console.log('DB connected');
    });
    
  
    connection.query=promisify(connection.query);



module.exports=connection;
