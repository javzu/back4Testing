const jwt= require('jsonwebtoken');

const valida_jwt=(req,res,next)=>{

    const token=req.header('x-token');
    if(!token){
        return res.status(401).json({
            ok:false,
            msg:'No viene Token'
        });
    }
    try{
        const {uid}=jwt.verify(token, process.env.JWT_KEY);
        req.uid=uid;
        next();
    }
    catch(e){
        console.log(e)
        return res.status(401).json({
            ok:false,
            msg:'Error al validar token'
        });
    }
 
}

module.exports={
    valida_jwt
}