// const{ body}=require('express-validator');

// //registration validator

// const validateUserRegistration =[
//     body('name')
//     .trim()
//     .notEmpty()
//     .withMessage("name is Requried")
//     .isLength({min: 3, max: 31})
//     .withMessage("the name have be 3-31 character"),
//     body('email')
//     .trim()
//     .notEmpty()
//     .withMessage("email is Requried")
//     .isEmail()
//     .withMessage("the name have be 3-31 character"),
//     body('password')
//     .trim()
//     .notEmpty()
//     .withMessage("password is Requried")
//     .isLength({min: 6})
//     .withMessage("the password should be 6 character"),
//     body('phone')
//     .trim()
//     .notEmpty()
//     .withMessage("phone is Requried")
//     .isLength({min: 11})
//     .withMessage("the phone have be 11 character"),
//      body('address')
//     .trim()
//     .notEmpty()
//     .withMessage("address is Requried")
//     .isLength({min: 3})
//     .withMessage("the address have be 3 character"),
// ]

// module.exports={validateUserRegistration}

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

module.exports = { validateUserRegistration };
