const Medicine = require('../models/Medicine');

exports.addMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.create(req.body);
    res.status(201).json(medicine);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  const meds = await Medicine.find();
res.json(meds);
};

exports.getNearExpiry = async (req, res) => {
  const today = new Date();
  const near = new Date();
  near.setDate(today.getDate() + 7);
  const meds = await Medicine.find({
    expiryDate: { $gt: today, $lte: near }
  });
  res.json(meds);
};

exports.getExpired = async (req, res) => {
  const today = new Date();
  const meds = await Medicine.find({ expiryDate: { $lt: today } });
  res.json(meds);
};

exports.getReturned = async (req, res) => {
  const meds = await Medicine.find({ returned: true });
  res.json(meds);
};

exports.getStats = async (req, res) => {
  const today = new Date();
  const totalStock = await Medicine.countDocuments();
  const expired = await Medicine.countDocuments({ expiryDate: { $lt: today } });
  const nearExpiry = await Medicine.countDocuments({
    expiryDate: { $gt: today, $lte: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000) }
  });
  const returned = await Medicine.countDocuments({ returned: true });

  res.json({ totalStock, expired, nearExpiry, returned });
};