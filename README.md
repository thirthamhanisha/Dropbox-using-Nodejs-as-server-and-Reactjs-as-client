# DropBox using ReactJs as client and NodeJs as server


Run the following queries in the MySQL DB:
1. create table users(username varchar(25), firstname varchar(25), lastname varchar(25), password1 varchar(25), password varchar(1000));

2. create table shareuser (username varchar(100),foldername varchar(40));

Go to nodelogin folder in command prompt and execute following command:
1. npm install
2. npm start

Go to reactlogin folder in command prompt and execute following command:
1. npm install
2. npm start

For mocha tests, go to nodelogin folder in command prompt and execute following command:
1. npm test -- nodelogin folder
2. npm test -- reactlogin folder

Note: One test in the mocha for nodelogin is changed to expect a different output to demonstrate the output when the test fails.