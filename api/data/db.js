var mysql = require('mysql-model');

var state = {
	pool: null,
	mode: null
};

exports.connect = function(callback) {
	state.pool = mysql.createConnection({
		host: 'localhost',
		user: 'hobofo',
		password: 'test',
		// password: 'eu4D8ay2fJXEim9u',
		database: 'hobofo'
	});

	
	callback();	
}

exports.get = function(tablename) {
	var obj = state.pool.extend({
		tableName: tablename
	});
	return obj;
}

