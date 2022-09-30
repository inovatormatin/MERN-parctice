const CartProduct = require("../models/cartModel");
// const { validationResult } = require("express-validator");
require("dotenv").config();

// Route 1: Get All cart products
const getcartproduct = async (req, res) => {
    try {
        const product = await CartProduct.find();
        res.status(200).json(product)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal server error" })
    }
};

// Route 2: Get Update cart products
const updatecartproduct = async (req, res) => {
    try {
        // creating new object with updated data
        const newCart = {};
        const { cart } = req.body;
        if (cart) { newCart.cart = cart };
        // find cart by id which we want to update
        let optCart = await CartProduct.findById(req.params.id);
        if (!optCart) {
            return res.status(404).json({ error: "Cart not found" })
        }
        // checking for user access
        if (optCart.userId.toString() !== req.user.id) {
            return res.status(401).send("Not allowed")
        }
        // updating cart
        optCart = await CartProduct.findByIdAndUpdate(req.params.id, { $set: newCart }, { new: true });
        res.status(200).json(optCart);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal server errror" });
    }
};

module.exports = {
    getcartproduct,
    updatecartproduct
};