var FieldType = require('../Type');
var util = require('util');


/**
 * Number FieldType Constructor
 * @extends Field
 * @api public
 */
function nested (list, path, options) {
	nested.super_.call(this, list, path, options);
}
nested.properName = 'Nested';
util.inherits(nested, FieldType);

/**
 * Updates the value for this field in the item from a data object
 */
nested.prototype.updateItem = function (item, data, callback) {
	process.nextTick(callback);
};

nested.prototype.noColumn = true;
nested.prototype.viewOnly = true;

nested.prototype.addToSchema = function (schema) {
};

/* Export Field Type */
module.exports = nested;
