const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const {
  getProfile,
  updateProfile,
  uploadAvatar,
  changePassword,
} = require('../controller/profileController');

// All routes below require a valid JWT
router.use(protect);

router.get('/', getProfile);

router.put(
  '/',
  [
    body('name').optional().trim().isLength({ min: 2, max: 100 }).withMessage('Name must be 2-100 characters'),
    body('phone').optional().trim().matches(/^[0-9+\-\s]{7,15}$/).withMessage('Invalid phone number'),
    body('specialization').optional().trim().isLength({ max: 100 }),
    body('hospital').optional().trim().isLength({ max: 150 }),
    body('bio').optional().trim().isLength({ max: 500 }).withMessage('Bio cannot exceed 500 characters'),
  ],
  updateProfile
);

router.put('/avatar', upload.single('avatar'), uploadAvatar);

router.put('/password', changePassword);

module.exports = router;
