require('dotenv').config();

const config = {
    db: {
      host: process.env.HOST,
      user: process.env.DBUSER,
      password: process.env.PASSWORD,
      database: process.env.DB,
      connectionLimit:3,
    },
}

module.exports=config;