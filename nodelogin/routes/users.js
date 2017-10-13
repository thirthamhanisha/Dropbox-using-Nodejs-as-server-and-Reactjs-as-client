var express = require('express');
var router = express.Router();
//var ejs = require("ejs");
var mysql = require('./mysql');
var multer = require('multer');
var glob = require('glob');
var path = require('path');
const fs = require('fs');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

var upload = multer({storage:storage});

/* GET users listing. */
/*router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});*/

router.get('/', function (req, res, next) {
    var resArr = [];

    glob("public/uploads/*", function (er, files) {

        var resArr = files.map(function (file) {
            var imgJSON = {};
            imgJSON = file.split('/')[2];
            imgJSON.cols = 2  ;
            return imgJSON;
        });

        console.log(resArr);
        res.status(201).send(resArr);
    }); 
	/*
	var response = "";
	testFolder = "../public/uploads";
	console.log(testFolder);
	fs.readdir(testFolder, function (err, files) 
	{
		console.log(files.length);
		console.log(files);
		for(var i=0;i<files.length;i++)
		{
			response += files[i]+"<br>";
		}
		res.status(200).send(response);
	}); */

}); 


router.post('/doLogin', function (req, res, next) {
	console.log("i am here");
	 var reqUsername = req.body.username;
	 var reqPassword = req.body.password;
	var getUser="select * from users where username='"+reqUsername+"' and password='" + reqPassword +"'";
	console.log("Query is:"+getUser);
	
	mysql.getConnection(function(err,connect){
		if(err){
			connect.release();
			throw err;
		}
		connect.query(getUser,function(err,results)
		{
			connect.release();
			
			if(!err){
			if(results.length > 0){
				console.log("valid Login");
				
			            res.status(201).json({message:"valid login"});
			       
			}
			else {    
				
				console.log("Invalid Login");
				
			            res.status(401).json({message: "invalid login"});
			        
			}
		 }
		}); 

		connect.on('error', function(err) {
            throw err;
            return;
        });

});
});
router.get('/download/:filename', function (req, res, next) {
	var filepath = "./public/uploads/"+req.param("filename");
	//console.log("test");
	//console.log(req.param("filename"));
     res.download(filepath);

});

router.post('/doSignup', function (req, res, next) {

	  /*  var reqUsername = req.body.username;
	    var reqPassword = req.body.password;
	    var reqfirstname = req.body.firstname;
	    var reqlastname = req.body.lastname;
	    var reqemail = req.body.email;
	    var reqpassword = req.body.password; */
	    // Just checking if the username is in our user's array
	 /*   var theUser = users.filter(function(user){
	        return user.username === reqUsername;
	    }); */
	    var getUser="insert into users(username, password, firstname, lastname) values ('"+req.param("email")+"','" + req.param("password")+"','" + req.param("firstname")+"','" + req.param("lastname")+"')";
		console.log("Query is:"+getUser);
		
		var Ufolder = '../public/uploads/'+req.param("email");
		const dir = path.join(__dirname,Ufolder);
		const mkdirSync = function (dirPath) {
			  try {
			    fs.mkdirSync(dirPath)
			  } catch (err) {
			    if (err.code !== 'EEXIST') throw err
			  }
			};
			
			mysql.getConnection(function(err,connect){
		        if (err) {
		            connect.release();
		            throw err;
		        }
		        connect.query(getUser,function(err,rows){
		            connect.release();
		            if(!err) {
		                console.log("The registration has been successful, please log in");
		                console.log("valid Login");
		                mkdirSync(dir);

		                res.status(201).json({message:"The registration has been successful, please log in"});
		            }
		        });
		        connect.on('error', function(err) {
		            throw err;
		            return;
		        });
		    });
	/*	mysql.fetchData(function(err,results){
			if(err){
				throw err;
			}
			else 
			{
				
				console.log("The registration has been successful, please log in");
					console.log("valid Login");
					mkdirSync(dir);
					   
				            res.status(201).json({message:"The registration has been successful, please log in"});
				       
				}
				
				    
				},getUser); */
});
		
router.post('/doShare', function (req, res, next) {

	var username = req.body.username;
    var email = username.split(',');		  
	/*  var reqUsername = req.body.username;
			    var reqPassword = req.body.password;
			    var reqfirstname = req.body.firstname;
			    var reqlastname = req.body.lastname;
			    var reqemail = req.body.email;
			    var reqpassword = req.body.password; */
			    // Just checking if the username is in our user's array
			 /*   var theUser = users.filter(function(user){
			        return user.username === reqUsername;
			    }); */
/*var getUser="insert into shareuser(username, foldername) values ('"+req.param("username")+"','" + req.param("activeItemName")+"')";
				console.log("Query is:"+getUser);
	var getUser1="insert into shareuser(username, foldername) values ('"+req.param("username1")+"','" + req.param("activeItemName")+"')";	
				console.log("Query is:"+getUser);
				*/
				mysql.getConnection(function (err, connect) {
		            if (err) {
		                connect.release();
		                throw err;
		            }
		            for(i = 0; i < email.length; i++) {

		            	var getUser="insert into shareuser(username, foldername) values ('" + email[i] +"','" + req.param("activeItemName")+"')";
		            	  
		            	console.log("Query is:" + getUser);

		                connect.query(getUser);
		            }
		            connect.release();
		                if (!err) {
		                	if(email.length>0)
		                		{
		                    res.status(201).json({message: "Sharing successful"});
		                		}
		                	else{
		                		 res.status(201).json({message: "Sharing unsuccessful"});
		                	}
		                }
		            connect.on('error', function (err) {
		                throw err;
		                return;
		            });
		        });
				
				/*	mysql.getConnection(function(err,connect){
					if(err){
						connect.release();
						throw err;
					}
					connect.query(getUser,function(err,results) 
					{
						connect.release();
						if(!err)
							{
							if(results.length>0)
							{
							console.log("Sharing is successful");
														   
						            res.status(201).json({message:"The sharing has been successfull"});
						       
						}
							else{
								res.status(201).json({message:"The sharing is not successfull,please enter username"});
							}
							}   
						});
					connection.on('error', function(err) {
			            throw err;
			            return;
			        });
				});
				mysql.getConnection(function(err,connect){
					if(err){
						connect.release();
						throw err;
					}
					connect.query(getUser1,function(err,results) 
					{
						connect.release();
						if(!err)
							{
							if(results.length>0)
							{
							console.log("Sharing is successful");
														   
						            res.status(201).json({message:"The sharing has been successfull"});
						       
						}
							else{
								res.status(201).json({message:"The sharing is not successfull,please enter username"});
							}
							}   
						});
					connection.on('error', function(err) {
			            throw err;
			            return;
			        });
				}); */
				
    // Check the password
  //  if(theUser.length === 1){
    //    theUser[0].password === reqPassword &&
      //  res.status(201).json({message: "Login successful"}) ||
       // res.status(401).json({message: "Login failed"});
   // } else {
   //     res.status(401).json({message: "Login failed"});
 //   }
    

    // if(theUser.password === reqPassword){
    //     res.status(201).json({message: "Login successful"});
    // } else {
    //     res.status(401).json({message: "Login failed"});
    // }
				
				
				 
}); 
router.post('/upload', upload.any(), function (req, res, next) {
    console.log(req.body);
    console.log(req.file);
    res.status(201).end();
});

module.exports = router;
