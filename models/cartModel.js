const mongoose = require('mongoose');

// declaring schecma
const CartSchema = mongoose.Schema(
    {
        cart: {
            type: Array,
        },
        userId: {
           type:String
        },
    }
);
const Cartproduct = mongoose.model('Cartproduct', CartSchema);
module.exports = Cartproduct;