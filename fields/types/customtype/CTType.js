var FieldType = require('../Type');
var util = require('util');
var utils = require('keystone-utils');

/**
 * CT FieldType Constructor
 * @extends Field
 * @api public
 */
function CT (list, path, options) {
	this.options = options;
	this._nativeType = Object;
	this._properties = ['options'];
	CT.super_.call(this, list, path, options);
}
CT.properName = 'CT';
util.inherits(CT, FieldType);

CT.prototype.validateInput = function (data, callback) {
	var value = this.getValueFromData(data);
	var result = value === undefined || value === null || typeof value === 'object';
	utils.defer(callback, result);
};

CT.prototype.validateRequiredInput = function (item, data, callback) {
	var value = this.getValueFromData(data);
	var result = !!value;
	if (value === undefined && item.get(this.path)) {
		result = true;
	}
	utils.defer(callback, result);
};

/**
 * Add filters to a query
 */
CT.prototype.addFilterToQuery = function (filter) {
	var query = {};
	if (filter.mode === 'exactly' && !filter.value) {
		query[this.path] = filter.inverted ? { $nin: ['', null] } : { $in: ['', null] };
		return query;
	}
	var value = utils.escapeRegExp(filter.value);
	if (filter.mode === 'beginsWith') {
		value = '^' + value;
	} else if (filter.mode === 'endsWith') {
		value = value + '$';
	} else if (filter.mode === 'exactly') {
		value = '^' + value + '$';
	}
	value = new RegExp(value, filter.caseSensitive ? '' : 'i');
	query[this.path] = filter.inverted ? { $not: value } : value;
	return query;
};

/* Export Field Type */
module.exports = CT;
