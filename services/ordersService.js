
    // services/ordersService.js
    const db = require('../models');

    const {orders:Orders} = db;

    exports.create = async (data) => {
      try {
        let order = await Orders.find({});
        data.orderNo = order.length + 1;
        const orders = new Orders(data);
    
        const savedorders = await orders.save();
    
        return savedorders;
      } catch (error) {
        throw error;
      }
    };

    exports.find = async (condition,page,limit) => {
      try {
        const orders = await Orders.find(condition).populate('items.item').skip((page - 1) * limit).limit(limit).sort({createdAt:-1}).exec();;
        return orders;
      } catch (error) {
        throw error;
      }
    };

    exports.countDocument = async (condition) => {
  try {
  
    const count = await Orders.countDocuments(condition);
    return count;

  } catch (error) {
    throw error;
  }
};

    exports.updateorders = async (id,data) => {
      try {
        const orders = await Orders.findByIdAndUpdate(id,data);
    
        return orders;
      } catch (error) {
        throw error;
      }
    };



    exports.deleteorders = async (id) => {
      try {
        const orders = await Orders.findByIdAndDelete(id);
    
        return true;
      } catch (error) {
        throw error;
      }
    };

    
  