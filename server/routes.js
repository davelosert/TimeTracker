'use strict';
/**
 * Created by dave on 26.10.14.
 */


var MOCKS = {
	TaskList : require('../test/_mocks/M_TaskList.json'),
	SingleTask : require('../test/_mocks/M_SingleTask.json')
};

module.exports = function (app) {
	// todo just temporary to not have 500 all the time...
	app.route('/').all(function(req, res){
		res.status(200);
	});
	app.route('/task')
		//.all()
		.get(function(req, res){
			res.status(200).json(MOCKS.TaskList);
		})
		.post(function(req, res){
			console.log(req.body);
			res.status(200);
		})
		.put(function(req, res){
			console.log(req.body);
			res.status(200);
		})
		.delete();
};

