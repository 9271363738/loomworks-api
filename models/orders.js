
    // models/orders.js

    const mongoose = require('mongoose');

    const Orders = mongoose.model(
      "Orders",
      new mongoose.Schema({

        
      }, {
        timestamps: true
      })
    );

    module.exports = Orders;
  