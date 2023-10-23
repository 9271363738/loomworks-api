
    // services/dealersService.js
    const db = require('../models');

    const {dealers:Dealers} = db;

    exports.createdealers = async (data) => {
      try {
        const dealers = new Dealers(data);
    
        const saveddealers = await dealers.save();
    
        return saveddealers;
      } catch (error) {
        throw error;
      }
    };

    exports.find = async (condition,page,limit) => {
      try {
        const dealers = await Dealers.find(condition).skip((page - 1) * limit).limit(limit).sort({createdAt:-1}).exec();;
    
        return dealers;
      } catch (error) {
        throw error;
      }
    };

    exports.countDocument = async (condition) => {
  try {
  
    const count = await Dealers.countDocuments(condition);
    return count;

  } catch (error) {
    throw error;
  }
};

    exports.updatedealers = async (id,data) => {
      try {
        const dealers = await Dealers.findByIdAndUpdate(id,data);
    
        return dealers;
      } catch (error) {
        throw error;
      }
    };

    exports.deletedealers = async (id) => {
      try {
        const dealers = await Dealers.findByIdAndDelete(id);
    
        return true;
      } catch (error) {
        throw error;
      }
    };

    
  