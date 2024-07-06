const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please add a valid email",
        ],
      },
    password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    role: {
      type: Number,
      default:1
    }
  });
  
  module.exports = mongoose.model('user', userSchema);