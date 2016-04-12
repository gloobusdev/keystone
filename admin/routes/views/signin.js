var keystone = require('../../../');
var session = require('../../../lib/session');
var url = require('url');

exports = module.exports = function(req, res) {

	function renderView() {
		keystone.render(req, res, 'signin', {
			submitted: req.body,
			from: req.query.from,
			logo: keystone.get('signin logo')
		});
	}

	// If a form was submitted, process the login attempt
	if (req.method === 'POST') {

		if (!req.body.email || !req.body.password) {
			req.flash('error', 'Please enter your email address and password.');
			return renderView();
		}

		var onSuccess = function (user) {

			if (req.query.from && req.query.from.match(/^(?!http|\/\/|javascript).+/)) {
				var parsed = url.parse(req.query.from);
				if(parsed.host || parsed.protocol || parsed.auth){
					res.redirect('/keystone');
				}else{
					res.redirect(parsed.path);
				}			
			} else if ('string' === typeof keystone.get('signin redirect')) {
				res.redirect(keystone.get('signin redirect'));
			} else if ('function' === typeof keystone.get('signin redirect')) {
				keystone.get('signin redirect')(user, req, res);
			} else {
				res.redirect('/keystone');
			}

		};

		var onFail = function (err) {
			var message = (err && err.message) ? err.message : 'Sorry, that email and password combo are not valid.';
			req.flash('error', message );
			renderView();
		};

		session.signin(req.body, req, res, onSuccess, onFail);

	} else {
		renderView();
	}

};