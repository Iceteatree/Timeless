// Require order cart and user models
const Order = require('../models/Order');
const Cart = require('../models/Cart');
const User = require('../models/User');
const config = require('config');
require('dotenv').config()
// For this example we are using Stripe which does not have a South African base as of todays date. This means that all payments will be stored overseas and the ammounts can't be accessed without a UK bank account. However this is perfectly fine for us as this is a fake website for demonstration purposes only.
// const stripe = require('stripe')(config.get('StripeAPIKey'));
// const stripe = require('stripe')(process.env.STRIPE_APIKEY);
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_APIKEY);

// This function fetches all the orders based on the user id which is taken from the request params. We then sort them in a descending order by the date ordered and then return them as a response.
module.exports.get_orders = async (req,res) => {
    const userId = req.params.id;
    Order.find({userId}).sort({date:-1}).then(orders => res.json(orders));
}

// This function handles our final checkout.
module.exports.checkout = async (req,res) => {
    try{
        // get our userId param and our source request from the body of the frontend. This source handles our payments via Stripe.
        const userId = req.params.id;
        const {source} = req.body;
        // Find the cart and the user with the provided userID. We also get the email of the user.
        let cart = await Cart.findOne({userId});
        let user = await User.findOne({_id: userId});
        const email = user.email;
        // Check if the cart exists or not. 
        if(cart){
            // If it exists we create a charge using Stripe. Then we pass the amount, the currency we want to receive payments in, the source object we received from the frontend and the recept email.
            const charge = await stripe.charges.create({
                amount: cart.bill,
                currency: 'zar',
                source: source,
                receipt_email: email
            })
            // If the charge was not succesful throw this error.
            if(!charge) throw Error('Payment failed');
            // If the charge was succesful then create a new order userId, items using the carts items and the bill using the carts bill.
            if(charge){
                const order = await Order.create({
                    userId,
                    items: cart.items,
                    bill: cart.bill
                });
                // Then we delete the cart using the cartid and send it as a response to the frontend.
                const data = await Cart.findByIdAndDelete({_id:cart.id});
                return res.status(201).send(order);
            }
        }
        // If the cart doesn't exist then send this message.
        else{
            res.status(500).send("You do not have items in cart");
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}