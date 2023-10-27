
    // models/dealers.js

    const mongoose = require('mongoose');

    const Dealers = mongoose.model(
      "Dealers",
      new mongoose.Schema({
        companyName:{
          type:String,
          required:true
        },
        billingAddress:{
          type:String,
          required:true
        },
        billingCity:{
          type:String,
          required:true
        },
        billingState:{
          type:String,
          required:true
        },
        billingZipCode:{
          type:String,
          required:true
        },
        shippingAddress:{
          type:String,
          required:true
        },
        shippingCity:{
          type:String,
          required:true
        },
        shippingState:{
          type:String,
          required:true
        },
        shippingZipCode:{
          type:String,
          required:true
        },
        Mobile:{
          type:String,
          required:true
        },
        user:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"User"
        }

        
      }, {
        timestamps: true
      })
    );

    module.exports = Dealers;
  