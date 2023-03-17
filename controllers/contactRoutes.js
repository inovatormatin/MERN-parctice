// sendMessage
const Contactus = require("../models/contactusModel");
const { validationResult } = require("express-validator");
require("dotenv").config();

// Route 1: Store message recived from client side.
const sendMessage = async (req, res) => {
    // if there are errors return bad request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { name, email, subject, message } = req.body;
        const contactUs = new Contactus({
            name, email, subject, message
        })
        const newMessage = await contactUs.save();
        res.status(200).json({
            newMessage,
            msg: "Your Message sent successfully !"
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    sendMessage
};
