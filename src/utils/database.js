const {Sequelize} = require ('sequelize');

//crear una instancia  con parametros  de configuarcion de nuestra base de datos
//UN OBJETO DE CONFIGURACION-->credenciales de mi base de datos
const db=  new Sequelize({
 database: "todoapp",
 username: "postgres",
 host: "localhost",
 port: "5432",
 password: "ruut",
 dialect: "postgres"
});
 module.exports= db;