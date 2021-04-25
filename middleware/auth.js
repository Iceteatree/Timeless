// Require our config and jwt in our file.
const config = require('config');
const jwt = require('jsonwebtoken');


// This is a function that verifies whether a user is logged in or not. Get the token from the request header named x-auth-token. If there is no token we will then verify the token and then send the decoded variables as a response.
function auth(req, res, next) {
    const token = req.header('x-auth-token');

    // Check for the token.
    if (!token) {
        return res.status(401).json({message: 'Token not found, authorization denied'});
    }

    try{
        // Verify the token
        const decoded = jwt.verify(token, config.get('jwtsecret'));
        // Add user from payload
        req.user = decoded;
        next();
    } catch(error) {
        res.status(400).json({message:'The token is not valid'});
    }
}

module.exports = auth;