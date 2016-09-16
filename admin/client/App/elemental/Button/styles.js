// ==============================
// Button
// ==============================

import { gradientVertical } from '../../../utils/css';
import { darken, fade, lighten } from '../../../utils/color';
import theme from '../../../theme';


// Common Styles
// ----------------

exports.common = {
	// Base Button
	// ----------------
	base: {
		'appearance': 'none',
		'background': 'none',
		'borderWidth': theme.button.borderWidth,
		'borderStyle': 'solid',
		'borderColor': 'transparent',
		'borderRadius': theme.button.borderRadius,
		'cursor': 'pointer',
		'display': 'inline-block',
		'fontWeight': theme.button.font.weight,
		'height': theme.component.height,
		'lineHeight': theme.component.lineHeight,
		'marginBottom': 0,
		'padding': `0 ${theme.button.paddingHorizontal}`,
		'outline': 0,
		'textAlign': 'center',
		'touchAction': 'manipulation',
		'userSelect': 'none',
		'verticalAlign': 'middle',
		'whiteSpace': 'nowrap',
		'backgroundImage': 'none !important',

		':hover': {
			textDecoration: 'none',
		},
		':focus': {
			textDecoration: 'none',
		},
	},
	// Block Display
	// ----------------
	block: {
		display: 'block',
		width: '100%',
	},
	// Disabled
	// ----------------
	disabled: {
		opacity: 0.4,
		pointerEvents: 'none',
	},
	// Sizes
	// ----------------
	large: {
		fontSize: theme.font.size.large,
	},
	default: {
		fontSize: theme.font.size.default,
	},
	small: {
		fontSize: theme.font.size.small,
	},
	xsmall: {
		fontSize: theme.font.size.xsmall,
		lineHeight: '1.9',
		paddingLeft: '.66em',
		paddingRight: '.66em',
	},
};


// Fill Variant
// ----------------
function buttonFillVariant (textColor, bgColor) {
	const hoverStyles = {
		backgroundColor: darken(theme.color.buttonBgDark, 15),
		outline: 'none',
	};
	const focusStyles = {
		outline: 'none',
	};
	const activeStyles = {
		backgroundColor: darken(theme.color.buttonBgDark, 10),
	};
	return {
		base: {
			'backgroundImage': 'none !important',
			'backgroundColor': theme.color.buttonBgDark,
			'color': theme.color.textWhite,
			'fontWeight': 400,
			':hover': hoverStyles,
			':focus': focusStyles,
			':active': activeStyles,
		},
		active: activeStyles,
	};
}
// TODO: This is pretty hacky, needs to be consolidated with the Variant() method
// above (needs more theme variables to be implemented though)
function buttonFillDefault () {
	const hoverStyles = {
		backgroundColor: darken(theme.color.buttonBg, 15),
		color: theme.color.text,
	};
	const focusStyles = {
		color: theme.color.textLight,
		outline: 'none',
	};
	const activeStyles = {
		color: theme.color.text,
	};
	return {
		base: {
			'backgroundImage': 'none !important',
			'backgroundColor': theme.color.buttonBg,
			'color': theme.color.textDark,
			':hover': hoverStyles,
			':focus': focusStyles,
			':active': activeStyles,
		},

		// gross hack
		active: {
			...activeStyles,

			':hover': activeStyles,
			':focus': {
				...activeStyles,
				...focusStyles,
			},
			':active': activeStyles,
		},
	};
}
exports.fill = (color) => {
	switch (color) {
		case 'default':
			return buttonFillDefault();
		case 'cancel':
		case 'delete':
			return buttonFillVariant('white', theme.button.danger.bgColor);
		default:
			return buttonFillVariant('white', theme.button[color].bgColor);
	}
};


// Hollow Variant
// ----------------
function buttonHollowVariant (textColor, borderColor) {
	const focusAndHoverStyles = {
		backgroundImage: 'none',
		backgroundColor: fade(borderColor, 15),
		borderColor: darken(borderColor, 15),
		boxShadow: 'none',
		color: textColor,
		outline: 'none',
	};
	const focusOnlyStyles = {
	};
	const activeStyles = {
		backgroundColor: fade(borderColor, 35),
		borderColor: darken(borderColor, 25),
		boxShadow: 'none',
	};

	return {
		base: {
			'backgroundImage': 'none !important',
			'background': 'none',
			'borderColor': borderColor,
			'color': textColor,

			':hover': focusAndHoverStyles,
			':focus ': Object.assign({}, focusAndHoverStyles, focusOnlyStyles),
			':active': activeStyles,
		},
		active: activeStyles,
	};
};
exports.hollow = (color) => {
	// TODO: better handling of cancel and delete colors
	if (color === 'cancel' || color === 'delete') color = 'danger';

	return buttonHollowVariant(theme.button[color].bgColor, theme.button[color].borderColor);
};


// Link Variant
// ----------------
function buttonLinkVariant (textColor, hoverColor) {
	const hoverStyles = {
		color: hoverColor,
		textDecoration: 'underline',
	};
	return {
		base: {
			'backgroundImage': 'none !important',
			'background': 'none',
			'border': 0,
			'boxShadow': 'none',
			'color': textColor,
			'fontWeight': 'normal',
			'outline': 'none',

			':hover': hoverStyles,
			':focus': hoverStyles,
			':active': hoverStyles,
		},
		active: hoverStyles,
	};
};
function buttonLinkDelete () {
	const styles = buttonLinkVariant(theme.color.gray40, theme.color.danger);
	const hoverStyles = {
		backgroundColor: theme.color.danger,
		borderColor: `${darken(theme.color.danger, 4)} ${darken(theme.color.danger, 8)} ${darken(theme.color.danger, 12)}`,
		color: 'white',
		textDecoration: 'none',
	};
	const activeStyles = {
		backgroundColor: darken(theme.color.danger, 4),
		backgroundImage: 'none',
		borderColor: `${darken(theme.color.danger, 12)} ${darken(theme.color.danger, 8)} ${darken(theme.color.danger, 8)}`,
		color: 'white',
	};
	return {
		base: {
			...styles.base,
			':hover': hoverStyles,
			':focus': hoverStyles,
			':active': activeStyles,
		},
		active: activeStyles,
	};
}

exports.link = (color) => {
	switch (color) {
		case 'default':
			return buttonLinkVariant(theme.color.link, theme.color.linkHover);
		case 'cancel':
			return buttonLinkVariant(theme.color.gray40, theme.color.danger);
		case 'delete':
			return buttonLinkDelete();
		default:
			return buttonLinkVariant(theme.color[color], theme.color[color]);
	}
};
