const mongoose = require('mongoose');

const fractionSchema = new mongoose.Schema({
  ipfsHash: { type: String, required: true },
  pinSize: { type: Number, required: true },
  timestamp: { type: Date, required: true },
});

const Fraction = mongoose.model('Fraction', fractionSchema);

module.exports = Fraction;
