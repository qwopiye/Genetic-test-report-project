
const { body } = require('express-validator');

const validateUserRegistration = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 3, max: 31 })
        .withMessage("Name must be 3-31 characters"),

    body('email')
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email format"),

    body('password')
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),

    body('phone')
        .trim()
        .notEmpty()
        .withMessage("Phone is required")
        .isLength({ min: 11, max: 11 })
        .withMessage("Phone must be exactly 11 digits"),

    body('address')
        .trim()
        .notEmpty()
        .withMessage("Address is required")
        .isLength({ min: 3 })
        .withMessage("Address must be at least 3 characters"),
];
const validateDoctorLogin = [


    body('id')
        .trim()
        .notEmpty()
        .withMessage("id is required")
        .withMessage("Invalid email format"),

    body('password')
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),
];

module.exports = { validateUserRegistration,validateDoctorLogin };
