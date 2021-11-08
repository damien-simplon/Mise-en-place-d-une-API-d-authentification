require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.API_PORT || 4000;
const connectDB = require('./db');

const start = async() => {
    try{
        await connectDB();
        app.listen(port, function(err){
            if(err) console.log(err);
            console.log("Server listening on port : " + port);
        });
    }catch(error){
        console.log(error);
    }
};

start();