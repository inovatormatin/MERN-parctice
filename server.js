const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const { connectdb } = require('./config/database');
const cors = require('cors');
require('dotenv').config();

connectdb();
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// root
app.get('/', (req, res) => {
    res.status(200).json({message: "Server running fine"})
});
// routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/carts', require('./routes/cartRoutes'));

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});