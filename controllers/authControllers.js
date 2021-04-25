// Importing the required User model as well as the json web token, config and bcrypt modules
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');

// This function handles our registration and jwt token creation 
// We deconstruct the name, email and password from the request body that is being passed over from the API request on the frontend.
module.exports.signup = (req,res) => {
    const { name, email, password } = req.body;

    // If any of the fields are empty then respond with a message that prompts the user to fill out the relevant field.
    if(!name || !email || !password) {
        res.status(400).json({message: 'Please enter all the fields.'});
    }

    // Search our database to see if an email matches the email given. If it already exists then we respond with a message telling the user that, that email has already been used.
    User.findOne({email})
    .then(user => {
        if (user) {
            return res.status(400).json({message: 'User already exists'});
        }
        // Create a newUser instance that uses the name, email and password we received from the request body.
        const newUser = new User({name, email, password});

        //Create salt and hash with bcrypt methods. 
        bcrypt.genSalt(10, (error, salt) => {
            bcrypt.hash(password, salt, (error, hash) => {
                if (error) throw error;
                // Then we save the hashed password into our newUser instance and then commit it to our database.
                newUser.password = hash;
                newUser.save()
                // Here is where we create a signed JWT that will be stored in our session storage. We then send the token as a response along with the user details without the password.
                .then(user => {
                    jwt.sign(
                        {id:user._id},
                        config.get('jwtsecret'),
                        {expiresIn: 3600},
                        (error, token) => {
                            if (error) throw error;
                            res.json({
                                token,
                                user: {
                                    id: user._id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        } 
                    )
                })
            })
        })
    })
}

// This function handles our login capabilities.
// Deconstructing the email and password from our request body. If they do not exist then we send a response to the user with a message stating that they need to enter both the email and password.
module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || ! password) {
        res.status(400).json({message: 'Please enter in all the fields'});
    }
    //  Then we search for the user using the email. If the user does not exist then we will send a response that tells the user they don't exist.
    User.findOne({email})
        .then(user => {
            if (!user) return res.status(400).json({message: 'User does not exist'});

            // We compare the password given from the body with the password within the database. Using bcrypt.compare allows our password to first be dehashed from our database then compares it to the password given, so that we aren't comparing a hashed password vs an unhashed one. If they do not match we return a message with Invalid Credentials.
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({message: 'Invalid credentials'});

                    // We then create a signed JWT token the same was as the registered token above. We then return the token along with the details of the user without the password as a response back to the frontend.
                    jwt.sign(
                        {id: user._id},
                        config.get('jwtsecret'),
                        {expiresIn: 3600},
                        (error, token) => {
                            if (error) throw error;
                            res.json({
                                token,
                                user: {
                                    id: user._id,
                                    name: user.name,
                                    email: user.email
                                }
                            }) 
                        }
                    )
                })
        })
}

// This function finds a user by their id and then returns the user without its password as the JSON response.
module.exports.get_user = (req,res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
}