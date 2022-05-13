const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res) =>{
    res.send('Everything is good');
});

app.listen(process.env.PORT || port, () => {
    console.log(`server is running `)
});