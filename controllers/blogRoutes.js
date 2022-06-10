const Blog = require("../models/blogModel");
const { validationResult } = require("express-validator");
require("dotenv").config();

// Route 1: Get All blogs
const getallblogs = async (req, res) => {
    try {
        const blog = await Blog.find();
        res.status(200).json(blog)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal server error" })
    }
};

// Route 2: Get All blogs by id
const getblogbyid = async (req, res) => {
    try {
        const blog = await Blog.find({authorid : req.user.id});
        res.status(200).json(blog)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal server error" })
    }
};

// Route 3: Add new blog
const addblog = async (req, res) => {
    // if there are errors return bad request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {title, description, img, author} = req.body;
        const blog = new Blog({
            title, 
            description, 
            img, 
            author, 
            authorid: req.user.id
        })
        const newBlog = await blog.save();
        res.status(200).json(newBlog)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal server error" })
    }
};

// Route 4: Update blog (login required)
const updateblog = async(req, res) =>{
    try{
        // creating new object with updated data
        const newBlog = {};
        const {title, description, img} = req.body;
        if(title){newBlog.title = title};
        if(description){newBlog.description = description};
        if(img){newBlog.img = img};

        // find blog by id which we want to update
        let optblog = await Blog.findById(req.params.id);
        if(!optblog){
            return res.status(404).json({error: "Blog not found"})
        }

        // checking for user access
        if(optblog.authorid.toString() !== req.user.id){
            return res.status(401).send("Not allowed")
        }

        // updating blog
        optblog = await Blog.findByIdAndUpdate(req.params.id, {$set: newBlog}, {new: true});
        res.status(200).json(optblog);

    } catch(error) {
        console.error(error.message);
        res.status(500).json({error: "Internal server errror"});
    }
}

// Route 5: Deleting exsiting blog (login required)
const deleteblog = async(req, res) =>{
    try{

        // find blog by id which we want to update
        let delblog = await Blog.findById(req.params.id);
        if(!delblog){
            return res.status(404).json({error: "Blog not found"})
        }

        // checking for user access
        if(delblog.authorid.toString() !== req.user.id){
            return res.status(401).send("Not allowed")
        }

        // updating blog
        delblog = await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json({success: "Blog deleted", delblog});

    } catch(error) {
        console.error(error.message);
        res.status(500).json({error: "Internal server errror"});
    }
}

module.exports = {
    getallblogs,
    getblogbyid,
    addblog,
    updateblog,
    deleteblog
};
