var keystone = require('../../../index.js');
var Types = keystone.Field.Types
const House = new keystone.List('House', {
	drillDown: 'prices agent',
	track: true,
})
const stars = [
	{value: 1, label: '⭐✩✩✩✩✩'},
	{value: 2, label: '⭐⭐✩✩✩✩'},
	{value: 3, label: '⭐⭐⭐✩✩✩'},
	{value: 4, label: '⭐⭐⭐⭐✩✩'},
	{value: 5, label: '⭐⭐⭐⭐⭐✩'},
	{value: 6, label: '⭐⭐⭐⭐⭐⭐'},
]
const categoryStars = [
	{value: 2, label: '⭐⭐'},
	{value: 3, label: '⭐⭐⭐'},
	{value: 3.5, label: '⭐⭐⭐+'},
	{value: 4, label: '⭐⭐⭐⭐'},
	{value: 4.5, label: '⭐⭐⭐⭐+'},
	{value: 5, label: '⭐⭐⭐⭐⭐'},
	{value: 5.5, label: '⭐⭐⭐⭐⭐+'},
]
const petsRules = [
	{value: 0, label: 'No'},
	{value: 1, label: 'Ask'},
	{value: 2, label: 'Yes'},
]
const days = [
	{value: 0, label: 'Any day'},
	{value: 1, label: 'Monday'},
	{value: 2, label: 'Tuesday'},
	{value: 3, label: 'Wednesday'},
	{value: 4, label: 'Thursday'},
	{value: 5, label: 'Friday'},
	{value: 6, label: 'Saturday'},
	{value: 7, label: 'Sunday'},
]

House.add(
	{bewerkt: {type: Types.Boolean},},
	'Basic Info',
	{
		fmId: {type: Types.Text, label: 'FileMaker ID', index: true, noedit: true, collapse: true},
		name: {type: Types.Text, required: true, initial: true, index: true, text: true},
		rating: {type: Types.Select, numeric: true, options: stars},
		category: {type: Types.Select, numeric: true, options: categoryStars},
		region: {type: Types.Text},
		placename: {type: Types.Text},
		capacity: {type: Types.Number},
		bedroomCount: {type: Types.Number},
		address: {type: Types.Location},
		online: {type: Types.Boolean, index: true},
		promo: {type: Types.Boolean, index: true},
		pets: {type: Types.Select, numeric: true, options: petsRules},
	},
	'General',
	{
		owner: {
			name: {type: Types.Text},
			address: {type: Types.Location},
			comm: {type: Types.TextArray},
		},
		ownerConfirm: {type: Types.Boolean},
		memo: {type: Types.Textarea},
	},
	'Agents',
	{
		agentRef: {type: Types.Text, label: 'Agent Reference'},
	},
	'Description',
	{
		descrNote: {type: Types.Textarea},
		surface: {
			living: {type: Types.Number},
			total: {type: Types.Number},
		},
		floors: {
			living: {type: Types.Number},
			total: {type: Types.Number},
		},
		rooms: {
			desc: {type: Types.TextArray, note: 'full/mezz/..., spatie, 180, 2p, d140, os, ..., spatie, bad, douche'},
			cots: {type: Types.Number, label: 'Aantal baby bedjes'},
		},
		calcCapacity: {type: Types.Number, readonly: true},
		// TODO count - but we'll have tree view too so not sure
		spacesCount: {type: Types.TextArray, note: "Dit moet nog samengevoegd worden met spaces"},
		equipmentCount: {type: Types.TextArray, note: "Dit moet nog samengevoegd worden met equipment"},
	},
	'Photos',
	{
		imageUrl: {type: Types.Url},
		extraImageUrls: {type: Types.TextArray},
		// TODO image uploads
	},
	'Prices',
	{
		deposit: {type: Types.Number},
		// TODO Dropdown? {In België: 242, Ter plaatse: 330, undefined: 18}
		payThere: {type: Types.Boolean},
		// TODO Dropdown/ternary? {undefined: 142, Ja: 124, Neen: 323, 0,55 cent/pers: 1}
		localTax: {type: Types.Boolean},
		extras: {type: Types.TextArray, note: "Dit moet nog opgesplitst worden"},
		switchDay: {type: Types.Select, numeric: true, options: days, default: 6},
	},
	'Texts',
	{
		slogan: {
			nl: {type: Types.Html, wysiwyg: true},
			fr: {type: Types.Html, wysiwyg: true},
			en: {type: Types.Html, wysiwyg: true},
		},
		description: {
			nl: {type: Types.Html, wysiwyg: true},
			fr: {type: Types.Html, wysiwyg: true},
			en: {type: Types.Html, wysiwyg: true},
		},
		tips: {
			nl: {type: Types.Html, wysiwyg: true},
			fr: {type: Types.Html, wysiwyg: true},
			en: {type: Types.Html, wysiwyg: true},
		},
		route: {
			nl: {type: Types.Textarea},
			fr: {type: Types.Textarea},
			en: {type: Types.Textarea},
		},
	},
	'Location',
	{
		// TODO dropdown + tel?
		keys: {
			info: {type: Types.Text},
			phone: {type: Types.Text},
			address: {type: Types.Location},
		},
		accessTime: {
			// TODO dropdown? Not that precise anyway
			in: {type: Types.Text},
			out: {type: Types.Text},
		},
		distanceTypes: {type: Types.TextArray},
		distancePlaces: {type: Types.TextArray},
	},
	'History',
	{
		prices: {type: Types.TextArray},
		// comms: {type: Types.TextArray},
	}
)

// House.schema.add({
// 	prices: [{
// 		daily: {type: Types.Money, currency: 'be-nl'},
// 		start: {type: Types.Date},
// 		end: {type: Types.Date},
// 	}]
// })

// House.relationship({ref: 'Location', path: 'posts', refPath: 'author'})

// House.defaultColumns = 'name, email, isAdmin'
House.register()
