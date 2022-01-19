var express = require('express');
const res = require('express/lib/response');
var app = express();
const os = require("os")
const user = os.userInfo()
var env = require('dotenv').config()

console.log(os.type())

app.use("/public",express.static(__dirname + "/public"))

let handler = (req,res) =>{
    res.sendFile(__dirname + "/views/index.html")
}

app.get("/",handler)

app.get("/json",(req,res)=>{
    if(process.env.MESSAGE_STYLE == "uppercase"){
        res.json({"message" : "HELLO JSON"})
    }
    else{
        res.json({"message" : "Hello json"})
    }
})






































 module.exports = app;
