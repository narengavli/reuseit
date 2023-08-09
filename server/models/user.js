const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 8,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  firstname: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  lastname: {
    type: String,
    required: true,
    min: 3,
    max: 20
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  mobile: {
    type: String,
    require: false,
    unique: true,
    min: 10,
    max: 12,
  },
  address: {
    type: String,
    require: false,
    unique: false,
    max: 50,
  }
});

module.exports = mongoose.model("User", userSchema);
