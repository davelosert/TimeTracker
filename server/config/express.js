/**
 * Created by dave on 26.10.14.
 */

const path           = require('path')
	, config         = require('../config/config')
	, express        = require('express')
	, bodyParser     = require('body-parser')
	, session        = require('express-session')
	, methodOverride = require('method-override')
	, cookieParser   = require('cookie-parser')
	, morgan         = require('morgan')
	, livereload     = require('connect-livereload');

module.exports = function (app) {
	"use strict";
	app.use(methodOverride());
	app.use(bodyParser.urlencoded({extended : false}));
	app.use(bodyParser.json());

	app.use(cookieParser());

	app.use(session({
		secret            : 's3cr3t',
		resave            : true,
		saveUninitialized : false
	}));

	if (app.get('env') === 'development' || app.get('env') === 'staging') {
		app.use(morgan('dev'));
		app.use(livereload());
		app.use(express.static(path.join('./', 'client')));
		app.get('/', function (req, res) {

		});
	}

};