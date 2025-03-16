// const express = require('express');
const mysql = require('mysql');
// const app = express();
// app.use()
// const port = 3306
//To connect JDBC for Java => connection URI :- mysql://ulhazpastzm5upwb:dYZ9Sb4gR7EDN4b7hUJX@bbciagw7akgsmatfy8dh-mysql.services.clever-cloud.com:3306/bbciagw7akgsmatfy8dh

var  connection = mysql.createConnection(({
    host:'bbciagw7akgsmatfy8dh-mysql.services.clever-cloud.com',
    user: 'ulhazpastzm5upwb',
    password: 'dYZ9Sb4gR7EDN4b7hUJX',
    database: 'bbciagw7akgsmatfy8dh',
    port:3306
}))


connection.connect((error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("connected")
    }
})

module.exports = connection;
