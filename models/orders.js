
    // models/orders.js

    const mongoose = require('mongoose');

    const Orders = mongoose.model(
      "Orders",
      new mongoose.Schema({
        
        date:{
          type:Date,
        },
        orderNo:{
          type:String,
        },
        customerNo:{
          type:String,
        },        
        poDate:{
          type:Date,
        },
        poNo:{
          type:String,

        },
        Dealers:[{
          dealer:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Dealers",
          }}
        ],
        items:[{
          item:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "Item",
        },
          price:{
            type:Number,
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
          },
          total:{
            type:Number,
          }
        }
      ]
        ,
        totalAmount:{
          type:Number
        },
        shippingCharges:{
          type:Number,
        },
        discount:{
          type:Number

        },
        finalAmount:{
          type:Number
        }
      }, {
        timestamps: true
      })
    );

    module.exports = Orders;
  