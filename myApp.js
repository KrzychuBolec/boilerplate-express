var express = require('express');
var app = express();
const os = require("os")
const user = os.userInfo()

console.log(os.type())

let handler = (req,res) =>{
    res.sendFile(__dirname + "/views/index.html")
}

app.get("/",handler)


































 module.exports = app;
