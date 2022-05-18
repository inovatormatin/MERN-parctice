const express = require('express');
const app = express();
const { connectdb } = require('./config/database');
connectdb();
const user = require('./models/userModel');

require('dotenv').config();

app.use('/', require('./routes/userRoutes'));
app.use('/login', require('./routes/userRoutes'));
app.use('/logout', require('./routes/userRoutes'));
app.use('/signup', require('./routes/userRoutes'));

// temp route for checking data
app.get('/showData', (req, res) => {
    const show = async() => {
        const users = await user.find();
        res.json(users);
    };
    show();
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});