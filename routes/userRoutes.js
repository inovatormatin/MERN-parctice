const express = require('express');
router = express.Router();

const {
    hello,
    login,
    logout,
    signup
} = require('../controllers/userRoutes');

router.get('/', hello);
router.get('/login', login);
router.get('/logout', logout);
router.post('/signup', signup);

module.exports = router;