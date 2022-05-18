const mongoose = require('mongoose');

// declaring schecma
const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"]
        },
        password: {
            type: String,
            required: [true, "Password is required"]
        }
    },
    {
        timestamp: true
    }
);

module.exports = mongoose.model('User', UserSchema);