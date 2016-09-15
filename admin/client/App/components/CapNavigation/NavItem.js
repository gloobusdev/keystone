/**
 * A item in the primary navigation. If it has a "to" prop it'll render a
 * react-router "Link", if it has a "href" prop it'll render a simple "a" tag
 */

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

const PrimaryNavItem = ({ children, className, href, label, title, icon, to, active, onClick, dropdown }) => {
	const itemClassName = classnames('cap-primary__item', className);

	const Button = to ? (
		<Link
			className="cap-primary__link"
			key={title}
			tabIndex="-1"
			title={title}
			icon={icon}
			to={to}
			// Block clicks on active link
			onClick={(evt) => { if (active || dropdown) evt.preventDefault(); }}
		>
			{children}
		</Link>
	) : (
		<a
			className="cap-primary__link"
			href={href}
			key={title}
			tabIndex="-1"
			title={title}
		>
			{children}
		</a>
	);

	return (
		<li
			className={itemClassName}
			data-section-label={label}
			onClick={onClick}
		>
			{Button}
		</li>
	);
};

PrimaryNavItem.displayName = 'CapNavItem';
PrimaryNavItem.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	href: PropTypes.string,
	label: PropTypes.string,
	title: PropTypes.string,
	to: PropTypes.string,
};

module.exports = PrimaryNavItem;
