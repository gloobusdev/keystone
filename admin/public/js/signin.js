webpackJsonp([54],{

/***/ 0:
/*!**************************************!*\
  !*** ./admin/client/Signin/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 18);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _Signin = __webpack_require__(/*! ./Signin */ 677);\n\nvar _Signin2 = _interopRequireDefault(_Signin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_reactDom2.default.render(_react2.default.createElement(_Signin2.default, {\n\tbrand: Keystone.brand,\n\tfrom: Keystone.from,\n\tlogo: Keystone.logo,\n\tuser: Keystone.user,\n\tuserCanAccessKeystone: Keystone.userCanAccessKeystone\n}), document.getElementById('signin-view')); /**\n                                              * The signin page, it renders a page with a username and password input form.\n                                              *\n                                              * This is decoupled from the main app (in the \"App/\" folder) because we inject\n                                              * lots of data into the other screens (like the lists that exist) that we don't\n                                              * want to have injected here, so this is a completely separate route and template.\n                                              */\n\n//////////////////\n// WEBPACK FOOTER\n// ./admin/client/Signin/index.js\n// module id = 0\n// module chunks = 54\n//# sourceURL=webpack:///./admin/client/Signin/index.js?");

/***/ },

/***/ 677:
/*!***************************************!*\
  !*** ./admin/client/Signin/Signin.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _objectAssign = __webpack_require__(/*! object-assign */ 6);\n\nvar _objectAssign2 = _interopRequireDefault(_objectAssign);\n\nvar _classnames = __webpack_require__(/*! classnames */ 4);\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _xhr = __webpack_require__(/*! xhr */ 170);\n\nvar _xhr2 = _interopRequireDefault(_xhr);\n\nvar _Alert = __webpack_require__(/*! ./components/Alert */ 678);\n\nvar _Alert2 = _interopRequireDefault(_Alert);\n\nvar _Brand = __webpack_require__(/*! ./components/Brand */ 679);\n\nvar _Brand2 = _interopRequireDefault(_Brand);\n\nvar _UserInfo = __webpack_require__(/*! ./components/UserInfo */ 681);\n\nvar _UserInfo2 = _interopRequireDefault(_UserInfo);\n\nvar _LoginForm = __webpack_require__(/*! ./components/LoginForm */ 680);\n\nvar _LoginForm2 = _interopRequireDefault(_LoginForm);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * The actual Sign In view, with the login form\n */\n\nvar SigninView = _react2.default.createClass({\n\tdisplayName: 'SigninView',\n\tgetInitialState: function getInitialState() {\n\t\treturn {\n\t\t\temail: '',\n\t\t\tpassword: '',\n\t\t\tisAnimating: false,\n\t\t\tisInvalid: false,\n\t\t\tinvalidMessage: '',\n\t\t\tsignedOut: window.location.search === '?signedout'\n\t\t};\n\t},\n\tcomponentDidMount: function componentDidMount() {\n\t\t// Focus the email field when we're mounted\n\t\tif (this.refs.email) {\n\t\t\tthis.refs.email.select();\n\t\t}\n\t},\n\thandleInputChange: function handleInputChange(e) {\n\t\t// Set the new state when the input changes\n\t\tvar newState = {};\n\t\tnewState[e.target.name] = e.target.value;\n\t\tthis.setState(newState);\n\t},\n\thandleSubmit: function handleSubmit(e) {\n\t\tvar _this = this;\n\n\t\te.preventDefault();\n\t\t// If either password or mail are missing, show an error\n\t\tif (!this.state.email || !this.state.password) {\n\t\t\treturn this.displayError('Please enter an email address and password to sign in.');\n\t\t}\n\n\t\t(0, _xhr2.default)({\n\t\t\turl: Keystone.adminPath + '/api/session/signin',\n\t\t\tmethod: 'post',\n\t\t\tjson: {\n\t\t\t\temail: this.state.email,\n\t\t\t\tpassword: this.state.password\n\t\t\t},\n\t\t\theaders: (0, _objectAssign2.default)({}, Keystone.csrf.header)\n\t\t}, function (err, resp, body) {\n\t\t\tif (err || body && body.error) {\n\t\t\t\treturn body.error === 'invalid csrf' ? _this.displayError('Something went wrong; please refresh your browser and try again.') : _this.displayError('The email and password you entered are not valid.');\n\t\t\t} else {\n\t\t\t\t// Redirect to where we came from or to the default admin path\n\t\t\t\tif (Keystone.redirect) {\n\t\t\t\t\ttop.location.href = Keystone.redirect;\n\t\t\t\t} else {\n\t\t\t\t\ttop.location.href = _this.props.from ? _this.props.from : Keystone.adminPath;\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t},\n\n\t/**\n  * Display an error message\n  *\n  * @param  {String} message The message you want to show\n  */\n\tdisplayError: function displayError(message) {\n\t\tthis.setState({\n\t\t\tisAnimating: true,\n\t\t\tisInvalid: true,\n\t\t\tinvalidMessage: message\n\t\t});\n\t\tsetTimeout(this.finishAnimation, 750);\n\t},\n\n\t// Finish the animation and select the email field\n\tfinishAnimation: function finishAnimation() {\n\t\t// TODO isMounted was deprecated, find out if we need this guard\n\t\tif (!this.isMounted()) return;\n\t\tif (this.refs.email) {\n\t\t\tthis.refs.email.select();\n\t\t}\n\t\tthis.setState({\n\t\t\tisAnimating: false\n\t\t});\n\t},\n\trender: function render() {\n\t\tvar boxClassname = (0, _classnames2.default)('auth-box', {\n\t\t\t'auth-box--has-errors': this.state.isAnimating\n\t\t});\n\t\treturn _react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'auth-wrapper' },\n\t\t\t_react2.default.createElement(_Alert2.default, {\n\t\t\t\tisInvalid: this.state.isInvalid,\n\t\t\t\tsignedOut: this.state.signedOut,\n\t\t\t\tinvalidMessage: this.state.invalidMessage\n\t\t\t}),\n\t\t\t_react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: boxClassname },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'h1',\n\t\t\t\t\t{ className: 'u-hidden-visually' },\n\t\t\t\t\tthis.props.brand ? this.props.brand : 'Keystone',\n\t\t\t\t\t' Sign In '\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'auth-box__inner' },\n\t\t\t\t\t_react2.default.createElement(_Brand2.default, {\n\t\t\t\t\t\tlogo: this.props.logo,\n\t\t\t\t\t\tbrand: this.props.brand\n\t\t\t\t\t}),\n\t\t\t\t\tthis.props.user ? _react2.default.createElement(_UserInfo2.default, {\n\t\t\t\t\t\tadminPath: this.props.from ? this.props.from : Keystone.adminPath,\n\t\t\t\t\t\tsignoutPath: Keystone.adminPath + '/signout',\n\t\t\t\t\t\tuserCanAccessKeystone: this.props.userCanAccessKeystone,\n\t\t\t\t\t\tuserName: this.props.user.name\n\t\t\t\t\t}) : _react2.default.createElement(_LoginForm2.default, {\n\t\t\t\t\t\temail: this.state.email,\n\t\t\t\t\t\thandleInputChange: this.handleInputChange,\n\t\t\t\t\t\thandleSubmit: this.handleSubmit,\n\t\t\t\t\t\tisAnimating: this.state.isAnimating,\n\t\t\t\t\t\tpassword: this.state.password\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t),\n\t\t\t_react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'auth-footer' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Powered by '\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'a',\n\t\t\t\t\t{ href: 'http://keystonejs.com', target: '_blank', title: 'The Node.js CMS and web application platform (new window)' },\n\t\t\t\t\t'KeystoneJS'\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});\n\nmodule.exports = SigninView;\n\n//////////////////\n// WEBPACK FOOTER\n// ./admin/client/Signin/Signin.js\n// module id = 677\n// module chunks = 54\n//# sourceURL=webpack:///./admin/client/Signin/Signin.js?");

/***/ },

/***/ 678:
/*!*************************************************!*\
  !*** ./admin/client/Signin/components/Alert.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _elemental = __webpack_require__(/*! elemental */ 3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Renders an Alert. Pass either an isInvalid and invalidMessage prop, or set\n * the signedOut prop to true to show the standard signed out message\n */\n\nvar AlertView = function AlertView(props) {\n\tif (props.isInvalid) {\n\t\treturn _react2.default.createElement(\n\t\t\t_elemental.Alert,\n\t\t\t{ key: 'error', type: 'danger', style: { textAlign: 'center' } },\n\t\t\tprops.invalidMessage\n\t\t);\n\t} else if (props.signedOut) {\n\t\treturn _react2.default.createElement(\n\t\t\t_elemental.Alert,\n\t\t\t{ key: 'signed-out', type: 'info', style: { textAlign: 'center' } },\n\t\t\t'You have been signed out.'\n\t\t);\n\t} else {\n\t\t// Can't return \"null\" from stateless components\n\t\treturn _react2.default.createElement('span', null);\n\t}\n};\n\nAlertView.propTypes = {\n\tinvalidMessage: _react2.default.PropTypes.string,\n\tisInvalid: _react2.default.PropTypes.bool,\n\tsignedOut: _react2.default.PropTypes.bool\n};\n\nmodule.exports = AlertView;\n\n//////////////////\n// WEBPACK FOOTER\n// ./admin/client/Signin/components/Alert.js\n// module id = 678\n// module chunks = 54\n//# sourceURL=webpack:///./admin/client/Signin/components/Alert.js?");

/***/ },

/***/ 679:
/*!*************************************************!*\
  !*** ./admin/client/Signin/components/Brand.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Brand = function Brand(props) {\n\t// Default to the KeystoneJS logo\n\tvar logo = { src: Keystone.adminPath + '/images/logo.png', width: 205, height: 68 };\n\tif (props.logo) {\n\t\t// If the logo is set to a string, it's a direct link\n\t\tlogo = typeof props.logo === 'string' ? { src: props.logo } : props.logo;\n\t\t// Optionally one can specify the logo as an array, also stating the\n\t\t// wanted width and height of the logo\n\t\t// TODO: Deprecate this\n\t\tif (Array.isArray(logo)) {\n\t\t\tlogo = { src: logo[0], width: logo[1], height: logo[2] };\n\t\t}\n\t}\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\t{ className: 'auth-box__col' },\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'auth-box__brand' },\n\t\t\t_react2.default.createElement(\n\t\t\t\t'a',\n\t\t\t\t{ href: '/', className: 'auth-box__brand__logo' },\n\t\t\t\t_react2.default.createElement('img', {\n\t\t\t\t\tsrc: logo.src,\n\t\t\t\t\twidth: logo.width ? logo.width : null,\n\t\t\t\t\theight: logo.height ? logo.height : null,\n\t\t\t\t\talt: props.brand\n\t\t\t\t})\n\t\t\t)\n\t\t)\n\t);\n}; /**\n    * Renders a logo, defaulting to the Keystone logo if no brand is specified in\n    * the configuration\n    */\n\nmodule.exports = Brand;\n\n//////////////////\n// WEBPACK FOOTER\n// ./admin/client/Signin/components/Brand.js\n// module id = 679\n// module chunks = 54\n//# sourceURL=webpack:///./admin/client/Signin/components/Brand.js?");

/***/ },

/***/ 680:
/*!*****************************************************!*\
  !*** ./admin/client/Signin/components/LoginForm.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _elemental = __webpack_require__(/*! ../../App/elemental */ 35);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * The login form of the signin screen\n */\n\nvar LoginForm = function LoginForm(_ref) {\n\tvar email = _ref.email,\n\t    handleInputChange = _ref.handleInputChange,\n\t    handleSubmit = _ref.handleSubmit,\n\t    isAnimating = _ref.isAnimating,\n\t    password = _ref.password;\n\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\t{ className: 'auth-box__col' },\n\t\t_react2.default.createElement(\n\t\t\t_elemental.Form,\n\t\t\t{ onSubmit: handleSubmit, noValidate: true },\n\t\t\t_react2.default.createElement(\n\t\t\t\t_elemental.FormField,\n\t\t\t\t{ label: 'Email', htmlFor: 'email' },\n\t\t\t\t_react2.default.createElement(_elemental.FormInput, {\n\t\t\t\t\tautoFocus: true,\n\t\t\t\t\ttype: 'email',\n\t\t\t\t\tname: 'email',\n\t\t\t\t\tonChange: handleInputChange,\n\t\t\t\t\tvalue: email\n\t\t\t\t})\n\t\t\t),\n\t\t\t_react2.default.createElement(\n\t\t\t\t_elemental.FormField,\n\t\t\t\t{ label: 'Password', htmlFor: 'password' },\n\t\t\t\t_react2.default.createElement(_elemental.FormInput, {\n\t\t\t\t\ttype: 'password',\n\t\t\t\t\tname: 'password',\n\t\t\t\t\tonChange: handleInputChange,\n\t\t\t\t\tvalue: password\n\t\t\t\t})\n\t\t\t),\n\t\t\t_react2.default.createElement(\n\t\t\t\t_elemental.Button,\n\t\t\t\t{ disabled: isAnimating, color: 'primary', type: 'submit' },\n\t\t\t\t'Sign In'\n\t\t\t)\n\t\t)\n\t);\n};\n\nLoginForm.propTypes = {\n\temail: _react.PropTypes.string,\n\thandleInputChange: _react.PropTypes.func.isRequired,\n\thandleSubmit: _react.PropTypes.func.isRequired,\n\tisAnimating: _react.PropTypes.bool,\n\tpassword: _react.PropTypes.string\n};\n\nmodule.exports = LoginForm;\n\n//////////////////\n// WEBPACK FOOTER\n// ./admin/client/Signin/components/LoginForm.js\n// module id = 680\n// module chunks = 54\n//# sourceURL=webpack:///./admin/client/Signin/components/LoginForm.js?");

