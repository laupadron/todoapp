//vamos a importar todos nuestros modelos creados

const Users= require('./users.model');
const Todos= require('./todos.models');
const Categories= require('./categories.models');
const TodosCategories= require('./todos-categories.models');

const initModels= ()=>{
 
 Categories;
 TodosCategories;
//aqui vamos a crear las relaciones
//hasOne(tiene un-solo se usa en relaciones de uno a uno) 
//- hasMany(tiene muchos) 
//- belongsTo(pertenece a ... nos indica quien tiene la llave foranea)

//relación de uno a muchos
Todos.belongsTo(Users,{as:'author', foreignKey:'user_id'});
Users.hasMany(Todos, {as:'task', foreignKey: 'user_id'});
//relacion many to many
TodosCategories.belongsTo(Todos,{as:'task', foreignKey:'todo_id'});
Todos.hasMany(TodosCategories, {as: 'category', foreignKey:'todo_id'});

TodosCategories.belongsTo(Categories,{as:'category', foreignKey:'category_id'});
Categories.hasMany(TodosCategories,{as: 'task', foreignKey:'category_id'});
};

module.exports=initModels;