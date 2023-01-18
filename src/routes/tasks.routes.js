//aqui van todas las rutas de usuarios
const {Router}= require('express');
const router= Router();
const {getAllTasks,getTaskById,createTask,updateTask,deleteTask,getTasksWithCategories}=require('../controllers/tasks.controllers');
const authMiddleware= require('../middlewares/auth.middlewares');
//GET a tasks

//vamos a obtener el resultado de consultar a todas las tareas de la db
//nuestro CONTROLADOR 
router.get('/todos', authMiddleware, getAllTasks);
router.get('/todos/:id', authMiddleware, getTaskById);
router.get('/todos/:id/categories', authMiddleware, getTasksWithCategories);

router.post('/todos', authMiddleware, createTask);

router.put('/todos/:id', authMiddleware, updateTask);

router.delete('/todos/:id', authMiddleware, deleteTask);

module.exports=router;