//aqui van todas las rutas de usuarios
const {Router}= require('express');
const router= Router();
const {getAllUsers,getUserById,createUser,updateUser,deleteUser, getUserWithTasks}=require('../controllers/users.controllers');
const authMiddleware=require('../middlewares/auth.middlewares');
//GET a users

//vamos a obtener el resultado de consultar a todos los usuarios de la db
//nuestro CONTROLADOR 
router.get('/users', authMiddleware, getAllUsers);

router.get('/users/:id', authMiddleware, getUserById);

//OBTENER A UN USUARIO CON SUS TAREAS
router.get('/users/:id/todos', authMiddleware, getUserWithTasks);

router.post('/users', createUser);

router.put('/users/:id', authMiddleware, updateUser);

router.delete('/users/:id', authMiddleware, deleteUser);

module.exports=router;