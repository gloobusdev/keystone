var FieldType = require('../types/Type');
var utils = require('keystone-utils');
var util = require('util');

/**
 * Boolean FieldType Constructor
 * @extends Field
 * @api public
 */
function clientConfirmationButton (list, path, options) {
	this._nativeType = Object;
	this._properties = ['indent'];
	this._fixedSize = 'full';
	this.indent = (options.indent) ? true : false;
	clientConfirmationButton.super_.call(this, list, path, options);
}
clientConfirmationButton.properName = 'ClientConfirmationButton';
util.inherits(clientConfirmationButton, FieldType);

module.exports = clientConfirmationButton;
