const dotenv = require("dotenv");
dotenv.config();
const express = require('express')
const bodyParser = require('body-parser')
const route = require('../src/route/routes')
const mongoose = require('mongoose')
 
 //require('dotenv').config({ path: 'ENV_FILENAME' })

 

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



  
mongoose.connect(process.env.MONGO_DB, {
    
    useNewUrlParser: true,
    
    })


    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


app.use('/', route)

app.listen(process.env.PORT || 3000, function() {
    console.log("Express app is running on port " + (process.env.PORT || 3000))
})
