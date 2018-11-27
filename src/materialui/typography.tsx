import { withStyles, Typography } from '@material-ui/core';
import { 
	grey, 
	typography, 
	error, 
	warning 
} from '../colors';

export const UnreadNotification = withStyles({
	root: {
		fontSize: '18px',
		fontWeight: 600,
		lineHeight: '26px',
	},
})(Typography);

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
		color: typography,
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
		color: typography,
		fontSize: '18px',
		lineHeight: '28px',
	},
})(Typography);

export const Explanatory = withStyles({
	root: {
		color: typography,
		fontSize: '13px',
		lineHeight: '19px',
	},
})(Typography);

export const TableHeader = withStyles({
	root: {
		color: typography,
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
		color: grey,
		fontSize: '14px',
		lineHeight: '17px',
	},
})(Typography);

export const FormPlaceholder = withStyles({
	root: {
		color: typography,
		fontSize: '14px',
		lineHeight: '21px',
	},
})(Typography);

export const FormLabel = withStyles({
	root: {
		color: typography,
		fontSize: '12px',
		fontWeight: 600,
		lineHeight: '15px',
		textTransform: 'uppercase',
	},
})(Typography);

export const ErrorMessage = withStyles({
	root: {
		color: error,
		fontSize: '13px',
		lineHeight: '19px',
	},
})(Typography);

export const WarningMessage = withStyles({
	root: {
		color: warning,
		fontSize: '16px',
		lineHeight: '24px',
	},
})(Typography);
