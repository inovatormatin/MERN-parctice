const express = require("express");
router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const {
  getcartproduct,
  updatecartproduct,
  createcartproduct,
} = require("../controllers/cartRoutes");
const { body } = require("express-validator");

// get cart by user Id
router.get("/getcartproduct/:id", fetchuser, getcartproduct);

// update cart
router.put("/updatecartproduct/:id", fetchuser, updatecartproduct);

// add new cart
router.post(
  "/createcartproduct",
  fetchuser,
  body("cart", "Cart is required").exists(),
  body("userId", "User Id is required").exists(),
  createcartproduct
);

module.exports = router;
