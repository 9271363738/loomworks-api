
    // models/orders.js

    const mongoose = require('mongoose');

    const Orders = mongoose.model(
      "Orders",
      new mongoose.Schema({
        
        date:{
          type:Date,
          required:true
        },
        orderNo:{
          type:String,
          required:true
        },
        customerNo:{
          type:String,
          required:true
        },        
        poDate:{
          type:Date,
          required:true
        },
        poNo:{
          type:String,
          required:true
        },
        items:[{
          item:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "Item",
        },
          price:{
            type:Number,
            required:true
          },
          size:[{
          name:{
          type:String
          },
          quantity:{
            type:Number
          },
        }
        ],

          gst:{
            type:Number,
            required:true
          },
          total:{
            type:Number,
            required:true
          }
        }
      ]
        ,
        totalAmount:{
          type:Number,
          required: true
        },
        shippingCharges:{
          type:Number,
          required: true
        },
        discount:{
          type:Number,
          required: true
        },
        finalAmount:{
          type:Number,
          required:true
        }
      }, {
        timestamps: true
      })
    );

    module.exports = Orders;
  