var async = require('async');

module.exports = function (req, res) {
	var keystone = req.keystone;

	if (!keystone.security.csrf.validate(req)) {
		return res.apiError(403, 'invalid csrf');
	}

	var ids = req.body.ids || req.body.id || req.params.id;
	if (typeof ids === 'string') {
		ids = ids.split(',');
	}
	if (!Array.isArray(ids)) {
		ids = [ids];
	}

	var duplicatedCount = 0;
	var duplicatedIds = [];
	req.list.model.find().where('_id').in(ids).exec(function (err, results) {
		if (err) {
			console.log('Error duplicating ' + req.list.key + ' items:', err);
			return res.apiError('database error', err);
		}
		var itemClone = {};
		async.forEachLimit(results, 10, function (item, next) {
			itemClone = JSON.parse(JSON.stringify(item));

			if (itemClone && itemClone._id) {
				delete itemClone._id;
			}
			if (itemClone && itemClone.id) {
				delete itemClone.id;
			}

			item = new req.list.model();

			req.list.updateItem(item, itemClone, function (err) {
				if (err) return next({err});
				duplicatedCount++;
				duplicatedIds.push(item.id);
				next();
			});
		}, function () {
			return res.json({
				success: true,
				ids: duplicatedIds,
				count: duplicatedCount,
			});
		});
	});
};
