
      // routes/ordersRoutes.js
  
      const express = require('express');
      const router = express.Router();
  
      const ordersController = require('../controllers/ordersController');
  
      // GET route
      router.get('/', ordersController.read);
  
      // POST route
      router.post('/', ordersController.create);
  
      // PUT route
      router.put('/:id', ordersController.update);
  
      // DELETE route
      router.delete('/:id', ordersController.delete);
  
      module.exports = router;
    