/**
 * The Cap navigation, displayed on screens < 768px
 */

import React from 'react';
import Transition from 'react-addons-css-transition-group';
import {push} from 'react-router-redux';
import {Link} from 'react-router';
import Dropdown from './Dropdown';
import PrimaryNavItem from './NavItem';
import SecondaryNavItem from './DropNavItem';
import store from '../../store'

const ESCAPE_KEY_CODE = 27;

const CapNavigation = React.createClass({
	displayName: 'CapNavigation',
	propTypes: {
		brand: React.PropTypes.string,
		currentListKey: React.PropTypes.string,
		currentSectionKey: React.PropTypes.string,
		sections: React.PropTypes.array.isRequired,
		signoutUrl: React.PropTypes.string,
	},
	renderBrand () {
		const { brand, currentSectionKey } = this.props;
		const className = currentSectionKey === 'dashboard' ? 'cap-navbar__brand cap-navbar__item--active' : 'cap-navbar__brand';

		return (
			<PrimaryNavItem
				className={className}
				label="octicon-home"
				title={'Dashboard - ' + brand}
				to={Keystone.adminPath}
			>
				<img className="cap-logo" src="images/cap-logo.png" alt="Cap logo"/>
			</PrimaryNavItem>
		);
	},
	renderNavigation () {
		if (!this.props.sections || !this.props.sections.length) return null;
		return this.props.sections.map((section) => {
			const newSection = {...section, lists: section.lists.map(list => ({...list, value: list.path}))}
			// Get the link and the classname
			const href = newSection.lists[0].external ? newSection.lists[0].path : `${Keystone.adminPath}/${newSection.lists[0].path}`;
			const isActive = this.props.currentSectionKey && this.props.currentSectionKey === section.key;
			const currentList = this.props.currentListKey;
			const className = (this.props.currentSectionKey && this.props.currentSectionKey === newSection.key) ? 'CapNavigation__section is-active' : 'CapNavigation__section';
			// Render a SectionItem
			let icon
			switch (section.label) {
				case 'Access':
					icon = 'dashboard'
					break;
				case 'Fields':
					icon = 'calendar'
					break;
				case 'Miscs':
					icon = 'money'
					break;
				default:
					icon = ''
					break;
			}
			let navItem
			if (section.lists.length > 1) {
				navItem = (
					<Dropdown 
						section={section}
						icon={icon}
						currentList={currentList}
						active={isActive}
						key={section.key}
						label={section.label}
						className={className}
						to={href}
					/>
				)
			} else {
				navItem = (
					<PrimaryNavItem
						active={isActive}
						key={section.key}
						label={section.label}
						className={className}
						to={href}
						onClick={this.toggleDropdown}
					>
						<img className="cap-navbar__icon" src={`images/${icon}.svg`}/>
						{section.label}
					</PrimaryNavItem>
				)
			}

			return (
				navItem
			);
		});
	},
	render () {
		return (
			<nav className="cap-navbar">
				<ul className="app-nav app-nav--cap">
					{this.renderBrand()}
					{this.renderNavigation()}
				</ul>
			</nav>
		);
	},
});

module.exports = CapNavigation;
