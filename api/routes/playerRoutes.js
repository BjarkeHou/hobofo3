'use strict';
module.exports = function(app) {
	var playerCtrl = require('../controllers/playerController');

	  // playerCtrl Routes
	app.route('/players')
	    .get(playerCtrl.getAll)
	    .post(playerCtrl.create);


	app.route('/players/:playerId')
	    .get(playerCtrl.getById)
	    .put(playerCtrl.updateById)
	    .delete(playerCtrl.deleteById);

	app.route('/players/search/:condition')
		.get(playerCtrl.search);
};