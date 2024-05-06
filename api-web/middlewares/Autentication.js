const jwt=require("../utils/jwt");

function asureAuth(req,res,next){
    if(!req.headers.authorization){
        return res.status(403).send({
            msg: "La cabecera no tiene la peticion"
        })
    }
    const token=req.headers.authorization.replace("Bearer ","");

    try {
        const payload = jwt.decoded(token);
        const {exp}=payload;
        const currentData=new Date().getTime();

        if(exp <= currentData){
            return res.status(400).send({
                msg: "El token ha expirado"
            })
        }
        req.usuario=payload;
        next();

    } catch (error) {
        return res.status(400).send({
            msg: "Token no encontrado o no valido"
        })
    }
}

module.exports={
    asureAuth
}