var express = require('express');
var app = express();
var ejs = require('ejs');
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('cheese.db');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));

app.use(urlencodedBodyParser);

app.use(methodOverride('_method'));

app.set('view_engine', 'ejs');

app.get('/', function(req,res){
	res.redirect('cheeses');
})

app.get('/cheeses', function(req, res){
	//get all cheeses from Database and render them to an ejs file.
})

app.post('/cheeses', function(req,res){
	//post new cheeses on Database and render them to an ejs file
})

add.put('/cheeses/:id', function(req,res){
	//update chesses to database and render them to an ejs file
})

app.listen(3000, function(){
    console.log('listening on port 3000!')
});