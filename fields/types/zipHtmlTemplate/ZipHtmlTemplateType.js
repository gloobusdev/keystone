var FieldType = require('../Type');
var util = require('util');
var assign = require('object-assign');
var utils = require('keystone-utils');
var underscore = require('underscore');
var pathModule = require('path');
var nesProp = require('nested-property');

var debug = require('debug')('keystone:fields:zipHtmlTemplate');

/**
 * ZipHtmlTemplate FieldType Constructor
 */
function zipHtmlTemplate (list, path, options) {
	this.options = options;
	this._properties = ['options'];
	this._underscoreMethods = ['format', 'upload', 'remove', 'reset'];
	this._fixedSize = 'full';

	if (!options.storage) {
		throw new Error('Invalid Configuration\n\n'
			+ 'File fields (' + list.key + '.' + path + ') require storage to be provided.');
	}
	this.storage = options.storage;

	zipHtmlTemplate.super_.call(this, list, path, options);
}

zipHtmlTemplate.properName = 'ZipHtmlTemplate';
util.inherits(zipHtmlTemplate, FieldType);

zipHtmlTemplate.prototype.getData = function (item) {
	var file = item.get(this.path);

	if (!file) {
		return file;
	}
	var doc = item;
	while (doc.parent) {
		doc = doc.parent();
		if (!doc) {
			return file;
		}
	}

	var listId = encodeURIComponent(this.list.key);
	var docId = encodeURIComponent(doc._id);
	var fileId = encodeURIComponent(file._id || file.filename);
	if (fileId === docId) {
		fileId = encodeURIComponent(file.filename);
	}
	var name = encodeURIComponent(file.originalname || file.filename);
	return assign(
		{},
		file,
		{ url: '/files/' + listId + '/' + docId + '/' + fileId + '/' + name }
	);
};

/**
 * Registers the field on the List's Mongoose Schema.
 */
zipHtmlTemplate.prototype.addToSchema = function (schema) {
	var field = this;

	this.paths = {};
	// add field paths from the storage schema
	Object.keys(this.storage.schema).forEach(function (path) {
		field.paths[path] = field._path.append('.' + path);
	});

	var schemaPaths = this._path.addTo({}, this.storage.schema);
	schema.add(schemaPaths);

	this.bindUnderscoreMethods();
};

/**
 * Uploads a new file
 */
zipHtmlTemplate.prototype.upload = function (item, file, languageIndex, callback) {
	var field = this;
	var filetype = file.mimetype || file.type;

	if (field.options.allowedTypes && !underscore.includes(field.options.allowedTypes, filetype)) {
		return callback(new Error('Unsupported File Type: ' + filetype));
	}

// fetch from options if must unzip
// get unziped HTML url

	// TODO; Validate there is actuall a file to upload
	debug('[%s.%s] Uploading file for item %s:', this.list.key, this.path, item.id, file);
	this.storage.uploadFile(file, function (err, result) {
		if (err) return callback(err);
		debug('[%s.%s] Uploaded file for item %s with result:', field.list.key, field.path, item.id, result);

		// create folder name
		var fileNameNoExt = result.filename.split('.').slice(0, -1).join('.')
		var fileNameNoExtCapitalized = fileNameNoExt.charAt(0).toUpperCase() + fileNameNoExt.slice(1)
		var extractToFolderName = "Template"+fileNameNoExtCapitalized

		// generate full path with own directory
		var fullPathTargetDir = result.path + pathModule.sep + extractToFolderName;

		// schema object paths to save the physical path of files
		var schemaPathForHtml = field.path.split('.').slice(0,-1).join('.')+".htmlPath";
		var schemaPathForPdf = field.path.split('.').slice(0,-1).join('.')+".pdfPath";
		var schemaPathForZip = field.path.split('.').slice(0,-1).join('.')+".zipPath";
		// init variable
		var relativePdfFilePath = ''

		field.storage.adapter.unzipFile(result, fullPathTargetDir, (zipEntries) => {
			zipEntries.forEach(function(zipEntry) {

				// get extension of current entry name
				var extension = zipEntry.entryName.split('.').pop().toLowerCase()

				if (extension == 'html' || extension == 'htm') {

					// get html relative path and save it
					var relativeHtmlFilePath = extractToFolderName + pathModule.sep + zipEntry.entryName
					item.set(schemaPathForHtml+"."+languageIndex, relativeHtmlFilePath);
					var fullHtmlFilePath =  fullPathTargetDir + pathModule.sep + zipEntry.entryName;
					var fullPdfFilePath = fullHtmlFilePath.split('.').slice(0,-1)+'.pdf';
					relativePdfFilePath = relativeHtmlFilePath.split('.').slice(0,-1)+'.pdf';

					// get url to the file
					var accessUrl = field.options.options.publicAccessUrlPrefix + relativeHtmlFilePath

					field.storage.adapter.htmlToPdf(
						accessUrl,
						fullHtmlFilePath,
						fullPathTargetDir,
						fullPdfFilePath,
						(pdfPath) => {}
					)
				}
			})
		})

		item.set(schemaPathForPdf+"."+languageIndex, relativePdfFilePath);
		item.set(schemaPathForZip+"."+languageIndex, result.filename);
		item.set(field.path, result);
		callback(null, result);
	});
};

