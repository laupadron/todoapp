const TasksServices= require('../services/tasks.services');

const getAllTasks=async(req,res)=>{
 try {
  const result= await TasksServices.getAll();
  res.status(200).json(result);
 } catch (error) {
  res.status(400).json(error.message);
 }
};

const getTaskById=async(req,res)=>{
 try {
  const {id}= req.params;
  const result= await TasksServices.getTaskById(id);
  res.status(200).json({
   message:"enviando tareas con caategorias",
   data:result,
  });
 } catch (error) {
  res.status(400).json({
   error: error.message,
   details: error.stack
  });
 }
};

const getTasksWithCategories =async (req,res)=>{
 try {
  const{id}=req.params;
  const result=await TasksServices.getWithCategories(id);
  res.json(result);
 } catch (error) {
  res.status(400).json(error.message);
 }
}

const createTask=async(req,res)=>{
 try {
  const todo= req.body;
  const result=await TasksServices.createTask(todo);
  res.status(201).json(result);
 } catch (error) {
  res.status(400).json(error.message);
 }
};

const updateTask=async(req,res)=>{
 try {
  const {id}= req.params;
  const field= req.body;
  const result=await TasksServices.updateTask(id,field);
  res.status(200).json(result);
 } catch (error) {
  res.status(400).json(error.message);
 }
};

const deleteTask=async(req,res)=>{
 try {
  const {id}= req.params;
  const result= await TasksServices.deleteTask(id);
  res.status(200).json(result);
 } catch (error) {
  res.status(400).json(error.message);
 }
};

module.exports={getAllTasks,getTaskById,createTask,updateTask,deleteTask,getTasksWithCategories};