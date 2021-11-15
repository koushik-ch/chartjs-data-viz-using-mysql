
var express = require('express');




//routes handler
const routes = require('./routes/routes');
const bodyParser = require('body-parser');


var app = express();

//bodyparser middlewaare url encoded  
app.use(bodyParser.urlencoded({ extended: false }));

//static files
app.use(express.static('public'));
//ejs
app.set('view engine', 'ejs');

//HomeRoute
app.get('/', routes.homeRoute);



//get request for chart
app.post('/chart', routes.drawChart);


//listen at 3000
app.listen(3000, function () {
    console.log('listening on port 3000');
});


