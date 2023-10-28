
      // controllers/itemController.js
      const itemService = require('../services/itemService');

      function itemController(req, res) {
        // Controller logic here
      }
  
      // Create
      itemController.create = async (req, res) => {
        try {
            const itemData = req.body;
            console.log(itemData)
            const item = await itemService.create(itemData);
            if(item){
                res.status(200).send({status:true,message:"item Created Successfully",data:item,error:""});
            }
        } catch (error) {
          console.log(error)
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Read
      itemController.read = async (req, res) => {
        try {
          const condition = req.body || {};
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 25;
    const searchTerm = req.query.searchTerm;
    let query = {};

    if (condition) {
      query = condition;
    }

    if (searchTerm) {
      query.$text = { $search: searchTerm };
    }

          const item = await itemService.find(query,page,limit);
          const totalCount = await itemService.countDocument(query);
          res.status(200).send({
      item,
      page,
      totalPages: Math.ceil(totalCount / limit),
      totalItems: totalCount,
    });
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Update
      itemController.update = async (req, res) => {
        try {
          const id = req.params.id;
          const data = req.body;
          const item = await itemService.updateitem(id,data);
          if(item){
            res.status(200).send({status:true,message:"item Updated Successfully",data:item,error:""});
          }
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Delete
      itemController.delete = async (req, res) => {
        try {
          const id = req.params.id;
          const item = await itemService.deleteitem(id);
          if(item){
            res.status(200).send({status:true,message:"item Deleted Successfully",data:[],error:""});
          }
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      module.exports = itemController;
    