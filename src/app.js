//importar express
const express=require('express');
//creo una instancia de express
const app= express();
const authRoutes= require('./routes/auth.routes');
const db= require("./utils/database");
const  initModels= require('./models/init.models');
const Users = require('./models/users.model');
const Todos = require('./models/todos.models');
const userRoutes= require('./routes/users.routes');
const taskRoutes=require('./routes/tasks.routes');
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use (cors());

const PORT=process.env.PORT;

//probando la conexion a la base de datos
db.authenticate()
.then(()=>console.log("autenticación exitosa"))
.catch((error)=>console.log(error));

initModels();
//vamos a usar ek metodo sync de ntra db
db.sync({force:false})
.then(()=>console.log('Base de datos sincronizada')) 
.catch((error)=>console.log(error));

app.get('/',(req,res)=>{
 res.status(200).json({messagge: "Bienvenido al servidor"});
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', taskRoutes);
app.use('/api/v1', authRoutes);
//definir las rutas de nuestros endpoints (de ahora en adelante ep)
//todas las consultas de usuarios
//localhost:8000/users
//localhost:8000/todos


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