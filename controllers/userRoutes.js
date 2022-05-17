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
const signup = (req, res) => {
    res.send(`signup is called`);
};

module.exports = {
    hello,
    login,
    logout,
    signup
};
