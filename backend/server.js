const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
// Informing your applicatin that we are using express
const app = express();

//Declaring the port number to the application
const port = process.env.PORT || 5000;

// It will let the application know what we are using
app.use(express.json());
app.use(cors);

const mongo_connection = process.env.ATLAS_CONNECTION;

mongoose.connect(mongo_connection,{
    useNewUrlParser : true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false });

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully");
})

//It will give the port no to the application
app.listen(port,() =>{
    console.log(`Your server is runnint at PORT: ${port}`)
})