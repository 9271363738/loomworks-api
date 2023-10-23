
      // controllers/ordersController.js
      const ordersService = require('../services/ordersService');

      function ordersController(req, res) {
        // Controller logic here
      }
  
      // Create
      ordersController.create = async (req, res) => {
        try {
            const ordersData = req.body;
            const orders = await ordersService.create(ordersData);
            if(orders){
                res.status(200).send({status:true,message:"orders Created Successfully",data:orders,error:""});
            }
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Read
      ordersController.read = async (req, res) => {
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

          const orders = await ordersService.find(query,page,limit);
          const totalCount = await ordersService.countDocument(query);
          res.status(200).send({
      data,
      page,
      totalPages: Math.ceil(totalCount / limit),
      totalItems: totalCount,
    });
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Update
      ordersController.update = async (req, res) => {
        try {
          const id = req.params.id;
          const data = req.body;
          const orders = await ordersService.updateorders(id,data);
          if(orders){
            res.status(200).send({status:true,message:"orders Updated Successfully",data:orders,error:""});
          }
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Delete
      ordersController.delete = async (req, res) => {
        try {
          const id = req.params.id;
          const orders = await ordersService.deleteorders(id);
          if(orders){
            res.status(200).send({status:true,message:"orders Deleted Successfully",data:[],error:""});
          }
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      module.exports = ordersController;
    