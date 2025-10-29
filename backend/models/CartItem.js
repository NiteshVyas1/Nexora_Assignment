const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  qty: { type: Number, default: 1, min: 1 },
  // optional userId for persistence if you want mock user
  userId: { type: String, default: 'mock_user_1' }
}, { timestamps: true });

module.exports = mongoose.model('CartItem', CartItemSchema);
