const Product = require("../models/productModel");
const Blog = require("../models/blogModel");
require("dotenv").config();

// Route 1: Find items related to user search
const searchByUser = async (req, res) => {
    try {
        const product = await Product.find();
        const blog = await Blog.find();
        let keyword = req.params.keyword.toLowerCase()
        const productResult = product.filter(item => {
            return item.name.toLowerCase().includes(keyword) === true || item.description.toLowerCase().includes(keyword) === true ? item : null
        })
        const blogResult = blog.filter(item => {
            return item.title.toLowerCase().includes(keyword) === true || item.description.toLowerCase().includes(keyword) ? item : null
        })
        res.status(200).json({ productResult, blogResult })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal server error" })
    }
};

module.exports = {
    searchByUser
};