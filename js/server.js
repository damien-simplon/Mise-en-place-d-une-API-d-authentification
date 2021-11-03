const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user : "root",
    password : "",
    database : "miseenplaceapi"
})
db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
  });

app.listen(port, function(err){
    if(err) console.log(err);
    console.log("Server listening on port : " + port);
});

app.get('/', (req, res) => {
    res.send("GET");
});

app.post('/', (req, res) => {
    res.send("POST");
})