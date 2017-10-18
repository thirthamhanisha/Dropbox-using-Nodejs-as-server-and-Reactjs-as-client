Run the following queries in the MySQL DB:

create table users (username varchar(100),firstname varchar(100), lastname varchar(100), password varchar(1000), password1 varchar(100));

create table shareuser (username varchar(100),foldername varchar(100));

var ConPool = mysql.createPool({
    connectionLimit: 20,
    host     : 'localhost',
    user     : 'root',
    password : 'baby',
    database : 'sys',
    port	 : 3306
})

#also included the sql export files in the folder dropbox-sql-export.

Go to nodelogin folder in command prompt and execute following command:

npm install
npm start
Go to reactlogin folder in command prompt and execute following command:

npm install
npm start
For mocha tests, go to nodelogin folder in command prompt and execute following command:

npm test -- nodelogin folder
npm test -- reactlogin folder
Note: One test in the mocha for nodelogin is changed to expect a different output to demonstrate the output when the test fails.