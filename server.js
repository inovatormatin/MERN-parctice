const express = require('express');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const port = 5000;
const app = express();

app.get('/', (req, res) =>{
    res.send('Everything is good');
});

app.get('/pass', (req, res) =>{
    res.send(
        bcrypt.compare('manish', a, function(err, result) {
            result == true;
            console.log(result);
        })
    );
});


app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
});