//instancia para la conexion db
const db=require("../utils/database");
//tipos de datos de sequelize
const { DataTypes }=require("sequelize");

//definir el modelo de usuarios
//los modelos se definen con mayuscula
//parametros:nombre de la tabla y los atributos
const Users= db.define("users",{
 id: {
  primaryKey: true,
  type: DataTypes.INTEGER,
  autoIncrement: true,
  allowNull:false,
  unique:true,
 },
 username:{
  type: DataTypes.STRING,
  allowNull:false,
  unique: true,
 },
 email: {
  type: DataTypes.STRING,
  allowNull:false,
  unique: true,
  validate:{
   isEmail:true
  }
 },
 password:{
  type: DataTypes.STRING,
  allowNull:false,
  
 },
});

module.exports=Users;