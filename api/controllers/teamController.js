'use strict';

var db = require('../data/db');
var tableName = 'Teams';
var teamsModel = db.get(tableName);

exports.getAll = function(req, res) {
	var teams = new teamsModel();	
	teams.find('all', function(err, rows, fields) {
		if(err) {
			res.send(err);
		}
		res.json(rows);
	});
}

exports.create = function(req, res) {
	var team = new teamsModel(req.body);
	team.save(function(err, row) {
		if(err) {
			res.send(err);
		}

		res.json(row)
	});
}

exports.getById  = function(req, res) {
	var teams = new teamsModel();
	teams.read(req.params.teamId, function(err, rows, fields) {
		if(err) {
			res.send(err);
		}

		res.json(rows);
	});
}

exports.updateById = function(req, res) {
	var team = new teamsModel();
	team.read(req.params.teamId, function(err, row, fields) {
		if(err) {
			res.send(err);
		}

		for(var key in req.body) {
			team.set(key, req.body[key]);
		}

		team.save(function(err, row, fields) {
			if(err) {
				res.send(err);
			}
			
			res.json(team);
		});
	});
}

exports.deleteById = function(req, res) {
	var team = new teamsModel();
	team.read(req.params.teamId, function(err, row, fields) {
		if(err) {
			res.send(err);
		}

		team.remove(function(err, row, fields) {
			if(err) {
				res.send(err);
			}

			res.json(row);
		});
	});
}

exports.search = function(req, res) {
	var teams = new teamsModel();
	teams.find('all', {where: req.params.condition}, function(err, rows, fields) {
		if(err) {
			res.send(err);
		}

		res.json(rows);
	});
}