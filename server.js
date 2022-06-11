const express = require('express');
const cors = require('cors');
const app = express();
const { connectdb } = require('./config/database');
require('dotenv').config();

connectdb();
app.use(cors());
app.options("*", cors());
app.use(express.json({
    type: ['application/json', 'text/plain']
}));

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