
    // models/item.js

    const mongoose = require('mongoose');

    const Item = mongoose.model(
      "Item",
      new mongoose.Schema({

        name:{
          type:String,
          reuired:true
        },
        
        sku:{
          type:String,
          reuired:true
        },
        brand:{
          type:String,
          reuired:true
        },
        description:{
          type:String,
          reuired:true
        },
        color:{
          type:String,
          reuired:true
        },
        Hsncode:{
          type:String,
          reuired:true
        },
        sizes:{
          type:String,
          requird:true
        }
                
      }, {
        timestamps: true
      })
    );

    module.exports = Item;
  