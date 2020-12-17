import { Card } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/styles';
import {
	primary,
	primaryTint,
	typography,
	grey,
	baseLight,
	baseDark,
	base,
	success,
	warning,
	error,
	white
} from '../colors';

export const PrimaryCard = withStyles(
	createStyles({
		root: {
			backgroundColor: primary,
			maxWidth: '50px'
		}
	})
)(Card);

export const PrimaryTintCard = withStyles(
	createStyles({
		root: {
			backgroundColor: primaryTint,
			maxWidth: '50px'
		}
	})
)(Card);

export const TypographyCard = withStyles(
	createStyles({
		root: {
			backgroundColor: typography,
			maxWidth: '50px'
		}
	})
)(Card);

export const GreyCard = withStyles(
	createStyles({
		root: {
			backgroundColor: grey,
			maxWidth: '50px'
		}
	})
)(Card);

export const BaseLightCard = withStyles(
	createStyles({
		root: {
			backgroundColor: baseLight,
			maxWidth: '50px'
		}
	})
)(Card);

export const BaseDarkCard = withStyles(
	createStyles({
		root: {
			backgroundColor: baseDark,
			maxWidth: '50px'
		}
	})
)(Card);

export const BaseCard = withStyles(
	createStyles({
		root: {
			backgroundColor: base,
			maxWidth: '50px'
		}
	})
)(Card);

export const SuccessCard = withStyles(
	createStyles({
		root: {
			backgroundColor: success,
			maxWidth: '50px'
		}
	})
)(Card);

export const WarningCard = withStyles(
	createStyles({
		root: {
			backgroundColor: warning,
			maxWidth: '50px'
		}
	})
)(Card);

export const ErrorCard = withStyles(
	createStyles({
		root: {
			backgroundColor: error,
			maxWidth: '50px'
		}
	})
)(Card);

export const WhiteCard = withStyles(
	createStyles({
		root: {
			backgroundColor: white,
			maxWidth: '50px'
		}
	})
)(Card);
