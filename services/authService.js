const db = require('../models');

const {user:User} = db;

exports.register = async (userData) => {
  try {
    const newUser = new User(userData);

    const savedUser = await newUser.save();

    return savedUser;
  } catch (error) {
    throw error;
  }
};

exports.authenticate = async (email) => {
  try {
    const user = await User.findOne({email: email});
    console.log(user);
    if(user)
      return user;
    else
      return false;
    

  } catch (error) {
    throw error;
  }
};
