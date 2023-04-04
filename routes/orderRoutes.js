const express = require("express");
router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const {
  createOrder,
  getorderproduct,
  deleteOrder
} = require("../controllers/orderRoutes");
const { body } = require("express-validator");

// get orders by user Id
router.get("/getorders/:id", fetchuser, getorderproduct);

// add new order
router.post(
  "/placeorder",
  fetchuser,
  body("items", "item is required").exists(),
  body("paymentMethod", "paymentMethod is required").exists(),
  body("userInfo.userName", "userInfo.userName is required").exists(),
  body("userInfo.userEmail", "userInfo.userEmail is required").exists(),
  body("userInfo.phone", "userInfo.phone is required").exists(),
  body("userInfo.address", "userInfo.address is required").exists(),
  body("userId", "userId is required").exists(),
  createOrder
);

// cancel order
router.delete(
  '/cancelorder/:id',
  fetchuser,
  deleteOrder
)

module.exports = router;