/***/ },

/***/ 681:
/*!****************************************************!*\
  !*** ./admin/client/Signin/components/UserInfo.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _elemental = __webpack_require__(/*! ../../App/elemental */ 35);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// TODO Figure out if we should change \"Keystone\" to \"Admin area\"\n\nvar UserInfo = function UserInfo(_ref) {\n\tvar adminPath = _ref.adminPath,\n\t    signoutPath = _ref.signoutPath,\n\t    userCanAccessKeystone = _ref.userCanAccessKeystone,\n\t    userName = _ref.userName;\n\n\tvar adminButton = userCanAccessKeystone ? _react2.default.createElement(\n\t\t_elemental.Button,\n\t\t{ href: adminPath, color: 'primary' },\n\t\t'Open Keystone'\n\t) : null;\n\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\t{ className: 'auth-box__col' },\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\t'Hi ',\n\t\t\tuserName,\n\t\t\t','\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'p',\n\t\t\tnull,\n\t\t\t'You\\'re already signed in.'\n\t\t),\n\t\tadminButton,\n\t\t_react2.default.createElement(\n\t\t\t_elemental.Button,\n\t\t\t{ href: signoutPath, variant: 'link', color: 'cancel' },\n\t\t\t'Sign Out'\n\t\t)\n\t);\n};\n\nUserInfo.propTypes = {\n\tadminPath: _react.PropTypes.string.isRequired,\n\tsignoutPath: _react.PropTypes.string.isRequired,\n\tuserCanAccessKeystone: _react.PropTypes.bool,\n\tuserName: _react.PropTypes.string.isRequired\n};\n\nmodule.exports = UserInfo;\n\n//////////////////\n// WEBPACK FOOTER\n// ./admin/client/Signin/components/UserInfo.js\n// module id = 681\n// module chunks = 54\n//# sourceURL=webpack:///./admin/client/Signin/components/UserInfo.js?");

/***/ }

});