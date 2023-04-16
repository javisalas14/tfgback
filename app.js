const express = require("express");
const path = require("path");

const app = express();

app.get("/api", (req,res)=>{
   // res.send("Hola");
   res.json({"users": ["userOne","userTwo", "userThree","userFour"]})});

app.listen(3007,() =>{console.log("backend escuhando en el puerto 3007");
});