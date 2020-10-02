import React from 'react';
import { SegmentedControl } from 'elemental';



function getDefaultValue () {
	return {
		value: true,
	};
}

var ClientConfirmationButtonFilter = React.createClass({
	propTypes: {
		filter: React.PropTypes.shape({
			value: React.PropTypes.bool,
		}),
	},
	statics: {
		getDefaultValue: getDefaultValue,
	},
	getDefaultProps () {
		return {
			filter: getDefaultValue(),
		};
	},
	updateValue (value) {
		this.props.onChange({ value });
	},
	render () {
		return <SegmentedControl equalWidthSegments value={this.props.filter.value} />;
	},
});

module.exports = ClientConfirmationButtonFilter;
