require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);

// simple error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message || 'Server error' });
});

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI ;

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('DB connect error', err);
  });
