'use strict';

var db = require('../data/db');
var tableName = 'Players';
var playersModel = db.get(tableName);

exports.getAll = function(req, res) {
	var players = new playersModel();	
	players.find('all', function(err, rows, fields) {
		if(err) {
			res.send(err);
		}
		res.json(rows);
	});
}

exports.create = function(req, res) {
	var player = new playersModel(req.body);
	player.save(function(err, row) {
		if(err) {
			res.send(err);
		}

		res.json(row)
	});
}

exports.getById  = function(req, res) {
	var players = new playersModel();
	players.read(req.params.playerId, function(err, rows, fields) {
		if(err) {
			res.send(err);
		}

		res.json(rows);
	});
}

exports.updateById = function(req, res) {
	var player = new playersModel();
	player.read(req.params.playerId, function(err, row, fields) {
		if(err) {
			res.send(err);
		}

		for(var key in req.body) {
			player.set(key, req.body[key]);
		}

		player.save(function(err, row, fields) {
			if(err) {
				res.send(err);
			}
			
			res.json(player);
		});
	});
}

exports.deleteById = function(req, res) {
	var player = new playersModel();
	player.read(req.params.playerId, function(err, row, fields) {
		if(err) {
			res.send(err);
		}

		player.remove(function(err, row, fields) {
			if(err) {
				res.send(err);
			}

			res.json(row);
		});
	});
}

exports.search = function(req, res) {
	var players = new playersModel();
	players.find('all', {where: req.params.condition}, function(err, rows, fields) {
		if(err) {
			res.send(err);
		}

		res.json(rows);
	});
}