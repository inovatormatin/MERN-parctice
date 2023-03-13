const express = require("express");
router = express.Router();
const { body } = require("express-validator");
const { getallproducts, addproduct, updateproduct, deleteproduct } = require("../controllers/productRoutes");
const { searchByUser } = require("../controllers/searchRoutes");

// get all item according to user
router.get("/byuser/:keyword", searchByUser);

module.exports = router;