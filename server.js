require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.API_PORT || 3500;
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');

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

app.use('/api/users/', userRoutes);

var jwt = require('express-jwt');

app.get('/api/login/',
  jwt({ secret: 'secrettokentropsecret', algorithms: ['HS256'] }),
  function(req, res) {
    if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
  });