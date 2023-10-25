
    // models/orders.js

    const mongoose = require('mongoose');

    const Orders = mongoose.model(
      "Orders",
      new mongoose.Schema({
        dealerName:{
          type:String,
          reuired:true
        },
        dealerAddress:{
          type:String,
          required:true
        },
        contactPerson:{
          type:String,
          required:true
        },
        dealerEmail:{
          type:String,
          required:true
        },
        billingTo:{
          type:String,
          required:true
        },
        billingAddress:{
          type:String,
          required:true
        },
        billingContact:{
          type:Number,
          required:true
        },
        billingGst:{
          type:String,
          required:true
        },
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
        shippingTo:{
          type:String,
          required:true
        },
        shippingAddress:{
          type:String,
          required:true
        },
        shippingContact:{
          type:String,
          required:true
        },
        items:[{
          item:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "Item",
        },
          price:{
            type:String,
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
            type:String,
            required:true
          },
          total:{
            type:String,
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
  