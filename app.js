//defining all our dependencies
const express = require('express')
const mongose = require('mongoose')
const http =  require('http')
const routes = require('./routes/route')
const mongoose = require('mongoose')
const config = require ("./config/database")
const bodyparser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const path = require('path')
//defing functions

const app = express()

//defining our port 

const port = process.env.PORT || 8080;
//creating server
const server = http.createServer(app).listen(port,()=>{
    //console.log("Server Started on port:"+port)
})
//conecting to database
mongoose.connect(config.database)
mongoose.connection.on("connected",()=>{
console.log("Database Succesfuly connected on:"+config.database)
})
//mongoose.Connection.on('connected')
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyparser())
app.use(cors())
app.use(passport.initialize())
app.use(passport.session())
require('./functions/passport')(passport)
app.get('/',(req,res)=>{
    res.json("application uner development")
})
app.use('/api',routes)
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'))
})
// get all routes and pass it to te route page 
