
    // models/dealers.js

    const mongoose = require('mongoose');

    const Dealers = mongoose.model(
      "Dealers",
      new mongoose.Schema({

        
      }, {
        timestamps: true
      })
    );

    module.exports = Dealers;
  