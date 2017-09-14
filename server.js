var express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
path = require('path'),
port = 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

var connection = mongoose.connect("mongodb://localhost/dog_db");

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(port, function(){
    console.log("Running on port", port);
})