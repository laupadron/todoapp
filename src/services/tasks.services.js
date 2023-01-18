const Tasks=require('../models/todos.models');
const Categories = require('../models/categories.models');
const TodosCategories=require('../models/todos-categories.models');
class TasksServices{
static async getAll(){
 try {
  const result= await Tasks.findAll();
  return result;
 } catch (error) {
  throw error;
 }
}


static async getTaskById(id){
 try {
  const result= await Tasks.findByPk(id);
  return result;
 } catch (error) {
  throw error;
 }
}

static async getWithCategories(id){
 try {
  const result= await Tasks.findOne({
   where:{id},
   include:{
    model:TodosCategories,
    as:"categories",
    attributes:["id"],
    include:{
     model: Categories,
     as:"category",
     attributes:["name"],
    }
   }
  });
  return result;
 } catch (error) {
  throw error
 }
}

static async createTask (todo){
 try {
  const result = await Tasks.create(todo);
  return result;
 } catch (error) {
  throw error;
 }
}

static async updateTask(id,field){
 try {
  const result = await Tasks.update(field,{where:{id}});
  return result;
 } catch (error) {
  throw error;
 }
}

static async deleteTask(id){
 try {
  const result= await Tasks.destroy(id);
  return result;
 } catch (error) {
  throw error;
 }
}
}
 
 module.exports=TasksServices;