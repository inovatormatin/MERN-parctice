const express = require("express");
router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const {
  getcartproduct,
  updatecartproduct,
} = require("../controllers/cartRoutes");
// const { body } = require("express-validator");

router.get("/getcartproduct", fetchuser, getcartproduct);
router.put("/updatecartproduct/:id", fetchuser, updatecartproduct);

module.exports = router;
