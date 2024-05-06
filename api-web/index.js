const mongoose =require('mongoose');

const {DB_HOST,DB_NAME,DB_PASSWORD,DB_USER, IP_SERVER}=require('./constantes');

const app=require("./app");
const dbURL=`mongodb://${IP_SERVER}:${DB_HOST}/${DB_NAME}`;  

const PORT= process.env.PORT || 4000;

mongoose.connect(dbURL)
.then(mongoose=>console.log("Conectado a la bd en el puerto 27017"))
.catch(err=>console.log(err));

app.listen(PORT, ()=>{
    console.log(`http://${IP_SERVER}:${PORT}/api`);
})        