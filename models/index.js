const mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    
    const db = {};
    
    db.mongoose = mongoose;
    
    db.user = require('./user');
db.item = require('./item');
db.orders = require('./orders');
db.dealers = require('./dealers');
module.exports = db;
    