const express = require("express");
router = express.Router();
const { body } = require("express-validator");
const {
    sendMessage
} = require("../controllers/contactRoutes");

// send message from contact us
router.post(
    "/sendmessage",
    body("name", "Name is required").exists(),
    body("email", "Email is required").exists(),
    body("subject", "Subject is required").exists(),
    body("message", "Message is required").exists(),
    sendMessage
);

module.exports = router;
