const mongoose = require('mongoose');

// declaring schecma
const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"]
        },
        description: {
            type: String,
            required: [true, "description is required"],
        },
        img1: {
            type: String,
            required: [true, "Img is required"]
        },
        img2: {
            type: String,
            required: [true, "Img is required"]
        },
        price: {
            type: Number,
            required: [true, "Price is required"]
        },
        category: {
            type: Array,
            required: [true, "Category is required"]
        },
        tags: {
            type: Array
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
);
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;