var _ = require('lodash');

function checkValid (item, prefix, key) {
	if (!item) {
		throw new Error(
			'Invalid value for schema path `' + prefix + ' ' + key + '`.\n'
			+ 'Did you misspell the field type?\n'
		);
	}
}
// Converts keystone model schema to canonical nested ui schema
// if array: can contain strings or objects
// if object: can contain subobjects or fields/views
function toUiArray (thing, prefix, collapsible) {
	var result;
	var stack;
	var uiItem;

	function rewindTo (view) {
		while (stack.length > 1 && stack[0].options.type !== view) {
			stack.shift();
		}
	}
	function makeHeading (heading, options) {
		// headings can be adjacent in level
		if (stack[0].options.type === 'Heading') {
			stack.shift();
		}
		uiItem = {
			type: 'view',
			options: Object.assign(
				{ collapsible: collapsible },
				options,
				{ type: 'Heading', heading: heading }
			),
			path: prefix,
			children: [],
		};
		stack[0].children.push(uiItem);
		stack.unshift(uiItem);
	}

	if (_.isArray(thing)) {
		stack = [{ children: [], options: {} }];

		thing.forEach(function (item) {
			if (typeof item === 'string') {
				if (item === '>>>') {
					uiItem = {
						type: 'view',
						options: { type: 'Indent' },
						path: prefix,
						children: [],
					};
					stack[0].children.push(uiItem);
					stack.unshift(uiItem);
				} else if (item === '<<<') {
					rewindTo('>>>');
				} else {
					makeHeading(item, {});
				}
			} else if (item.heading && typeof item.heading === 'string') {
				makeHeading(item.heading, item);
			} else if (item.options && (item.type === 'field' || item.type === 'view')) {
				// already in correct format
				stack[0].children.push(item);
			} else {
				stack[0].children = stack[0].children.concat(toUiArray(item, prefix, collapsible));
			}
		});
		return stack[stack.length - 1].children;
	} else {
		result = [];
		_.forEach(thing, function (item, key) {
			var path = prefix + key;
			checkValid(item, path, '');
			uiItem = Object.assign({ path: path }, item);
			if (item.hasOwnProperty('view')) {
				// checkValid(item.view, path, 'view');
				uiItem.type = 'view';
				uiItem.options = Object.assign({}, item, { type: item.view });
				if (item.children) {
					uiItem.children = toUiArray(item.children, path + '.');
				}
			} else if (item.hasOwnProperty('type')) {
				// checkValid(item.type, path, 'type');
				uiItem.type = 'field';
				uiItem.options = item;
				if (item.children) {
					uiItem.children = toUiArray(item.children, path + '.', collapsible);
				}
			} else if (!item.constructor || item.constructor.name === 'Object') {
				uiItem.type = 'view';
				uiItem.options = { type: 'Nested' };
				uiItem.nested = true;
				uiItem.children = toUiArray(item, path + '.');
			} else {
				uiItem.type = 'field';
				uiItem.options = { type: item };
			}
			result.push(uiItem);
		});
		return result;
	}
}


/**
 * Adds one or more fields to the List
 * Based on Mongoose's Schema.add
 */
debugger;
function add () {
	var args = Array.prototype.slice.call(arguments);
	var self = this;
	var collapsible = self.options.collapseSections;

	function uiToSchema (uiItems) {
		uiItems.forEach(function (item) {
			var path = item.path;
			if (self.isReserved(path)) {
				throw new Error('Path ' + path + ' on list ' + this.key + ' is a reserved path');
			}
			if (item.type === 'field') {
				self.schemaFields.push(item);
				item.field = self.field(path, item.options);
			}


			if (item.children) {
				if (item.nested) {
					self.schema.nested[path] = true;
				}
				uiToSchema(item.children);
			}
		});
	}

	var newUiElements = toUiArray(args, '', collapsible);
	self.uiElements = self.uiElements.concat(newUiElements);
	uiToSchema(newUiElements);

	return this;
}

module.exports = add;
