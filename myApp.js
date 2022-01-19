const { time } = require('console');
var express = require('express');
const res = require('express/lib/response');
var app = express();
const os = require("os")
const user = os.userInfo()
var env = require('dotenv').config()

console.log(os.type())

let logger = (req,res,next) =>{
    
    let method = req.method
    let path = req.path
    let ip = req.ip
    
    console.log(method + " "+path + " - "+ip)
    next()
}

app.use(logger)

let handler = (req,res) =>{
    res.sendFile(__dirname + "/views/index.html")
}

app.get("/",handler)

app.use("/public",express.static(__dirname + "/public"))


app.get("/json",(req,res)=>{
    if(process.env.MESSAGE_STYLE == "uppercase"){
        res.json({"message" : "HELLO JSON"})
    }
    else{
        res.json({"message" : "Hello json"})
    }
})

let timeTaker = (req,res,next) => {
    req.time = new Date().toString()
    next()
}

let timeSend =(req,res) => {
    res.send(req.time)
}

app.get("/now",timeTaker,timeSend)






































 module.exports = app;
