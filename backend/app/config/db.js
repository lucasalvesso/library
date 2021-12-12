'use strict';

var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'users'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to Database!");
});

module.exports = con;