const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const Doctor = require('../Models/doctorProfile');

// @desc    Get logged-in doctor's profile
// @route   GET /api/profile
// @access  Private
const getProfile = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.doctor.id);
    if (!doctor) {
      return res.status(404).json({ success: false, message: 'Profile not found' });
    }
    res.status(200).json({ success: true, data: doctor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error while fetching profile' });
  }
};

// @desc    Update logged-in doctor's profile (text fields)
// @route   PUT /api/profile
// @access  Private
const updateProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const allowedFields = [
      'name',
      'phone',
      'specialization',
      'hospital',
      'bmdcRegNo',
      'bio',
      'address',
    ];

    const updates = {};
    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) updates[field] = req.body[field];
    });

    const doctor = await Doctor.findByIdAndUpdate(req.doctor.id, updates, {
      new: true,
      runValidators: true,
    });

    if (!doctor) {
      return res.status(404).json({ success: false, message: 'Profile not found' });
    }

    res.status(200).json({ success: true, message: 'Profile updated successfully', data: doctor });
  } catch (error) {
    console.error(error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ success: false, message: error.message });
    }
    res.status(500).json({ success: false, message: 'Server error while updating profile' });
  }
};

// @desc    Upload / replace profile picture
// @route   PUT /api/profile/avatar
// @access  Private
const uploadAvatar = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image file provided' });
    }

    const doctor = await Doctor.findById(req.doctor.id);
    if (!doctor) {
      // cleanup uploaded file since doctor doesn't exist
      fs.unlink(req.file.path, () => {});
      return res.status(404).json({ success: false, message: 'Profile not found' });
    }

    // remove old avatar file if it exists
    if (doctor.avatar) {
      const oldPath = path.join(__dirname, '..', doctor.avatar);
      fs.unlink(oldPath, () => {}); // ignore error if file missing
    }

    doctor.avatar = `/uploads/profile/${req.file.filename}`;
    await doctor.save();

    res.status(200).json({
      success: true,
      message: 'Profile picture updated',
      data: { avatar: doctor.avatar },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error while uploading avatar' });
  }
};

// @desc    Change password
// @route   PUT /api/profile/password
// @access  Private
const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    return res.status(400).json({ success: false, message: 'Both current and new password are required' });
  }
  if (newPassword.length < 6) {
    return res.status(400).json({ success: false, message: 'New password must be at least 6 characters' });
  }

  try {
    const doctor = await Doctor.findById(req.doctor.id).select('+password');
    const isMatch = await doctor.comparePassword(currentPassword);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Current password is incorrect' });
    }

    doctor.password = newPassword; // pre-save hook will hash it
    await doctor.save();

    res.status(200).json({ success: true, message: 'Password changed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error while changing password' });
  }
};

module.exports = { getProfile, updateProfile, uploadAvatar, changePassword };
