
    // models/item.js

    const mongoose = require('mongoose');

    const Item = mongoose.model(
      "Item",
      new mongoose.Schema({

        name:{
          type:String,
          reuired:true
        },
        Dealer:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"Dealers"
        },
        Catagory:{
          type:String,
          requied:true
        },
        Sku:{
          type:String,
          reuired:true
        },
        brand:{
          type:String,
          reuired:true
        },
        price:{
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
        sizes:[{
          name:{
            type:String
          }
        }]
                
      }, {
        timestamps: true
      })
    );

    module.exports = Item;
  