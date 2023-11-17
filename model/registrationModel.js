const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },

  username: {
    type: String,
    required: [true, 'username is require'],
    trim: true,
    unique: true,
  },

  password: {
    type: String,
    required: [true, 'password is require'],
    trim: true,
  },
});

const User = mongoose.model('User', registrationSchema);
module.exports = User;
