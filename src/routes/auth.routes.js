const {Router, application}= require ('express');
const router =Router();
const {userLogin}=require('../controllers/auth.controllers');

router.post('/auth/login', userLogin);


module.exports=router;