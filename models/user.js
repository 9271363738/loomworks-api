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
    },
    role:{
      type:String,
      enum:['user','admin'],
      default:'user'
    },
    status:{
      type:String,
      default:"Active",
      enum:["Active","Inactive"],
      required: true
    }
  }, {
    timestamps: true
  })
);

module.exports = User;