/**
 * Resets the field value
 */
zipHtmlTemplate.prototype.reset = function (item) {
	var value = {};
	Object.keys(this.storage.schema).forEach(function (path) {
		value[path] = null;
	});
	item.set(this.path, value);
};

/**
 * Deletes the stored file and resets the field value
 */
// TODO: Should we accept a callback here? Seems like a good idea.
zipHtmlTemplate.prototype.remove = function (item) {

// TODO remove the zip, html pdf

	this.storage.removeFile(item.get(this.path));
	this.reset();
};

/**
 * Formats the field value
 */
zipHtmlTemplate.prototype.format = function (item) {
	var value = item.get(this.path);
	if (value) return value.filename || '';
	return '';
};

/**
 * Detects whether the field has been modified
 */
zipHtmlTemplate.prototype.isModified = function (item) {
	var modified = false;
	var paths = this.paths;

	Object.keys(this.storageSchema).forEach(function (path) {
		if (item.isModified(paths[path])) modified = true;
	});
	return modified;
};


function validateInput (value) {
	// undefined, null and empty values are always valid
	if (value === undefined || value === null || value === '') return true;
	// If a string is provided, check it is an upload or delete instruction
	if (typeof value === 'string' && /^(upload\:)|(delete\:)/.test(value)) return true;
	// If the value is an object with a filename property, it is a stored value
	// TODO: Need to actually check a dynamic path based on the adapter
	if (typeof value === 'object' && value.filename) return true;
	if (Array.isArray(value) && value.length > 0) return true; // can be more complex
	return false;
}

/**
 * Validates that a value for this field has been provided in a data object
 */
zipHtmlTemplate.prototype.validateInput = function (data, callback) {
	var value = this.getValueFromData(data);
	var result = validateInput(value);
	utils.defer(callback, result);
};

/**
 * Validates that input has been provided
 */
zipHtmlTemplate.prototype.validateRequiredInput = function (item, data, callback) {
	// TODO: We need to also get the `files` argument, so we can check for
	// uploaded files. without it, this will return false negatives so we
	// can't actually validate required input at the moment.
	var result = true;
	// var value = this.getValueFromData(data);
	// debug('[%s.%s] Validating required input: ', this.list.key, this.path, value);
	// TODO: Need to actually check a dynamic path based on the adapter
	// TODO: This incorrectly allows empty values in the object to pass validation
	// var result = (value || item.get(this.paths.filename)) ? true : false;
	// debug('[%s.%s] Validation result: ', this.list.key, this.path, result);
	utils.defer(callback, result);
};

/**
 * Updates the value for this field in the item from a data object
 * TODO: It is not possible to remove an existing value and upload a new fiel
 * in the same action, this should be supported
 */
