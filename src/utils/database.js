const {Sequelize} = require ('sequelize');
require('dotenv').config();

//crear una instancia  con parametros  de configuarcion de nuestra base de datos
//UN OBJETO DE CONFIGURACION-->credenciales de mi base de datos
const db=  new Sequelize({
 database: process.env.DB_NAME,
 username: process.env.DB_USER,
 host: process.env.DB_HOST,
 port: process.env.DB_PORT,
 password: process.env.DB_PASSWORD,
 dialect: "postgres",
 logging:false
});
 module.exports= db;