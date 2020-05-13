webpackJsonp([12],{

/***/ 803:
/*!*****************************************************************************************!*\
  !*** ./~/babel-loader?{"cacheDirectory":true}!./fields/types/location/LocationField.js ***!
  \*****************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _lodash = __webpack_require__(/*! lodash */ 45);\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Field = __webpack_require__(/*! ../Field */ 19);\n\nvar _Field2 = _interopRequireDefault(_Field);\n\nvar _elemental = __webpack_require__(/*! elemental */ 3);\n\nvar _CollapsedFieldLabel = __webpack_require__(/*! ../../components/CollapsedFieldLabel */ 431);\n\nvar _CollapsedFieldLabel2 = _interopRequireDefault(_CollapsedFieldLabel);\n\nvar _NestedFormField = __webpack_require__(/*! ../../components/NestedFormField */ 1360);\n\nvar _NestedFormField2 = _interopRequireDefault(_NestedFormField);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * TODO:\n * - Remove dependency on underscore\n * - Custom path support\n */\n\nmodule.exports = _Field2.default.create({\n\n\tdisplayName: 'LocationField',\n\tstatics: {\n\t\ttype: 'Location'\n\t},\n\n\tgetInitialState: function getInitialState() {\n\t\treturn {\n\t\t\tcollapsedFields: {},\n\t\t\timprove: false,\n\t\t\toverwrite: false\n\t\t};\n\t},\n\tcomponentWillMount: function componentWillMount() {\n\t\tvar _props$value = this.props.value,\n\t\t    value = _props$value === undefined ? [] : _props$value;\n\n\t\tvar collapsedFields = {};\n\t\t_lodash2.default.forEach(['number', 'name', 'street2', 'geo'], function (i) {\n\t\t\tif (!value[i]) {\n\t\t\t\tcollapsedFields[i] = true;\n\t\t\t}\n\t\t}, this);\n\t\tthis.setState({ collapsedFields: collapsedFields });\n\t},\n\tshouldCollapse: function shouldCollapse() {\n\t\treturn this.props.collapse && !this.formatValue();\n\t},\n\tuncollapseFields: function uncollapseFields() {\n\t\tthis.setState({\n\t\t\tcollapsedFields: {}\n\t\t});\n\t},\n\tfieldChanged: function fieldChanged(fieldPath, event) {\n\t\tvar _props = this.props,\n\t\t    _props$value2 = _props.value,\n\t\t    value = _props$value2 === undefined ? {} : _props$value2,\n\t\t    path = _props.path,\n\t\t    onChange = _props.onChange;\n\n\t\tonChange({\n\t\t\tpath: path,\n\t\t\tvalue: _extends({}, value, _defineProperty({}, fieldPath, event.target.value))\n\t\t});\n\t},\n\tmakeChanger: function makeChanger(fieldPath) {\n\t\treturn this.fieldChanged.bind(this, fieldPath);\n\t},\n\tgeoChanged: function geoChanged(i, event) {\n\t\tvar _props2 = this.props,\n\t\t    _props2$value = _props2.value,\n\t\t    value = _props2$value === undefined ? {} : _props2$value,\n\t\t    path = _props2.path,\n\t\t    onChange = _props2.onChange;\n\n\t\tvar newVal = event.target.value;\n\t\tvar geo = [i === 0 ? newVal : value.geo ? value.geo[0] : '', i === 1 ? newVal : value.geo ? value.geo[1] : ''];\n\t\tonChange({\n\t\t\tpath: path,\n\t\t\tvalue: _extends({}, value, {\n\t\t\t\tgeo: geo\n\t\t\t})\n\t\t});\n\t},\n\tmakeGeoChanger: function makeGeoChanger(fieldPath) {\n\t\treturn this.geoChanged.bind(this, fieldPath);\n\t},\n\tformatValue: function formatValue() {\n\t\tvar _props$value3 = this.props.value,\n\t\t    value = _props$value3 === undefined ? {} : _props$value3;\n\n\t\treturn _lodash2.default.compact([value.number, value.name, value.street1, value.street2, value.suburb, value.state, value.postcode, value.country]).join(', ');\n\t},\n\trenderValue: function renderValue() {\n\t\treturn _react2.default.createElement(\n\t\t\t_elemental.FormInput,\n\t\t\t{ noedit: true },\n\t\t\tthis.formatValue() || '(no value)'\n\t\t);\n\t},\n\trenderField: function renderField(fieldPath, label, collapse, autoFocus) {\n\t\tif (this.state.collapsedFields[fieldPath]) {\n\t\t\treturn null;\n\t\t}\n\t\tvar _props3 = this.props,\n\t\t    _props3$value = _props3.value,\n\t\t    value = _props3$value === undefined ? {} : _props3$value,\n\t\t    path = _props3.path;\n\n\t\treturn _react2.default.createElement(\n\t\t\t_NestedFormField2.default,\n\t\t\t{ label: label, 'data-field-location-path': path + '.' + fieldPath },\n\t\t\t_react2.default.createElement(_elemental.FormInput, { autoFocus: autoFocus, name: this.getInputName(path + '.' + fieldPath), value: value[fieldPath], onChange: this.makeChanger(fieldPath), placeholder: label })\n\t\t);\n\t},\n\trenderSuburbState: function renderSuburbState() {\n\t\tvar _props4 = this.props,\n\t\t    _props4$value = _props4.value,\n\t\t    value = _props4$value === undefined ? {} : _props4$value,\n\t\t    path = _props4.path;\n\n\t\treturn _react2.default.createElement(\n\t\t\t_NestedFormField2.default,\n\t\t\t{ label: 'Suburb / State', 'data-field-location-path': path + '.suburb_state' },\n\t\t\t_react2.default.createElement(\n\t\t\t\t_elemental.FormRow,\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_elemental.FormField,\n\t\t\t\t\t{ width: 'two-thirds', 'data-field-location-path': path + '.suburb' },\n\t\t\t\t\t_react2.default.createElement(_elemental.FormInput, { name: this.getInputName(path + '.suburb'), value: value.suburb, onChange: this.makeChanger('suburb'), placeholder: 'Suburb' })\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_elemental.FormField,\n\t\t\t\t\t{ width: 'one-third', 'data-field-location-path': path + '.state' },\n\t\t\t\t\t_react2.default.createElement(_elemental.FormInput, { name: this.getInputName(path + '.state'), value: value.state, onChange: this.makeChanger('state'), placeholder: 'State' })\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\trenderPostcodeCountry: function renderPostcodeCountry() {\n\t\tvar _props5 = this.props,\n\t\t    _props5$value = _props5.value,\n\t\t    value = _props5$value === undefined ? {} : _props5$value,\n\t\t    path = _props5.path;\n\n\t\treturn _react2.default.createElement(\n\t\t\t_NestedFormField2.default,\n\t\t\t{ label: 'Postcode / Country', 'data-field-location-path': path + '.postcode_country' },\n\t\t\t_react2.default.createElement(\n\t\t\t\t_elemental.FormRow,\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_elemental.FormField,\n\t\t\t\t\t{ width: 'one-third', 'data-field-location-path': path + '.postcode' },\n\t\t\t\t\t_react2.default.createElement(_elemental.FormInput, { name: this.getInputName(path + '.postcode'), value: value.postcode, onChange: this.makeChanger('postcode'), placeholder: 'Post Code' })\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_elemental.FormField,\n\t\t\t\t\t{ width: 'two-thirds', 'data-field-location-path': path + '.country' },\n\t\t\t\t\t_react2.default.createElement(_elemental.FormInput, { name: this.getInputName(path + '.country'), value: value.country, onChange: this.makeChanger('country'), placeholder: 'Country' })\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\trenderGeo: function renderGeo() {\n\t\tif (this.state.collapsedFields.geo) {\n\t\t\treturn null;\n\t\t}\n\t\tvar _props6 = this.props,\n\t\t    _props6$value = _props6.value,\n\t\t    value = _props6$value === undefined ? {} : _props6$value,\n\t\t    path = _props6.path,\n\t\t    paths = _props6.paths;\n\n\t\tvar geo = value.geo || [];\n\t\treturn _react2.default.createElement(\n\t\t\t_NestedFormField2.default,\n\t\t\t{ label: 'Lat / Lng', 'data-field-location-path': path + '.geo' },\n\t\t\t_react2.default.createElement(\n\t\t\t\t_elemental.FormRow,\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_elemental.FormField,\n\t\t\t\t\t{ width: 'one-half', 'data-field-location-path': 'latitude' },\n\t\t\t\t\t_react2.default.createElement(_elemental.FormInput, { name: this.getInputName(paths.geo + '[1]'), value: geo[1], onChange: this.makeGeoChanger(1), placeholder: 'Latitude' })\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_elemental.FormField,\n\t\t\t\t\t{ width: 'one-half', 'data-field-location-path': 'longitude' },\n\t\t\t\t\t_react2.default.createElement(_elemental.FormInput, { name: this.getInputName(paths.geo + '[0]'), value: geo[0], onChange: this.makeGeoChanger(0), placeholder: 'Longitude' })\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\tupdateGoogleOption: function updateGoogleOption(key, e) {\n\t\tvar newState = {};\n\t\tnewState[key] = e.target.checked;\n\t\tthis.setState(newState);\n\t},\n\tmakeGoogler: function makeGoogler(key) {\n\t\treturn this.updateGoogleOption.bind(this, key);\n\t},\n\trenderGoogleOptions: function renderGoogleOptions() {\n\t\tvar _props7 = this.props,\n\t\t    paths = _props7.paths,\n\t\t    enableMapsAPI = _props7.enableMapsAPI;\n\n\t\tif (!enableMapsAPI) return null;\n\t\tvar replace = this.state.improve ? _react2.default.createElement(_elemental.Checkbox, {\n\t\t\tlabel: 'Replace existing data',\n\t\t\tname: this.getInputName(paths.overwrite),\n\t\t\tonChange: this.makeGoogler('overwrite'),\n\t\t\tchecked: this.state.overwrite }) : null;\n\t\treturn _react2.default.createElement(\n\t\t\t_elemental.FormField,\n\t\t\t{ offsetAbsentLabel: true },\n\t\t\t_react2.default.createElement(_elemental.Checkbox, {\n\t\t\t\tlabel: 'Autodetect and improve location on save',\n\t\t\t\tname: this.getInputName(paths.improve),\n\t\t\t\tonChange: this.makeGoogler('improve'),\n\t\t\t\tchecked: this.state.improve,\n\t\t\t\ttitle: 'When checked, this will attempt to fill missing fields. It will also get the lat/long' }),\n\t\t\treplace\n\t\t);\n\t},\n\trenderNote: function renderNote() {\n\t\tvar note = this.props.note;\n\n\t\tif (!note) return null;\n\t\treturn _react2.default.createElement(\n\t\t\t_elemental.FormField,\n\t\t\t{ offsetAbsentLabel: true },\n\t\t\t_react2.default.createElement(_elemental.FormNote, { note: note })\n\t\t);\n\t},\n\trenderUI: function renderUI() {\n\n\t\tif (!this.shouldRenderField()) {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t_elemental.FormField,\n\t\t\t\t{ label: this.props.label },\n\t\t\t\tthis.renderValue()\n\t\t\t);\n\t\t}\n\n\t\t/* eslint-disable no-script-url */\n\t\tvar showMore = !_lodash2.default.isEmpty(this.state.collapsedFields) ? _react2.default.createElement(\n\t\t\t_CollapsedFieldLabel2.default,\n\t\t\t{ onClick: this.uncollapseFields },\n\t\t\t'(show more fields)'\n\t\t) : null;\n\t\t/* eslint-enable */\n\n\t\tvar _props8 = this.props,\n\t\t    label = _props8.label,\n\t\t    path = _props8.path;\n\n\t\treturn _react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ 'data-field-name': path, 'data-field-type': 'location' },\n\t\t\t_react2.default.createElement(\n\t\t\t\t_elemental.FormField,\n\t\t\t\t{ label: label },\n\t\t\t\tshowMore\n\t\t\t),\n\t\t\tthis.renderField('number', 'PO Box / Shop', true, true),\n\t\t\tthis.renderField('name', 'Building Name', true),\n\t\t\tthis.renderField('street1', 'Street Address'),\n\t\t\tthis.renderField('street2', 'Street Address 2', true),\n\t\t\tthis.renderSuburbState(),\n\t\t\tthis.renderPostcodeCountry(),\n\t\t\tthis.renderGeo(),\n\t\t\tthis.renderGoogleOptions(),\n\t\t\tthis.renderNote()\n\t\t);\n\t}\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/babel-loader?{\"cacheDirectory\":true}!./fields/types/location/LocationField.js\n// module id = 803\n// module chunks = 12\n//# sourceURL=webpack:///./fields/types/location/LocationField.js?./~/babel-loader?%7B%22cacheDirectory%22:true%7D");

/***/ }),

/***/ 1360:
/*!**********************************************!*\
  !*** ./fields/components/NestedFormField.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	eval("var React = __webpack_require__(/*! react */ 1);\nvar component;\nvar desc = {\n\tloadComponent: function(callback) {\n\t\tif(!component) {\n\t\t\t__webpack_require__.e/* nsure */(57, function() {\n\t\t\t\tcomponent = __webpack_require__(/*! !../../~/babel-loader?{\"cacheDirectory\":true}!./NestedFormField.js */ 753);\n\t\t\t\tif(callback) callback(component);\n\t\t\t});\n\t\t} else if(callback) callback(component);\n\t\treturn component;\n\t},\n};\nvar mixinReactProxy = __webpack_require__(/*! ../../~/react-proxy-loader/mixinReactProxy.js */ 5);\nmixinReactProxy(React, desc);\nmodule.exports = React.createClass(desc);\nmodule.exports.Mixin = desc;\n\n//////////////////\n// WEBPACK FOOTER\n// ./fields/components/NestedFormField.js\n// module id = 1360\n// module chunks = 12\n//# sourceURL=webpack:///./fields/components/NestedFormField.js?");

/***/ })

});