const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
  name: String,
  batchNo: String,
  expiryDate: Date,
  quantity: Number,
  returned: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Medicine', MedicineSchema);
