
      // controllers/dealersController.js
      const dealersService = require('../services/dealersService');

      function dealersController(req, res) {
        // Controller logic here
      }
  
      // Create
      dealersController.create = async (req, res) => {
        try {
            const dealersData = req.body;
            const dealers = await dealersService.create(dealersData);
            if(dealers){
                res.status(200).send({status:true,message:"dealers Created Successfully",data:dealers,error:""});
            }
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Read
      dealersController.read = async (req, res) => {
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

          const dealers = await dealersService.find(query,page,limit);
          const totalCount = await dealersService.countDocument(query);
          res.status(200).send({
      dealers,
      page,
      totalPages: Math.ceil(totalCount / limit),
      totalItems: totalCount,
    });
          
        } catch (error) {
          console.log(error)
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Update
      dealersController.update = async (req, res) => {
        try {
          const id = req.params.id;
          const data = req.body;
          const dealers = await dealersService.updatedealers(id,data);
          if(dealers){
            res.status(200).send({status:true,message:"dealers Updated Successfully",data:dealers,error:""});
          }
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
  
      // Delete
      dealersController.delete = async (req, res) => {
        try {
          const id = req.params.id;
          const dealers = await dealersService.deletedealers(id);
          if(dealers){
            res.status(200).send({status:true,message:"dealers Deleted Successfully",data:[],error:""});
          }
          
        } catch (error) {
            res.status(500).send({status:false,message:"Internal Server Error",data:[],error:error});
        }
      };
      
      module.exports = dealersController;
    