const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const connectMongoDb = require('./init/mongodb')
const todoRoute = require('./routes/todo')

const dotenv = require('dotenv')



dotenv.config()


//Initialize App
const app = express();

// Connect to database
connectMongoDb()

//Set view engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"public")))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',todoRoute)

module.exports = app;
