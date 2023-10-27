
    // services/dealersService.js
    const db = require('../models');
    const {
      user:User,
      dealers:Dealers
  }=db;

    exports.create = async (data) => {
      try {
        const user=new User(data);
        const saveduser = await user.save();
        data.user=saveduser._id
        const dealers = new Dealers(data);
        const saveddealers = await dealers.save();
        return saveddealers;
        

      } catch (error) {
        throw error;
      }

    };

    exports.find = async (condition,page,limit) => {
      try {
        const dealers = await Dealers.find(condition).populate('user').skip((page - 1) * limit).limit(limit).sort({createdAt:-1}).exec();
        return dealers;
      } catch (error) {
        throw error;
      }
    };



    exports.countDocument = async (condition) => {
  try {
  
    const count = await Dealers.countDocuments(condition);
    return count;

  } catch (error) {
    throw error;
  }
};

    exports.updatedealers = async (id,data) => {
      try {
        console.log(data);
        const dealers = await Dealers.findByIdAndUpdate(id,data);
        const user = await User.findByIdAndUpdate(dealers.user,data);
    
        return dealers;
      } catch (error) {
        throw error;
      }
    };

    exports.deletedealers = async (id) => {
      try {
        const dealers = await Dealers.findByIdAndDelete(id);
    
        return true;
      } catch (error) {
        throw error;
      }
    };

    
  