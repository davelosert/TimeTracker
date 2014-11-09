'use strict';
/**
 * Created by dave on 26.10.14.
 * @module config/config
 */


const _   = require('lodash')
	, env = process.env.NODE_ENV || 'development';


var defaultOptions = {
	port : process.env.PORT || 3000,
	env  : env
};

/**
 *
 * @type {Object|TResult}
 */
module.exports = _.defaults(defaultOptions, require('./env/' + env));





