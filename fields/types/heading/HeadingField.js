import React from 'react';
import classNames from 'classnames'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
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
	toggleSection: function () {
		this.setState({collapsed: !this.state.collapsed})
	},
	renderField () {
		const {
			options: { dependsOn, heading, collapsible },
			values, children,
		} = this.props;
		const { collapsed } = this.state;
		if (!evalDependsOn(dependsOn, values)) {
			return null;
		}
		return (
			<section className="collapsing-section">	
				<div className="section-heading" onClick={this.toggleSection}>
					<span className={
						classNames(
							'octicon octicon-triangle-right arrow-icon',
							{rotateDown: !this.state.collapsed}
						)}
					/>
					<h3 className="form-heading">{heading}</h3>
				</div>
				<ReactCSSTransitionGroup 
					transitionName="toggleDropdown" 
					transitionEnterTimeout={330} 
					transitionLeaveTimeout={330}
				>
					{collapsed || 
						<div className="form-content">
							{children}
						</div>
					}
				</ReactCSSTransitionGroup>
			</section>
		);
	},
});
