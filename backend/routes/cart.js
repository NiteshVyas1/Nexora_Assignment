const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');
const Product = require('../models/Product');
const mongoose = require('mongoose');

// helper to compute total
async function computeCartTotal(userId = 'mock_user_1') {
  const items = await CartItem.find({ userId }).populate('product');
  const total = items.reduce((s, it) => s + (it.product.price * it.qty), 0);
  return { items, total };
}

// GET /api/cart
router.get('/', async (req, res, next) => {
  try {
    const { items, total } = await computeCartTotal();
    res.json({ items, total });
  } catch (err) {
    next(err);
  }
});

// POST /api/cart { productId, qty }
router.post('/', async (req, res, next) => {
  try {
    const { productId, qty = 1 } = req.body;
    if (!productId || !mongoose.isValidObjectId(productId)) {
      return res.status(400).json({ error: 'Invalid productId' });
    }
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    // if exists, increment qty
    const userId = 'mock_user_1';
    let item = await CartItem.findOne({ product: productId, userId });
    if (item) {
      item.qty = item.qty + qty;
      await item.save();
    } else {
      item = new CartItem({ product: productId, qty, userId });
      await item.save();
    }
    const result = await computeCartTotal(userId);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/cart/:id  (cart item id)
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ error: 'Invalid id' });
    await CartItem.findByIdAndDelete(id);
    const result = await computeCartTotal();
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// POST /api/checkout { cartItems: [{id, qty}], name, email }
router.post('/checkout', async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const userId = 'mock_user_1';
    const { items, total } = await computeCartTotal(userId);
    if (!items.length) return res.status(400).json({ error: 'Cart is empty' });

    const receipt = {
      receiptId: `RCPT-${Date.now()}`,
      total,
      timestamp: new Date().toISOString(),
      customer: { name, email },
      items: items.map(it => ({
        productId: it.product._id,
        name: it.product.name,
        price: it.product.price,
        qty: it.qty,
        subtotal: it.product.price * it.qty
      }))
    };

    // for mock checkout, clear cart
    await CartItem.deleteMany({ userId });

    res.json({ success: true, receipt });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
