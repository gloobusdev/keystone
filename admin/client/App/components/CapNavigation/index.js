/**
 * The Cap navigation, displayed on screens < 768px
 */

import React from 'react';
import Transition from 'react-addons-css-transition-group';
import {push} from 'react-router-redux';
import {Link} from 'react-router';
import {Dropdown} from 'elemental';
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
	renderNavigation () {
		if (!this.props.sections || !this.props.sections.length) return null;
		return this.props.sections.map((section) => {
			const newSection = {...section, lists: section.lists.map(list => ({...list, value: list.path}))}
			// Get the link and the classname
			const href = newSection.lists[0].external ? newSection.lists[0].path : `${Keystone.adminPath}/${newSection.lists[0].path}`;
			const className = (this.props.currentSectionKey && this.props.currentSectionKey === newSection.key) ? 'CapNavigation__section is-active' : 'CapNavigation__section';
			// Render a SectionItem
			return (
				<Dropdown className="custom_dropdown" key={newSection.key} items={newSection.lists} onSelect={(href) => store.dispatch(push(href))} buttonLabel={newSection.label}/> //TODO is not finding the routes
			);
		});
	},
	// Render the sidebar menu
	renderMenu () {
		return (
			<nav className="CapNavigation__menu">
				<div className="CapNavigation__sections">
					{this.renderNavigation()}
				</div>
				<a
					href={this.props.signoutUrl}
					className="CapNavigation__bar__button CapNavigation__bar__button--signout"
				>
					<span className="CapNavigation__bar__icon octicon octicon-sign-out" />
				</a>
			</nav>
		);
	},
	render () {

		return (
			<div className="CapNavigation">
				<div className="logoCont">
					<img src="" alt="Cap logo"/>
				</div>
					{this.renderMenu()}
			</div>
		);
	},
});

module.exports = CapNavigation;
