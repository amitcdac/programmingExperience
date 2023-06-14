const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/company')
//----------------------------view - ejs engine

const express = require('express')
const app = express()
const employeeRoute = require('./routes/employeeRoute')
app.use('/',employeeRoute);
app.listen(4000,()=>{console.log('server is running')})

