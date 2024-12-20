const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/restorent', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  orders: [{
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now }
  }],
});

const usermodel = mongoose.model('User', userSchema);

module.exports = usermodel;
