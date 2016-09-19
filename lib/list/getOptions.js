var _ = require('lodash');
var fieldTypes = require('../fieldTypes');
/**
 * Gets the options for the List, as used by the React components
 */
function getOptions () {
	var ops = {
		autocreate: this.options.autocreate,
		autokey: this.autokey,
		defaultColumns: this.options.defaultColumns,
		defaultSort: this.options.defaultSort,
		fields: {},
		hidden: this.options.hidden,
		initialFields: _.map(this.initialFields, 'path'),
		key: this.key,
		label: this.label,
		nameField: this.nameField ? this.nameField.getOptions() : null,
		nameFieldIsFormHeader: this.nameFieldIsFormHeader,
		nameIsInitial: this.nameIsInitial,
		nameIsVirtual: this.nameIsVirtual,
		namePath: this.namePath,
		nocreate: this.options.nocreate,
		nodelete: this.options.nodelete,
		noedit: this.options.noedit,
		path: this.path,
		perPage: this.options.perPage,
		plural: this.plural,
		searchFields: this.options.searchFields,
		singular: this.singular,
		sortable: this.options.sortable,
		sortContext: this.options.sortContext,
		track: this.options.track,
		tracking: this.tracking,
		relationships: this.relationships,
	};
	function uiElToClient (uiElements) {
		return uiElements.map(function (el) {
			if (el.type === 'field') {
				// add the field options by path
				ops.fields[el.field.path] = el.field.getOptions();
				return {
					type: 'field',
					field: el.field.path,
					hidden: el.field.hidden,
					children: el.children && uiElToClient(el.children),
				};
			}
			var viewType = el.options.type;
			// This sucks
			var view = typeof viewType === 'string' ? fieldTypes[viewType].name : viewType.name;
			return Object.assign({}, el, {
				type: 'view',
				view: view,
				options: Object.assign({}, el.options, { type: undefined }),
				children: el.children && uiElToClient(el.children),
			});
		});
	}
	ops.uiElements = uiElToClient(this.uiElements);
	return ops;
}

module.exports = getOptions;
