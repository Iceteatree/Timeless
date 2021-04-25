// This file deals will all our routes that deal with orders

const { Router } = require('express');
const orderController = require('../controllers/orderControllers');
const router = Router();

// This route makes a get request that fetches all the orders made in our application. It uses the params id which is the userId. This helps us return the correct users orders.
router.get('/order/:id', orderController.get_orders);
// This route makes a post request that triggers the checkout function which creates a new order. All the payments are handled by this route.
router.post('/order/:id', orderController.checkout);

module.exports = router;