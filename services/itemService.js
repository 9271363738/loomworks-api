
    // services/itemService.js
    const db = require('../models');

    const {item:Item} = db;

    exports.create = async (data) => {
      try {
        const item = new Item(data);
    
        const saveditem = await item.save();
    
        return saveditem;
      } catch (error) {
        throw error;
      }
    };

    exports.find = async (condition,page,limit) => {
      try {
        const item = await Item.find(condition).skip((page - 1) * limit).limit(limit).sort({createdAt:-1}).exec();;
    
        return item;
      } catch (error) {
        throw error;
      }
    };

    exports.countDocument = async (condition) => {
  try {
  
    const count = await Item.countDocuments(condition);
    return count;

  } catch (error) {
    throw error;
  }
};

    exports.updateitem = async (id,data) => {
      try {
        const item = await Item.findByIdAndUpdate(id,data);
        console.log(item);
    
        return item;
      } catch (error) {
        throw error;
      }
    };

    exports.deleteitem = async (id) => {
      try {
        const item = await Item.findByIdAndDelete(id);
    
        return true;
      } catch (error) {
        throw error;
      }
    };

    
  