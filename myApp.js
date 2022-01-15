var express = require('express');
var app = express();

console.log("Hello World")

let handler = (req,res) =>{
    res.send(/views/index.html)
}

app.get("/",handler)


































 module.exports = app;
