import React from 'react';
import Field from '../Field';

module.exports = Field.create({
	displayName: 'CapHouseSummaryField',
	statics: {
		type: 'CapHouseSummary',
	},
	renderField () {
		const { values } = this.props;
		return (
			<section>
				Test: {values.name}
			</section>
		);
	},
});
