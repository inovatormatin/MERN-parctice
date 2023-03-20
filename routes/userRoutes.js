const express = require("express");
router = express.Router();
const { body } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");
const { login, signup, getuser, updateUser } = require("../controllers/userRoutes");

// login route
router.post(
    "/login",
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
    login
);
// Signup route
router.post(
    "/signup",
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password should be more then 5 letter").isLength({
        min: 5,
    }),
    body("name", "Name should contain atleast three letters").isLength({
        min: 3,
    }),
    body("phoneNumber", "Phone number required").exists(),
    body("city", "City can't be empty").exists(),
    body("pincode", "PINCODE required").exists(),
    signup
);

// get user by id
router.get("/getuser", fetchuser, getuser);

// get user by id
router.put(
    "/updateuser/:id",
    fetchuser,
    body("email", "email is required").isEmail(),
    body("name", "Name should contain atleast three letters").isLength({
        min: 3,
    }),
    body("phoneNumber", "Phone number can't be empty").exists(),
    body("city", "City can't be empty").exists(),
    body("pincode", "PINCODE can't be empty").exists(),
    updateUser
);

module.exports = router;
