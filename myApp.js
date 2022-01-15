var express = require('express');
var app = express();

console.log("Hello World")

let handler = (req,res) =>{
    res.sendFile(__dirname + "/views/index.html")
}

app.get("/",handler)


































 module.exports = app;
