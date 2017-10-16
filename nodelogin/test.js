var http = require('http');
var assert = require('assert');
var should = require('should');

var expect = require('chai').expect;
//var server = require('./server');
var request = require('supertest');

var server = require('./bin/www');

const userCredentials = {
    username: 'mt1@gmail.com',
    password: 'm123'
}

var authenticated = request.agent(server);

describe('Server test', function(){

    /*before(function(){
        server.listen(3001);
    })*/

	describe('home', function(){
        it('home should be sucessful', function(done){

            authenticated
                .get('/users/')
                .send(userCredentials)
                .end(function(err, response){
                    expect(response.statusCode).to.equal(201);
                    expect('Location','/home');
                    done();
                });


        });
    });
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
	describe('upload', function(){
        it('upload should be sucessful', function(done){
        	const newfile = {
        		username: 'mt1@gmail.com'
        	}
        	
            authenticated
                .post('/users/upload')
                .send(newfile)
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
                firstname: 'hanisha',
                lastname: 'thirtham',
                email: 'hanishathirtham@gmail.com',
                password: 'hanisha123'
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
    });
    
    describe('share', function(){
        it('share should be sucessful', function(done){
               const newUser = {
            		   username: 'mt1@gmail.com',
            		   username1: 'mt@gmail.com',	
            		   activeItemName: 'dropbox-logo1'
               }
            authenticated
                .post('/users/doShare')
                .send(newUser)
                .end(function(err, response){
                    expect(response.statusCode).to.equal(201);
                    expect('Location','/home');
                    done();
                });


        });
    });
    
    describe('download', function(){
        it('download should be sucessful', function(done){
               const newUser = {
            		   username: 'mt1@gmail.com',
            		  // username1: 'mt@gmail.com',	
            		   filename: 'dropbox-logo1'
               }
            authenticated
                .get('/users/download/:username/:filename')
                .send(newUser)
                .end(function(err, response){
                    expect(response.statusCode).to.equal(201);
                    expect('Location','/home');
                    done();
                });


        });
    });  
})
