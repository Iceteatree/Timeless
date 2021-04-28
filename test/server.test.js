// Importing our required dependencies and modules

const server = require('../server.js');
let expect = require('chai').expect;
let request = require('request');

// Describe is what our mocha dependency uses to name the group of tests we will be doing. It uses a callback function and then calls all the tests we will be doing with the it function. The it function describes the individual tests and callbacks the intended test. For this top one we are seeing if the server at port 8000 succesfully sends a status code of 200 which means that it is a success. 
describe('Server status', () => {
    it('status', function(completed) {
        request('http://localhost:8000/', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            completed();
        })
    })
})
