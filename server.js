const express = require('express');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
    res.send(`Server is running ...`);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});