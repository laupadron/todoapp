const jwt= require('jsonwebtoken');
const AuthService=require('../services/auth.services');
require('dotenv').config();


const userLogin= async(req,res)=>{
try {
 const {email, password}=req.body;
 const response= await AuthService.login(email,password);
 if(response.isValid){
  const data={
   email: response.result.email,
   username: response.result.username,
   id: response.result.id
  };
  //firmamos un nuevo token
  const token= jwt.sign(data, process.env.JWT_SECRET,{algorithm:'HS512'})
  data.token=token;
  console.log(data);
  res.json(data);
 }else{
  res.status(401).json({message:'credenciales inválidas'});
 }
// res.json(result);
} catch (error) {
 res.status(400).json(error.message);
}
}

module.exports={userLogin}