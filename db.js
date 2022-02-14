const mysql = require('mysql');
var con = mysql.createConnection({
    host     : "localhost",
    user     : "jj",
    password : "123",
    database : "express-practice"
})

con.connect(function(err) {
    if (err) throw err;
    console.log('db conected');
});

module.exports = con;
