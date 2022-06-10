const express = require('express');
const app = express();
const { connectdb } = require('./config/database');
connectdb();

require('dotenv').config();
app.use(express.json());

// root
app.get('/', (req, res) => {
    res.status(200).json({message: "Server running fine"})
});
// routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/blogs', require('./routes/blogRoutes'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});