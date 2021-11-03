const express = require('express');
const app = express();
const port = 3000;

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