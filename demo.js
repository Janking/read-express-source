var express = require('./lib/express');

var app = express();

app.set('view engine', 'html');

app.engine('html', require('hbs').__express);

app.render('./',function(){

})