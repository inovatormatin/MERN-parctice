const express = require('express');
const app = express();
const { connectdb } = require('./config/database');
connectdb();

require('dotenv').config();

app.use('/', require('./routes/userRoutes'));
app.use('/login', require('./routes/userRoutes'));
app.use('/logout', require('./routes/userRoutes'));
app.use('/signup', require('./routes/userRoutes'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});