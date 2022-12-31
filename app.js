const express = require('express');
const bodyParser = require('body-parser');
const static = express.static(__dirname + '/../public');
const configRoutes = require('../routes');

const app = express();


const mysql = require ('mysql2');

const con = mysql.createConnection({
    host: "cai.aast.edu",
    port: "3306",
    user: "web_7",
    password: "9971",
    database: "web_7"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the database!");
  });
  
  

auth.init(app);

app.use(require('cookie-parser')());
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('/public'));
app.set('view engine', 'pug');

var fs = require('fs');

