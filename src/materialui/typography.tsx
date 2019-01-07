import { withStyles, Typography } from '@material-ui/core';
import { 
	grey, 
	typography, 
	error, 
	warning, 
	baseDark
} from '../colors';

export const UnreadNotification = withStyles({
	root: {
		fontSize: '18px',
		fontWeight: 600,
		lineHeight: '26px',
	},
})(Typography);

export const DefinitionDescription = withStyles({
	root: {
		fontSize: '16px',
		fontWeight: 600,
		lineHeight: '20px',
		zIndex: 1,
	},
})(Typography);

export const Explanatory = withStyles({
	root: {
		color: typography,
		fontSize: '13px',
		lineHeight: '19px',
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

export const Tag = withStyles({
	root: {
		backgroundColor: baseDark,
		borderRadius: '10px',
		color: typography,
		display: 'inline',
		fontSize: '12px',
		lineHeight: '13px',
		margin: '4px 4px 4px 0',
		padding: '2px 10px',
	},
})(Typography);
