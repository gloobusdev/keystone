import React, { PropTypes } from 'react';
import PrimaryNavItem from './NavItem';
import SecondaryNavItem from './DropNavItem';
import classNames from 'classnames'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Dropdown = React.createClass({
	getInitialState () {
    return {dropdown: false};
  },
	toggleDropdown () {
		this.setState({dropdown: !this.state.dropdown});
	},
	renderDropdownItems () {
		return this.props.section.lists.map((dropSection) => {
			const href = `${Keystone.adminPath}/${dropSection.path}`;
			const isActive = this.props.currentList && this.props.currentList === dropSection.path;
			const className = isActive ? 'is-active' : '';
			return (
				<SecondaryNavItem
					key={dropSection.path}
					label={dropSection.label}
					to={href}
					active={isActive}
					className={className}
				>
					{dropSection.label}
				</SecondaryNavItem>
			)
		})
	},
	render () {
		const {section, icon, active, key, label, className, to} = this.props
		
		return (
			<li>
				<PrimaryNavItem
						active={active}
						key={section.key}
						label={label}
						className={className}
						to={to}
						onClick={this.toggleDropdown}
						dropdown
					>
						<img className="cap-navbar__icon" src={`${Keystone.adminPath}/images/${icon}.svg`}/>
						{section.label}
						{section.lists.length > 1 &&
							<span className={
								classNames(
									'octicon octicon-triangle-down',
									{rotateUp: this.state.dropdown}
								)
							}/>
						}
					</PrimaryNavItem>
					<ReactCSSTransitionGroup 
						transitionName="toggleDropdown" 
						transitionEnterTimeout={330} 
						transitionLeaveTimeout={330}>
						{this.state.dropdown &&
							this.renderDropdownItems()
						}
					</ReactCSSTransitionGroup>
			</li>
		)
	}
})

module.exports = Dropdown
