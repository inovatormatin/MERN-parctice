const express = require("express");
router = express.Router();
const { body } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

const { hello, login, signup, getuser } = require("../controllers/userRoutes");

router.get("/", hello);
router.post(
    "/login",
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
    login
);
router.post(
    "/signup",
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password should be more then 5 letter").isLength({
        min: 5,
    }),
    body("name", "Name should contain atleast three letters").isLength({
        min: 3,
    }),
    signup
);
router.post("/getuser", fetchuser, getuser);

module.exports = router;
