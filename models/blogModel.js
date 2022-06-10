const mongoose = require('mongoose');

// declaring schecma
const BlogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"]
        },
        description: {
            type: String,
            required: [true, "description is required"],
        },
        img: {
            type: String,
            required: [true, "Img is required"]
        },
        author: {
            type: String,
            required: [true, "Author name is required"]
        },
        authorid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
);
const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;