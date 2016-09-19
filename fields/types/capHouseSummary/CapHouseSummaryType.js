var FieldType = require('../Type');
var util = require('util');

function capHouseSummary (list, path, options) {
	capHouseSummary.super_.call(this, list, path, options);
}
capHouseSummary.properName = 'CapHouseSummary';
util.inherits(capHouseSummary, FieldType);

/**
 * Updates the value for this field in the item from a data object
 */
capHouseSummary.prototype.updateItem = function (item, data, callback) {
	process.nextTick(callback);
};

capHouseSummary.prototype.noColumn = true;
capHouseSummary.prototype.viewOnly = true;

capHouseSummary.prototype.addToSchema = function (schema) {
};

/* Export Field Type */
module.exports = capHouseSummary;
