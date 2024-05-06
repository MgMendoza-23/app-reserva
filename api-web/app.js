const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");

const app=express();

//rutas
const AuthRoutes=require('./routers/Auth');
const UserRoutes=require("./routers/Usuario");
//middlewares para el funciomamiento
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors());

//uploads
app.use(express.static('uploads'));

//configurar las rutas
app.use("/api", AuthRoutes);
app.use("/api",UserRoutes)
module.exports=app;