const mongoose = require('mongoose');

// declaring schecma
const ContactusSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        subject: {
            type: String,
        },
        message: {
            type: String,
        }
    }
);
const Contactus = mongoose.model('Contactus', ContactusSchema);
module.exports = Contactus;