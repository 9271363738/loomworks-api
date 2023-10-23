
    // models/item.js

    const mongoose = require('mongoose');

    const Item = mongoose.model(
      "Item",
      new mongoose.Schema({

        
      }, {
        timestamps: true
      })
    );

    module.exports = Item;
  