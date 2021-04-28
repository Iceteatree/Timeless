const express = require('express');
const path = require('path');
const config = require('config');
const mongoose = require('mongoose');
require('dotenv').config()

let app = express();
const dbURI = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_CLUSTER}/timelessDatabase`
// const dbURI = config.get('dbURI'); //This does the same as above but with less process.env

// Initialising our routes
const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/item');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');

// For body parser stuff
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// If production NODE_ENV becomes production then build the production build in this location then fetch everything from that build and send it as a response here.
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'timeless-app-frontend/build')));
    app.get('*',(req,res) =>
      {res.sendFile(path.resolve(__dirname, 'timeless-app-frontend', 'build', 'index.html'));
  });
}

// Setting up our route paths to /api/ route.
app.use('/api',authRoutes);
app.use('/api',itemRoutes);
app.use('/api',cartRoutes);
app.use('/api',orderRoutes);

// Initialising Mongoose. 
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
// Error messages
mongoose.connection.on('error', function(err) {
	console.log('Connection to Mongo established.');
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
// If link has been established message
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

// If server has a 404 error display this message.
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

//   Listening on process.env.PORT for HEROKU deoplyment else it will listen to 8000 locally.
app.listen(process.env.PORT || 8000, () => {
    console.log("Listening on port " + (process.env.PORT || 8000))    
})


module.exports = app;
