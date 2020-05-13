webpackJsonp([15],{

/***/ 266:
/*!*************************************************************!*\
  !*** ./fields/components/columns/CloudinaryImageSummary.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar IMAGE_SIZE = 18;\n\nvar linkStyle = {\n\tmarginRight: 8\n};\nvar boxStyle = {\n\tborderRadius: 3,\n\tdisplay: 'inline-block',\n\theight: IMAGE_SIZE,\n\toverflow: 'hidden',\n\tverticalAlign: 'middle',\n\twidth: IMAGE_SIZE\n};\nvar imageStyle = {\n\tdisplay: 'block',\n\theight: IMAGE_SIZE,\n\tleft: '50%',\n\tposition: 'relative',\n\n\tWebkitTransform: 'translateX(-50%)',\n\tMozTransform: 'translateX(-50%)',\n\tmsTransform: 'translateX(-50%)',\n\ttransform: 'translateX(-50%)'\n};\nvar textStyle = {\n\tcolor: '#888',\n\tdisplay: 'inline-block',\n\tfontSize: '.8rem',\n\tmarginLeft: 8,\n\tverticalAlign: 'middle'\n};\n\nvar CloudinaryImageSummary = _react2.default.createClass({\n\tdisplayName: 'CloudinaryImageSummary',\n\tpropTypes: {\n\t\timage: _react2.default.PropTypes.object.isRequired,\n\t\tlabel: _react2.default.PropTypes.oneOf(['dimensions', 'publicId'])\n\t},\n\trenderLabel: function renderLabel() {\n\t\tif (!this.props.label) return;\n\n\t\tvar _props = this.props,\n\t\t    label = _props.label,\n\t\t    image = _props.image;\n\n\n\t\tvar text = void 0;\n\t\tif (label === 'dimensions') {\n\t\t\ttext = image.width + ' \\xD7 ' + image.height;\n\t\t} else {\n\t\t\ttext = image.public_id + '.' + image.format;\n\t\t}\n\n\t\treturn _react2.default.createElement(\n\t\t\t'span',\n\t\t\t{ style: textStyle },\n\t\t\ttext\n\t\t);\n\t},\n\trenderImageThumbnail: function renderImageThumbnail() {\n\t\tif (!this.props.image) return;\n\t\tvar url = this.props.image.url.replace(/image\\/upload/, 'image/upload/c_thumb,g_face,h_' + IMAGE_SIZE + ',w_' + IMAGE_SIZE);\n\t\treturn _react2.default.createElement('img', { src: url, style: imageStyle, className: 'img-load' });\n\t},\n\trender: function render() {\n\t\treturn _react2.default.createElement(\n\t\t\t'span',\n\t\t\t{ style: linkStyle },\n\t\t\t_react2.default.createElement(\n\t\t\t\t'span',\n\t\t\t\t{ style: boxStyle },\n\t\t\t\tthis.renderImageThumbnail()\n\t\t\t),\n\t\t\tthis.renderLabel()\n\t\t);\n\t}\n});\n\nmodule.exports = CloudinaryImageSummary;\n\n//////////////////\n// WEBPACK FOOTER\n// ./fields/components/columns/CloudinaryImageSummary.js\n// module id = 266\n// module chunks = 14 15\n//# sourceURL=webpack:///./fields/components/columns/CloudinaryImageSummary.js?");

/***/ }),

/***/ 759:
/*!********************************************************************************************************!*\
  !*** ./~/babel-loader?{"cacheDirectory":true}!./fields/types/cloudinaryimage/CloudinaryImageColumn.js ***!
  \********************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _CloudinaryImageSummary = __webpack_require__(/*! ../../components/columns/CloudinaryImageSummary */ 266);\n\nvar _CloudinaryImageSummary2 = _interopRequireDefault(_CloudinaryImageSummary);\n\nvar _ItemsTableCell = __webpack_require__(/*! ../../components/ItemsTableCell */ 29);\n\nvar _ItemsTableCell2 = _interopRequireDefault(_ItemsTableCell);\n\nvar _ItemsTableValue = __webpack_require__(/*! ../../components/ItemsTableValue */ 30);\n\nvar _ItemsTableValue2 = _interopRequireDefault(_ItemsTableValue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar CloudinaryImageColumn = _react2.default.createClass({\n\tdisplayName: 'CloudinaryImageColumn',\n\tpropTypes: {\n\t\tcol: _react2.default.PropTypes.object,\n\t\tdata: _react2.default.PropTypes.object\n\t},\n\trenderValue: function renderValue() {\n\t\tvar value = this.props.data.fields[this.props.col.path];\n\t\tif (!value || !Object.keys(value).length) return;\n\n\t\treturn _react2.default.createElement(\n\t\t\t_ItemsTableValue2.default,\n\t\t\t{ field: this.props.col.type },\n\t\t\t_react2.default.createElement(_CloudinaryImageSummary2.default, { label: 'dimensions', image: value })\n\t\t);\n\t},\n\trender: function render() {\n\t\treturn _react2.default.createElement(\n\t\t\t_ItemsTableCell2.default,\n\t\t\tnull,\n\t\t\tthis.renderValue()\n\t\t);\n\t}\n});\n\nmodule.exports = CloudinaryImageColumn;\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/babel-loader?{\"cacheDirectory\":true}!./fields/types/cloudinaryimage/CloudinaryImageColumn.js\n// module id = 759\n// module chunks = 15\n//# sourceURL=webpack:///./fields/types/cloudinaryimage/CloudinaryImageColumn.js?./~/babel-loader?%7B%22cacheDirectory%22:true%7D");

/***/ })

});