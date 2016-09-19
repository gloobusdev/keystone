var FieldType = require('../Type');
var util = require('util');


/**
 * Number FieldType Constructor
 * @extends Field
 * @api public
 */
function heading (list, path, options) {
	heading.super_.call(this, list, path, options);
}
heading.properName = 'Heading';
util.inherits(heading, FieldType);

/**
 * Updates the value for this field in the item from a data object
 */
heading.prototype.updateItem = function (item, data, callback) {
	process.nextTick(callback);
};

heading.prototype.noColumn = true;
heading.prototype.viewOnly = true;

heading.prototype.addToSchema = function (schema) {
};

/* Export Field Type */
module.exports = heading;
