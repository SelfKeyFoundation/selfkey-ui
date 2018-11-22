import { withStyles, Typography } from '@material-ui/core';

export const ParagraphLarge = withStyles({
	root: {
		fontSize: '18px',
		lineHeight: '30px',
	},
})(Typography);

export const Paragraph = withStyles({
	root: {
		fontSize: '16px',
		lineHeight: '24px',
	},
})(Typography);

export const Definition = withStyles({
	root: {
		fontSize: '16px',
		lineHeight: '20px',
	},
})(Typography);

export const DefinitionDescription = withStyles({
	root: {
		fontSize: '16px',
		fontWeight: 600,
		lineHeight: '20px',
	},
})(Typography);

export const ExplanatoryLarge = withStyles({
	root: {
		fontSize: '18px',
		lineHeight: '28px',
	},
})(Typography);

export const Explanatory = withStyles({
	root: {
		fontSize: '13px',
		lineHeight: '19px',
	},
})(Typography);

export const TableHeader = withStyles({
	root: {
		fontSize: '12px',
		fontWeight: 600,
		lineHeight: '15px',
	  	textTransform: 'uppercase',
	},
})(Typography);

export const TableText = withStyles({
	root: {
		fontSize: '15px',
		lineHeight: '18px',
	},
})(Typography);

export const TableSmallText = withStyles({
	root: {
		fontSize: '14px',
		lineHeight: '17px',
	},
})(Typography);

export const TableSmallTextDisabled = withStyles({
	root: {
		color: '#697C95',
		fontSize: '14px',
		lineHeight: '17px',
	},
})(Typography);

export const FormPlaceholder = withStyles({
	root: {
		fontSize: '14px',
		lineHeight: '21px',
	},
})(Typography);

export const FormLabel = withStyles({
	root: {
		fontSize: '12px',
		fontWeight: 600,
		lineHeight: '15px',
		textTransform: 'uppercase',
	},
})(Typography);

export const ErrorMessage = withStyles({
	root: {
		fontSize: '13px',
		lineHeight: '19px',
	},
})(Typography);

export const WarningMessage = withStyles({
	root: {
		fontSize: '16px',
		lineHeight: '24px',
	},
})(Typography);
