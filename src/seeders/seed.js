const db= require('../utils/database');
const Users=require ('../models/users.model');
const Todos=require('../models/todos.models');

const users =[
 {username:'Laura', email:'laupadron@gmail.com', password:'1234'},
 {username:'Sofia', email:'sofimaidana@gmail.com', password:'3456'},
 {username:'Matilda', email:'matigaray@gmail.com', password:'7896'}
];
const todos=[
 {title:'tarea 1', description:'descripcion para tarea 1', userId:1},
 {title:'tarea 2', description:'descripcion para tarea 2', userId:1},
 {title:'tarea 3', userId:2},
 {title:'tarea 4', description:'descripcion para tarea 4', userId:3},
];
// const categories=[];
// const todosCategories=[];

//sincronizo base de datos para insertar informacion
//cada modelo puede contener los sig metodos:
//create
//findOne, findAll, findByPk
//update
//destroy
db.sync({force:true})
.then(()=>{
 console.log('iniciando sembradio');
 users.forEach((user)=>Users.create(user));
 setTimeout(()=>{
  todos.forEach((todo)=>Todos.create(todo));
 },100)
})
.catch(error=>console.log(error));
