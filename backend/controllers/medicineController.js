const Medicine = require('../models/Medicine');

// Create a new medicine entry
exports.addMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.create(req.body);
    res.status(201).json({ success: true, data: medicine });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Get all medicines
exports.getAll = async (req, res) => {
  try {
    const meds = await Medicine.find();
    res.json({ success: true, data: meds });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get medicines expiring in the next 7 days
exports.getNearExpiry = async (req, res) => {
  try {
    const today = new Date();
    const near = new Date();
    near.setDate(today.getDate() + 7);

    const meds = await Medicine.find({
      expiryDate: { $gt: today, $lte: near }
    });

    res.json({ success: true, data: meds });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get already expired medicines
exports.getExpired = async (req, res) => {
  try {
    const today = new Date();
    const meds = await Medicine.find({ expiryDate: { $lt: today } });
    res.json({ success: true, data: meds });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get returned medicines
exports.getReturned = async (req, res) => {
  try {
    const meds = await Medicine.find({ returned: true });
    res.json({ success: true, data: meds });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get overall medicine statistics
exports.getStats = async (req, res) => {
  try {
    const today = new Date();

    const totalStock = await Medicine.countDocuments();
    const expired = await Medicine.countDocuments({ expiryDate: { $lt: today } });
    const nearExpiry = await Medicine.countDocuments({
      expiryDate: { $gt: today, $lte: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000) }
    });
    const returned = await Medicine.countDocuments({ returned: true });

    res.json({
      success: true,
      data: { totalStock, expired, nearExpiry, returned }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
