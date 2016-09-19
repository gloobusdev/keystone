import React from 'react';
import Field from '../Field';
import evalDependsOn from '../../utils/evalDependsOn';

module.exports = Field.create({
	displayName: 'HeadingField',
	getInitialState: function () {
		return { collapsed: this.props.options.collapsible };
	},
	statics: {
		type: 'Heading',
	},
	renderField () {
		const { options: { dependsOn, heading }, values, children } = this.props;
		if (!evalDependsOn(dependsOn, values)) {
			return null;
		}
		return (
			<section>
				<h3 className="form-heading">[todo collapse] {heading}</h3>
				{children}
			</section>
		);
	},
});
