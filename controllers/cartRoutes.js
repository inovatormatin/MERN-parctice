const Cartproduct = require("../models/cartModel");
const { validationResult } = require("express-validator");
require("dotenv").config();

// Route 1: Get cart by ID
const getcartproduct = async (req, res) => {
  try {
    const getUser = await Cartproduct.findOne({ userId: req.params.id });
    if (getUser === null) {
      res.status(500).json({ error: "Cart not exist for this user" });
    }
    res.status(200).json(getUser);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Route 2: Update cart products
const updatecartproduct = async (req, res) => {
  try {
    // creating new object with updated data
    let newCart = {};
    const { cart } = req.body;
    if (cart) {
      newCart = cart;
    }
    // find cart by id which we want to update
    let optCart = await Cartproduct.findOne({ userId: req.params.id });
    if (!optCart) {
      return res.status(404).json({ error: "Cart not found" });
    }
    optCart = await Cartproduct.findOneAndUpdate(
      { userId: req.params.id.toString() },
      { cart: newCart }
    );
    res.status(200).json(optCart);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal server errror" });
  }
};

// Route 3: Create cart for user
const createcartproduct = async (req, res) => {
  // if there are errors return bad request and error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // find cart already exist ?
    let optCart = await Cartproduct.findOne({ userId: req.body.userId });
    if (optCart) {
      return res.status(200).json({ msg: "Cart already exist with this user id" });
    }
    const { cart, userId } = req.body;
    const cartproduct = new Cartproduct({
      cart,
      userId,
    });
    const newCartproduct = await cartproduct.save();
    res.status(200).json(newCartproduct);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Route 4: Deleting exsiting product in cart (login required)
const deleteproduct = async (req, res) => {
  try {
    // find cart by id which we want to delete the product
    let delcart = await Cartproduct.findOne({ userId: req.params.uid.toString() });
    if (!delcart) {
      return res.status(404).json({ error: "Cart not found" })
    }
    // checking for user access
    if (delcart.userId !== req.params.uid) {
      return res.status(401).send("Not allowed")
    }
    // checking for product
    let delProduct = await delcart.cart.filter(product => {
      return product.id === req.params.productId
    })
    if (delProduct.length === 0) {
      return res.status(404).send("Product not found")
    } else {

      // deleting product
      let newCart = await delcart.cart.filter(product => {
        return product.id !== req.params.productId
      })
      // update cart
      ubtCart = await Cartproduct.findOneAndUpdate(
        { userId: req.params.uid.toString() },
        { cart: newCart }
      );
      res.status(200).json({ success: "Product deleted", ubtCart });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal server errror" });
  }
}

module.exports = {
  createcartproduct,
  getcartproduct,
  updatecartproduct,
  deleteproduct
};
