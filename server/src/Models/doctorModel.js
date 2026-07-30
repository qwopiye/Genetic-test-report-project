
const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const doctorSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [3, "Name must be at least 3 characters"],
    maxlength: [31, "Name must be at most 31 characters"],
  },
    id: {
    type: Number,
    required: [true, "Id is required"],
    trim: true,
    minlength: [3, "Name must be at least 3 characters"],
    maxlength: [10, "Name must be at most 31 characters"],
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
    set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
  },
 
 
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const doctor = model("doctor", doctorSchema);

module.exports = doctor;