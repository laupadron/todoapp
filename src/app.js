//importar express
const express=require('express');
//creo una instancia de express
const app= express();
app.use(express.json());
const db= require("./utils/database");
const  initModels= require('./models/init.models');
const Users = require('./models/users.model');
const Todos = require('./models/todos.models');


const PORT=8000;

//probando la conexion a la base de datos
db.authenticate()
.then(()=>console.log("autenticación exitosa"))
.catch((error)=>console.log(error));

initModels();
//vamos a usar ek metodo sync de ntra db
db.sync({alter:false})
.then(()=>console.log('Base de datos sincronizada')) 
.catch((error)=>console.log(error));

app.get('/',(req,res)=>{
 res.status(200).json({messagge: "Bienvenido al servidor"});
});
//definir las rutas de nuestros endpoints (de ahora en adelante ep)
//todas las consultas de usuarios
//localhost:8000/users
//localhost:8000/todos

//GET a users

//vamos a obtener el resultado de consultar a todos los usuarios de la db
app.get('/users', async(req,res)=>{
 try{
  const result= await Users.findAll(); //es como un select * from
  res.status(200).json(result);
 }catch(error){
  console.log(error)
 }
 });
 //obtener un usuario sabiendo su id
 app.get("/users/:id", async(req,res)=>{
  try{
  const {id}= req.params;
  const result= await Users.findByPk(id);
  res.status(200).json(result);
  }catch(error){
   console.log(error);
  }
 });
 //obtener un usuario por username
 app.get('/users/username/:username', async (req,res)=>{
  try{
    const {username}= req.params;
    const result= await Users.findOne({where:{username}});
    res.status(200).json(result);
  }catch(error){
   console.log(error);
  }
 });
 //CREANDO un usuario
 app.post('/users', async(req,res)=>{
  try {
  const user= req.body;
   const result= await Users.create(user);
   res.status(201).json(result)
  } catch (error) {
   res.status(400).json(error.messagge);
   console.log(error);
  }
 });
 //ACTUALIZAR un usuario, solo podemos cambiar el password
 app.put('/users/:id', async(req,res)=>{
  try {
   const {id}= req.params;
   const field= req.body;
   const result= await Users.update(field,{
    where:{id}
   });
   res.status(200).json(result);
  } catch (error) {
   res.status(400).json(error.messagge);
   console.log(error);
  }
 });
 //ELIMINAR un usuario
 app.delete('/users/:id', async(req,res)=>{
  try {
   const {id}= req.params;
   const result= await Users.destroy({
    where:{id}
   });
   res.status(200).json(error.messagge);
  } catch (error) {
   res.status(400).json(error.messagge);
   console.log(error);
  }
 });
 //GET a tareas

//vamos a obtener el resultado de consultar a todas las tareas de la db
app.get('/todos', async(req,res)=>{
 try{
  const result= await Todos.findAll(); //es como un select * from
  res.status(200).json(result);
 }catch(error){
  console.log(error)
 }
 });
 //obtener una tarea sabiendo su id
 app.get("/todos/:id", async(req,res)=>{
  try{
  const {id}= req.params;
  const result= await Todos.findByPk(id);
  res.status(200).json(result);
  }catch(error){
   console.log(error);
  }
 });
 //CREANDO una tarea
 app.post('/todos', async(req,res)=>{
  try {
  const todo= req.body;
   const result= await Todos.create(todo);
   res.status(201).json(result)
  } catch (error) {
   res.status(400).json(error.messagge);
   console.log(error);
  }
 });
 //ACTUALIZAR una tarea, solo podemos cambiar el isComplete
 app.put('/todos/:id', async(req,res)=>{
  try {
   const {id}= req.params;
   const field= req.body;
   const result= await Todos.update(field,{
    where:{id}
   });
   res.status(200).json(result);
  } catch (error) {
   res.status(400).json(error.messagge);
   console.log(error);
  }
 });
 //ELIMINAR una tarea
 app.delete('/todos/:id', async(req,res)=>{
  try {
   const {id}= req.params;
   const result= await Todos.destroy({
    where:{id}
   });
   res.status(200).json(error.messagge);
  } catch (error) {
   res.status(400).json(error.messagge);
   console.log(error);
  }
 });




app.listen (PORT,()=>{
 console.log (`servidor corriento en el puerto ${PORT}`);
});