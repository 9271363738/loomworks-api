
      // routes/itemRoutes.js
  
      const express = require('express');
      const router = express.Router();
  
      const itemController = require('../controllers/itemController');
  
      // GET route
      router.post('/get', itemController.read);
  
      // POST route
      router.post('/', itemController.create);
  
      // PUT route
      router.put('/:id', itemController.update);
  
      // DELETE route
      router.delete('/:id', itemController.delete);
  
      module.exports = router;
    