// This route file handles all the routes related to dealing with our cart.

const { Router } = require('express');
const cartController = require('../controllers/cartControllers');
const router = Router();

// This route makes a get request which fetches all the items in the cart of a particular user. The id of the user requesting his cart is pass along as a param.
router.get('/cart/:id', cartController.get_cart_items);
// This route makes a post request which adds an item to the cart. It uses the id of the user as a param to identify which user we should add the cart item to.
router.post('./cart/:id', cartController.add_cart_item);
// This route makes a delete request. It removes an item from the cart of the user. userID is used to get the cart of the user and itemID is used to search for the item that needs to be removed from the cart document.
router.delete('/cart/:userId/:itemId', cartController.delete_item);

module.exports = router;