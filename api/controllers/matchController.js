'use strict';

var db = require('../data/db');
var tableName = 'Matches';
var matchesModel = db.get(tableName);

exports.getAll = function(req, res) {
	var matches = new matchesModel();	
	matches.find('all', function(err, rows, fields) {
		console.log(err);
		console.log(rows);
		console.log(fields);
		if(err) {
			res.send(err);
		}
		res.json(rows);
	});
}

exports.create = function(req, res) {
	var match = new matchesModel(req.body);
	match.save(function(err, row) {
		if(err) {
			res.send(err);
		}

		res.json(row)
	});
}

exports.getById  = function(req, res) {
	var matches = new matchesModel();
	matches.read(req.params.matchId, function(err, rows, fields) {
		if(err) {
			res.send(err);
		}

		res.json(rows);
	});
}

exports.updateById = function(req, res) {
	var match = new matchesModel();
	match.read(req.params.matchId, function(err, row, fields) {
		if(err) {
			res.send(err);
		}

		for(var key in req.body) {

			match.set(key, req.body[key]);
		}

		match.save(function(err, row, fields) {
			if(err) {
				res.send(err);
			}

			if(match.get('winner_id') != null) {
				match.set('ended', new Date().toISOString().slice(0, 19).replace('T', ' '));
				match.query('CALL calc_elo('+req.params.matchId+')');	

			}
			
			res.json(match);
		});
	});
}

exports.deleteById = function(req, res) {
	var match = new matchesModel();
	match.read(req.params.matchId, function(err, row, fields) {
		if(err) {
			res.send(err);
		}

		match.remove(function(err, row, fields) {
			if(err) {
				res.send(err);
			}

			res.json(row);
		});
	});
}

exports.search = function(req, res) {
	var matches = new matchesModel();
	matches.find('all', {where: req.params.condition}, function(err, rows, fields) {
		if(err) {
			res.send(err);
		}

		res.json(rows);
	});
}