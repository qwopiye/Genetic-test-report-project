
const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [3, "Name must be at least 3 characters"],
    maxlength: [31, "Name must be at most 31 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: "Please provide a valid email address",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
    set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
  },
  image: {
    type: String,
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const User = model("User", userSchema);

module.exports = User;