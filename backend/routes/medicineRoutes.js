const express = require('express');
const router = express.Router();
const {
  addMedicine,
  getAll,
  getNearExpiry,
  getExpired,
  getReturned,
  getStats
} = require('../controllers/medicineController');

router.post('/add', addMedicine);
router.get('/all', getAll);
router.get('/near-expiry', getNearExpiry);
router.get('/expired', getExpired);
router.get('/returned', getReturned);
router.get('/stats', getStats);

module.exports = router;