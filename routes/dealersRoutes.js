
      // routes/dealersRoutes.js
  
      const express = require('express');
      const router = express.Router();
  
      const dealersController = require('../controllers/dealersController');
  
      // GET route
      router.get('/', dealersController.read);
  
      // POST route
      router.post('/', dealersController.create);
  
      // PUT route
      router.put('/:id', dealersController.update);
  
      // DELETE route
      router.delete('/:id', dealersController.delete);
  
      module.exports = router;
    