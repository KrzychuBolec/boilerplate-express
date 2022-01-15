var express = require('express');
var app = express();

console.log("Hello World")

let handler = (req,res) =>{
    res.send("Hello World")
}

app.get("/",handler)


































 module.exports = app;
