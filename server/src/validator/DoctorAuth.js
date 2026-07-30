const { body } = require('express-validator');
const validateDoctorRegistration = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 3, max: 31 })
        .withMessage("Name must be 3-31 characters"),
     body('id')
        .trim()
        .notEmpty()
        .withMessage("id is required")
        .isLength({ min: 3, max: 10})
        .withMessage("id must be 3-10 characters"),



    body('password')
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),

]

module.exports = { validateDoctorRegistration}