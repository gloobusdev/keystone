import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

const SecondaryNavItem = ({ children, className, href, label, title, icon, to, active }) => {
	const itemClassName = classnames('cap-dropdown__item', className);

	const Button = to ? (
		<Link
			className="cap-dropdown__link"
			key={title}
			tabIndex="-1"
			title={title}
			icon={icon}
			to={to}
			// Block clicks on active link
			onClick={(evt) => { if (active) evt.preventDefault(); }}
		>
			{children}
		</Link>
	) : (
		<a
			className="cap-dropdown__link"
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
		>
			{Button}
		</li>
	);
};

module.exports = SecondaryNavItem;
