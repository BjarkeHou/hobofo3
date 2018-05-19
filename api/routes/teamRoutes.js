'use strict';
module.exports = function(app) {
	var teamCtrl = require('../controllers/teamController');

	  // teamCtrl Routes
	app.route('/teams')
	    .get(teamCtrl.getAll)
	    .post(teamCtrl.create);


	app.route('/teams/:teamId')
	    .get(teamCtrl.getById)
	    .put(teamCtrl.updateById)
	    .delete(teamCtrl.deleteById);

	app.route('/teams/search/:condition')
		.get(teamCtrl.search);
};