var express = require('express'),
	app = express(),
	port = process.env.PORT || 5000,
	bodyParser = require('body-parser');

var db = require('./api/data/db');
db.connect(function() {
	console.log("Connected to db");
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var matchRoutes = require('./api/routes/matchRoutes'),
	playerRoutes = require('./api/routes/playerRoutes');

matchRoutes(app);
playerRoutes(app);

app.listen(port);

app.use(function(req, res) {
	res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('HBF RESTful API server started on: ' + port);