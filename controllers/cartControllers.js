const Cart = require('../models/Cart');
const Item = require('../models/Item');

// This function gets all the items in our cart document so that we can display it in the applications frontend.
module.exports.get_cart_items = async (req, res) => {
    // We get the user id from the params and assign it to a variable.
    const userId = req.params.id;
    // Try to search for a cart with that userId. If we find a cart with that id and if the length of the items array is greater than 0 then we send the response of the cart to the front end else we send a null value. We use the null value to inform the user in the frontend that the cart is empty.
    try{
        let cart = await Cart.findOne({userId});
        if (cart && cart.items.length > 0) {
            res.send(cart);
        } else {
            res.send(null);
        }
    }
    catch(error) {
        console.log(error);
        res.status(500).send('A problem occured.');
    }
}

// This function handles adding items to our cart.
module.exports.add_cart_item = async (req, res) => {
    // Recieve the user id from the params and assign it to userId. Deconstruct the productId and quantity from the request body.
    const userId = req.params.id;
    const { productId, quantity } = req.body;

    // First try find a cart with the userId then assign that value to a cart variable. 
    try {
        let cart = await Cart.findOne({userId});
        // We find the item with the productId we received, if it is not found then we send a 404 not found response.
        let item = await Item.findOne({_id:productId});
        if (!item) {
            res.status(404).send('Item not found')
        }
        // If it is found then we assign the price and title as variables for use.
        const price = item.price;
        const name = item.title;

        if (cart) {
            // Does the cart exist for the user
            let itemIndex = cart.items.findIndex(i => i.productId == productId);
            
            // Check to see if the product exists.
            // If the user already has a cart then we search for the item we need to add in the carts item. If it exists in the cart then we take the item from the cart and update the quantity by the quantity that was requested and then update the cart with that new item.
            if (itemIndex > -1) {
                let productItem = cart.items[itemIndex];
                productItem.quantity += quantity;
                cart.items[itemIndex] = productItem;
            // If the item is not in the cart then we push it into the carts item array. We then update the carts final bill in both cases and then save the cart and then sent that cart back as a response.
            } else {
                cart.items.push({productId, name, quantity, price});
            }
            cart.bill += quantity*price;
            cart = await cart.save();
            return res.status(201).send(cart);
        } else {
            // If no cart exists then create one for the user with the userId, the items within their cart and the bill amount. Then we send that newCart back as a response.
            const newCart = await Cart.create({
                userId,
                items:[{ productId, name, quantity, price}],
                bill:quantity*price
            });
            return res.status(201).send(newCart);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
}

// This function handles our delete item requests
module.exports.delete_item = async (req,res) => {
    // Get the user id from the params and assign it to a variable. Get the product id from the params and assign it to a variable.
    const userId = req.params.userId;
    const productId = req.params.itemId;

    try{
        // find a userId within the Cart
        let cart = await Cart.findOne({userId});
        // We search for the item using the product ID we received.
        let itemIndex = cart.items.findIndex(p => p.productId == productId);
        // If the item exists within the cart. Take that item and reduce the bill according to its new quantity and price. Then we splice the item by its Index to remove that item from the cart.
        if(itemIndex > -1)
        {
            let productItem = cart.items[itemIndex];
            cart.bill -= productItem.quantity*productItem.price;
            cart.items.splice(itemIndex,1);
        }
        // Save the cart and return the cart as a response.
        cart = await cart.save();
        return res.status(201).send(cart);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
}