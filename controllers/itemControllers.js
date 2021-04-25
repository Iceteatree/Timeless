const Item  = require('../models/Item');

// This function gets all our items from our database. It will then sort them in a decreasing order by date added. We return these as a response in JSON format.
module.exports.get_items = (req, res) => {
    Item.find().sort({date:-1})
    .then(items => {
        res.json(items)
    })
}

// This function adds a new item, We will use the requests body as the input for the new item since we are sending the request body from the frontend in the same format as in our model. We then save that item to our database and send the new item as a response in JSON format.
module.exports.post_item = (req, res) => {
    const newItem = new Item(req.body);
    newItem.save()
    .then(item => {
        res.json(item)
    })
}

// This function allows us to update our items. We get the updated information from the request body and the item id from the params. We search for the item and update it with new information. We then send that updated item as a response back to the frontend to be used.
module.exports.update_item = (req,res) => {
    Item.findByIdAndUpdate({_id: req.params.id},req.body)
    .then(function(item){
        Item.findOne({_id: req.params.id})
        .then(function(item){
            res.json(item);
        });
    });
}

// This function allows us to delete items from our database. We receive the item id through paraams. We find the item and delete it using the findbyIdandDelete function, if it all works out then we send a response message of success equal to true.
module.exports.delete_item = (req,res) => {
    Item.findByIdAndDelete({_id: req.params.id})
    .then(function(item){
        res.json({success: true});
    });
}