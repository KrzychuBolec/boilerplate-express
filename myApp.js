var express = require('express');
var app = express();

console.log("Hello World")

let handler = (req,res) =>{
    res.send("Hello Express")
}

app.get("/",handler)


































 module.exports = app;
