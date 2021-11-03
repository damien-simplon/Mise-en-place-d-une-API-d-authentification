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
    db.query(`SELECT id,prenom,email FROM user`, function(err, result, fields){
        res.send(result);
    });
});

app.post('/', (req, res) => {
    db.query('INSERT INTO user (prenom,email,password) VALUES ("damien2","damien2@gmail.com","oui2")', function (err, result, fields){
        console.log(result.insertId);
        if (err) throw err;
        res.send("entrée d'id " + result.insertId + " insérée");
    });
})