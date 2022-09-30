const mongoose = require('mongoose');

// declaring schecma
const CartSchema = mongoose.Schema(
    {
        cart: {
            type: Array,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    }
);
const CartProduct = mongoose.model('CartProduct', CartSchema);
module.exports = CartProduct;