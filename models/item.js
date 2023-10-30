
    // models/item.js

    const mongoose = require('mongoose');

    const Item = mongoose.model(
      "Item",
      new mongoose.Schema({

        name:{
          type:String,
          reuired:true
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
          type:Number,
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
          },
          quantity:{
            type:Number,
            default:1
          }
        }]
                
      }, {
        timestamps: true
      })
    );

    module.exports = Item;
  