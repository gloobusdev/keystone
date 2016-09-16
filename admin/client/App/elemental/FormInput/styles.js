// ==============================
// Form Input
// ==============================

import theme from '../../../theme';

module.exports = {
	'FormInput': {
		'appearance': 'none',
		'backgroundColor': theme.input.bgColor,
		'backgroundImage': 'none',
		'border': `1px solid ${theme.color.buttonBg}`,
		'borderRadius': theme.input.borderRadius,
		'boxShadow': theme.input.boxShadow,
		'color': theme.color.textDark,
		'display': 'block',
		'height': theme.input.height,
		'lineHeight': theme.input.lineHeight,
		'padding': `0 ${theme.input.paddingHorizontal}`,
		'transition': 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
		'width': '100%',

		':hover': {
			borderColor: theme.color.buttonBgDark,
			outline: 0,
		},
		':focus': {
			borderColor: theme.color.buttonBgDark,
			outline: 0,
		},
	},
	'FormInput--disabled': {
		backgroundColor: theme.input.bgDisabled,
		pointerEvents: 'none',
	},
};
