//import module
var express = require('express');
var controller = require('./controllers/controller')

var app = express();

//setup template using ejs
app.set('view engine', 'ejs');

//setup static files
app.use(express.static('./public')); 

//set controller
controller(app);

//listen port
app.listen(3000);