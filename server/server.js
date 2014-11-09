'use strict';
/**
 * Created by dave on 26.10.14.
 */


const app    = require('express')()
	, http   = require('http')
	, config = require('./config/config');

app.set('port', process.env.PORT || 3000);
app.set('env', process.env.NODE_ENV || config.env || 'development');

// Configure Express
require('./config/express')(app);

// Add the Routes
require('./routes')(app);


http.createServer(app).listen(app.get('port') || 3000, function () {
	console.log('App Listening on Port ' + app.get('port') + ' in mode "' + app.get('env') + '"!');
});