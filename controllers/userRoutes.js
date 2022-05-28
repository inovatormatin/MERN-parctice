const user = require('../models/userModel');
const { body, validationResult } = require('express-validator');

// root
const hello = (req, res) => {
    res.send(`Server is running ...`);
};
// login
const login = (req, res) => {
    res.send(`login is called`);
};
// logout
const logout = (req, res) => {
    res.send(`logout is called`);
};
// signup
const signup = 
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }).then(user => res.json(user))
        .catch(err => {
            console.log(err);
            res.json({email : 'This email is already in use'})
        });
    }
;

module.exports = {
    hello,
    login,
    logout,
    signup
};
