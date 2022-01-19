const { time } = require('console');
var express = require('express');
const res = require('express/lib/response');
var app = express();
const os = require("os")
const user = os.userInfo()
var env = require('dotenv').config()
var bodyParser = require('body-parser')

console.log(os.type())

let logger = (req,res,next) =>{
    
    let method = req.method
    let path = req.path
    let ip = req.ip
    
    console.log(method + " "+path + " - "+ip)
    next()
}

app.use(logger)

app.use(bodyParser.urlencoded({extended: false}))


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
    res.send({time: req.time})
}

app.get("/now",timeTaker,timeSend)

let sendEcho = (req,res) => {
    res.send({echo: req.params.word})
}

app.get("/:word/echo",sendEcho)

let queryFunc = (req,res) => {
    res.send({
        name: `${req.query.first} ${req.query.last}`
    })
}

app.get("/name/query", queryFunc)

let postFunc = (req,res) => {
    res.send({
        name: `${req.body.first} ${req.body.last}`
    })
}

app.post("/name",postFunc)






































 module.exports = app;
