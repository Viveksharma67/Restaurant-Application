const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  imageUrl: { type: String }
});

const itemmodel = mongoose.model('Item', itemSchema);

module.exports = itemmodel;
