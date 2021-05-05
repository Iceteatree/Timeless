// Importing our required dependencies and modules

const server = require('../server.js');
let expect = require('chai').expect;
let request = require('request');

// Describe is what our mocha dependency uses to name the group of tests we will be doing. It uses a callback function and then calls all the tests we will be doing with the it function. The it function describes the individual tests and callbacks the intended test. For this top one we are seeing if the server at port 8000 succesfully sends a status code of 200 which means that it is a success. 
describe('Server status', () => {
    it('status of server', function(completed) {
        request('http://localhost:8000/', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            completed();
        })
    })
})

describe('Validating Input Data to Server'), () => {
    it('Validate Registration Data sent', (completed)=> {
        let testSendData = {name: 'Joe', email: 'joesoap@gmail.com', password:'joesoap'}
        request(server).post('/api/register')
        .send(testSendData)
        .then((res=>{
            expect(res.statusCode).to.equal(201);
            expect(res.body).to.include(testSendData);
            completed()
        }))
        .catch((err) => done(err))
    })
    it('Validate Login Data sent', (completed)=> {
        let testSendData = {email: 'joesoap@gmail.com', password:'joesoap'}
        request(server).post('/api/login')
        .send(testSendData)
        .then((res=>{
            expect(res.statusCode).to.equal(201);
            expect(res.body).to.include(testSendData);
            completed()
        }))
        .catch((err) => done(err))
    })
}

describe('Checking Read Data'), () => {
    let insertedData = {title: 'Fancy Watch', description: 'This is a fancy watch', category: 'fancy', price:500, img_url:'http://www.watches.com/watches.jpg'}
    beforeEach((completed) => {
        new Item(insertedData)
            .save()
            .then(()=> done())
            .catch((error) => done(error))
    })
    it('Check data', (completed) => {
        request(server).get(/api/items)
            .then((res)=>{
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.include(insertedData)
                completed()
            })
            .catch((error)=> completed(error))
    })
}
