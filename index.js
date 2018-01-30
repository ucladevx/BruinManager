const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')

const keys = require('./config/keys')
require('./models/db')
const Person = mongoose.model('Person')

mongoose.connect(keys.mongoURI);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const app = express();
app.use(bodyParser.json())

app.get('/create/:name', function(req, res) {
	console.log(req.params.name);
	var p = new Person({
		name: req.params.name,
		age: 5
	});
	p.save();
})

app.get('/fetch/:name', function(req, res) {
	var fet = Person.findOne({name: req.params.name});
	console.log(fet.age)
})

app.get('/', function(req, res) {
	res.send("hello");
})

app.listen(3000, () => {
	console.log("listening on port 3000");
})