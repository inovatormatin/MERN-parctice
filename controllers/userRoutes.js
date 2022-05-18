const user = require('../models/userModel');

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
const signup = async (req, res) => {
    const newUser = new user({
        name: 'test',
        password: '34521'
    });
    await newUser.save().then(() => {
        res.json({'success' : 'success'})
    }).catch((err) => {
        res.json({'error' : err})
    });
};

module.exports = {
    hello,
    login,
    logout,
    signup
};
