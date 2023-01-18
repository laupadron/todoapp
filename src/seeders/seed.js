const db= require('../utils/database');
const Users=require ('../models/users.model');
const Todos=require('../models/todos.models');
const Categories= require('../models/categories.models');
const TodosCategories=require('../models/todos-categories.models');
const UsersCategories = require('../models/users-categories.models');

const users =[
 {username:"Laura", email:"laupadron@gmail.com", password:"1234"},
 {username:"Sofia", email:"sofimaidana@gmail.com", password:"3456"},
 {username:"Matilda", email:"matigaray@gmail.com", password:"7896"}
];
const todos=[
 {title:"estudiar node", description:"descripcion para tarea 1", user_id:1},
 {title:"pasear al perro", description:"descripcion para tarea 2", user_id:1},
 {title:"lavar platos", user_id:2},
 {title:"ir al chequeo mensual", description:"descripcion para tarea 4", user_id:3, isCompete:true},
];
const categories=[
 {name:"personal"},
 {name:"educación"},
 {name:"salud"},
 {name:"trabajo"},
 {name:"hogar"},
 {name:"cocina"},
 {name:"deporte"},
 {name:"ocio"},
 {name:"financiero"},
 {name:"entretenimiento"},
];
const todosCategories=[
 {categoryId:1, todoId:1},
 {categoryId:2, todoId:1},
 {categoryId:4, todoId:1},
 {categoryId:1, todoId:2},
 {categoryId:7, todoId:2},
 {categoryId:10, todoId:2},
 {categoryId:3, todoId:2},
 {categoryId:6, todoId:3},
 {categoryId:5, todoId:3},
 {categoryId:1, todoId:4},
 {categoryId:3, todoId:4}
]; 


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
 },100);
 setTimeout(()=>{
  categories.forEach((category)=>Categories.create(category));
},250);
setTimeout(()=>{
 todosCategories.forEach((tc)=>TodosCategories.create(tc));
},400);

})
.catch(error=>console.log(error));
