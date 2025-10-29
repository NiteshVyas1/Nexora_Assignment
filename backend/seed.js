require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/vibecart';

const products = [
  { name: 'Vibe Hoodie', price: 799, description: 'Comfortable cotton hoodie.' },
  { name: 'Vibe T-Shirt', price: 299, description: 'Breathable cotton tee.' },
  { name: 'Vibe Sneakers', price: 2499, description: 'Lightweight sneakers.' },
  { name: 'Vibe Cap', price: 199, description: 'Embroidered cap.' },
  { name: 'Vibe Backpack', price: 1599, description: 'Durable travel backpack.' },
  { name: 'Vibe Mug', price: 249, description: 'Ceramic coffee mug.' },
  { name: 'Vibe Notebook', price: 149, description: 'A5 ruled notebook.' },
  { name: 'Vibe Earbuds', price: 1299, description: 'Wireless earbuds.' }
];

async function seed() {
  await mongoose.connect(MONGODB_URI);
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Seeded products');
  await mongoose.disconnect();
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
