const express = require('express');
const router = express.Router();

const {
  addMedicine,
  getAll,
  getNearExpiry,
  getExpired,
  getReturned,
  getStats,
  updateStatus
} = require('../controllers/medicineController');

router.post('/add', addMedicine);
router.get('/all', getAll);
router.get('/near-expiry', getNearExpiry);
router.get('/expired', getExpired);
router.get('/returned', getReturned);
router.get('/stats', getStats);
router.post('/mark-status', updateStatus);

module.exports = router;


router.post('/test', (req, res) => {
  console.log('Test route hit!');
  res.json({ message: 'Test route is working!' });
});
