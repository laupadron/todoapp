const jwt= require ('jsonwebtoken');
require('dotenv').config();

const authMiddleware=(req,res,next)=>{
let {authorization: token} = req.headers;
token= token.replace("Bearer ", "");
console.log(token);
 jwt.verify(token, process.env.JWT_SECRET, 
{algorithms:"HS512", expiresIn: "2 days"},
(err,decoded)=>{
  if(err){
    res.status(400).json({
      error: "invalid token",
      messagge: "el token no es válido o ya expiró, envia un token correcto"
    });
  }else{
    next();
  }
}
);


//next();
}

module.exports=authMiddleware;