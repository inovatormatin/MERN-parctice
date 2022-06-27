const express = require("express");
router = express.Router();
const { body } = require("express-validator");
const { getallproducts, addproduct, updateproduct, deleteproduct } = require("../controllers/productRoutes");

// get all products
router.get("/getallproducts", getallproducts);

// add new product
router.post(
    "/addproduct",
    body("name", "Name is required").exists(),
    body("description", "Description should be more then 20 letter").isLength({
        min: 20,
    }),
    body("img1", "Image is required").exists(),
    body("img2", "Image is required").exists(),
    body("price", "Price is required").exists().isNumeric(),
    body("category", "Assign category").exists(),
    addproduct
);

// updating product
router.put('/updateproduct/:id', updateproduct)

// delete product
router.delete('/deleteproduct/:id', deleteproduct)

module.exports = router;