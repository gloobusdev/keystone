import React from 'react';
import Field from '../Field';
import evalDependsOn from '../../utils/evalDependsOn';

module.exports = Field.create({
	displayName: 'NestedField',
	statics: {
		type: 'Nested',
	},
	renderField () {
		const { options, values, children } = this.props;
		if (!evalDependsOn(options.dependsOn, values)) {
			return null;
		}
		return (
			<section className="form-nested">
				{children}
			</section>
		);
	},
});
