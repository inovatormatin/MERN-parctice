const express = require('express');
router = express.Router();
const { body } = require('express-validator');
const {
    hello,
    login,
    logout,
    signup
} = require('../controllers/userRoutes');

router.get('/', hello);
router.get('/login', login);
router.get('/logout', logout);
router.post(
    '/signup', 
    body('email', 'Enter a valid email').isEmail(), 
    body('password', 'Password should be more then 5 letter').isLength({min: 5}), 
    body('name', 'Name should contain atleast three letters').isLength({min: 3}), 
    signup
);

module.exports = router;