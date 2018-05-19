'use strict';
module.exports = function(app) {
	var matchCtrl = require('../controllers/matchController');

	// matchCtrl Routes
	app.route('/matches')
	    .get(matchCtrl.getAll)
	    .post(matchCtrl.create);


	app.route('/matches/:matchId')
	    .get(matchCtrl.getById)
	    .put(matchCtrl.updateById)
	    .delete(matchCtrl.deleteById);

	app.route('/matches/search/:condition')
		.get(matchCtrl.search);
};