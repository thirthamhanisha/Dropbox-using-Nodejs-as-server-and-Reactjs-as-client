var http = require('http');
var assert = require('assert');
var should = require('should');

var expect = require('chai').expect;
//var server = require('./server');
var request = require('supertest');

var server = require('./bin/www');

const userCredentials = {
    username: 'thirthamhanisha@gmail.com',
    password: 'baby'
}

var authenticated = request.agent(server);

describe('Server test', function(){

    /*before(function(){
        server.listen(3001);
    })*/

    describe('Log in', function(){
        it('Login should be sucessful', function(done){

            authenticated
                .post('/users/doLogin')
                .send(userCredentials)
                .end(function(err, response){
                    expect(response.statusCode).to.equal(201);
                    expect('Location','/home');
                    done();
                });


        });
    });

    describe('Sign up', function(){
        it('Signup should be successful', function(done){
            const newUser = {
                firstname: 'first',
                lastname: 'last',
                email: 'first@last.com',
                password: 'password'
            }
            authenticated
                .post('/users/doSignup')
                .send(newUser)
                .end(function(err, response){
                    expect(response.statusCode).to.equal(201);
                    expect('Location','/login');
                    done();
                });


        });
    })
})