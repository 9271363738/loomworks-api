// models/user.js

const mongoose = require('mongoose');

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name:{
      type: String
    },
    email:{
      type: String
    },
    password:{
      type: String
    }

  }, {
    timestamps: true
  })
);

module.exports = User;