zipHtmlTemplate.prototype.updateItem = function (item, data, files, callback) {
	// Process arguments
	if (typeof files === 'function') {
		callback = files;
		files = {};
	}
	if (!files) {
		files = {};
	}

	// Prepare values
	var value = this.getValueFromData(data);
	var uploadedFile0, uploadedFile1, uploadedFile2;

	// Providing the string "remove" removes the file and resets the field
	if (value && typeof value === 'string' && value.substr(0, 7) === 'remove:') {
		this.remove(item);
		utils.defer(callback);
	}

	var languageIndex = "0"

	// Find an uploaded file in the files argument, either referenced in the
	// data argument or named with the field path / field_upload path + suffix
	if (typeof value === 'string' && value.substr(0, 7) === 'upload:') {
		var fileIndex = value.substr(9, value.length - 9)
		languageIndex = value && value.substr(7, 1) || "0"

		switch(languageIndex) {
			case "0": uploadedFile0 = files[fileIndex]; break
			case "1": uploadedFile1 = files[fileIndex]; break
			case "2": uploadedFile2 = files[fileIndex]; break
		}

	} else {
		var val0 = String(nesProp.get(value, "0") || "")
		var val1 = String(nesProp.get(value, "1") || "")
		var val2 = String(nesProp.get(value, "2") || "")

		var fileIndex0 = val0.substr(9, val0.length - 9)
		var fileIndex1 = val1.substr(9, val1.length - 9)
		var fileIndex2 = val2.substr(9, val2.length - 9)

		if (fileIndex0) {
			uploadedFile0 = files[fileIndex0] || nesProp.get(files, fileIndex0 + "._upload")
		}

		if (fileIndex1) {
			uploadedFile1 = files[fileIndex1] || nesProp.get(files, fileIndex1 + "._upload")
		}

		if (fileIndex2) {
			uploadedFile2 = files[fileIndex2] || nesProp.get(files, fileIndex2 + "._upload")
		}

		//uploadedFile = this.getValueFromData(files, null, true) || this.getValueFromData(files, '_upload', true);
	}

	// Ensure a valid file was uploaded, else null out the value
	if (uploadedFile0 && !uploadedFile0.path) {
		uploadedFile0 = undefined;
	}
	if (uploadedFile1 && !uploadedFile1.path) {
		uploadedFile1 = undefined;
	}
	if (uploadedFile2 && !uploadedFile2.path) {
		uploadedFile2 = undefined;
	}

	var promise1 = new Promise((resolve) => {
		if (uploadedFile0) {
			this.upload(item, uploadedFile0, 0, resolve)
		} else {
			resolve()
		}
	})

	var promise2 = new Promise((resolve) => {
		if (uploadedFile1) {
			this.upload(item, uploadedFile1, 1, resolve)
		} else {
			resolve()
		}
	})

	var promise3 = new Promise((resolve) => {
		if (uploadedFile2) {
			this.upload(item, uploadedFile2, 2, resolve)
		} else {
			resolve()
		}
	})

	Promise.all([promise1, promise2, promise3]).then((values) => {
		if (uploadedFile0 || uploadedFile1 || uploadedFile2) {
			// !!values.join()
			callback()
		}
	});

	if (uploadedFile0 || uploadedFile1 || uploadedFile2) { return; }

	// If we have a file to upload, we do that and stop here
/* 	if (uploadedFile) {
		return this.upload(item, uploadedFile, languageIndex, callback);
	} */

	// Empty / null values reset the field
	if (value === null || value === '' || (typeof value === 'object' && !Object.keys(value).length) || (Array.isArray(value) && !value.length)) {
		this.reset(item);
		value = undefined;
	}

	// If there is a valid value at this point, set it on the field
	if (typeof value === 'object' || Array.isArray(value)) {
		// item.set(this.path, value); // we dont need tha value at all, we have saved the zip path html path and pdf path in other fields
	}
	utils.defer(callback);
};

/* Export Field Type */
module.exports = zipHtmlTemplate;
