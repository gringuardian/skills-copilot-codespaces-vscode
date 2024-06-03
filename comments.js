// Create web server
// Use express module
var express = require('express');
var app = express();
// Use body-parser module
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Use mysql module
var mysql = require('mysql');
// Create connection to mysql database
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "comment"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
// Create table in database
app.get('/create', function (req, res) {
    var sql = "CREATE TABLE comments (id INT AUTO_INCREMENT PRIMARY KEY, comment VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
        res.send("Table created");
    });
});
// Insert data into table
app.post('/insert', function (req, res) {
    var comment = req.body.comment;
    var sql = "INSERT INTO comments (comment) VALUES ('" + comment + "')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.send("1 record inserted");
    });
});
// Select data from table
app.get('/select', function (req, res) {
    var sql = "SELECT * FROM comments";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});
// Update data in table
app.put('/update', function (req, res) {
    var id = req.body.id;
    var comment = req.body.comment;
    var sql = "UPDATE comments SET comment = '" + comment + "' WHERE id = " + id;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record updated");
        res.send("1 record updated");
    });
});
// Delete data from table
app.delete('/delete', function (req, res) {
    var id = req.body.id;
    var sql = "DELETE FROM comments WHERE id = " + id;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("
