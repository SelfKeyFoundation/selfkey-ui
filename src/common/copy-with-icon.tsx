import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { WithStyles, withStyles, createStyles } from '@material-ui/styles';
import ClipboardIcon from '../icons/clipboard';
import { Grid, Typography } from '@material-ui/core';

const styles = createStyles({
	clipboard: {
		'&:hover & svg': {
			fill: '#FFFFFF'
		},
		cursor: 'pointer'
	},
	icon: {
		marginBottom: '10px'
	},
	copyText: {
		minWidth: '50px',
		textAlign: 'center'
	}
});

export type CopyWithIconProps = {
	text: string;
};

type CopyWithIconState = {
	copyTextPlaceholder: string;
};

export type CopyWithIconStyledProps = WithStyles<keyof typeof styles> & CopyWithIconProps;

class CopyComponent extends React.Component<CopyWithIconStyledProps, CopyWithIconState> {
	copyText = 'Copy';
	copiedText = 'Copied';

	state = {
		copyTextPlaceholder: this.copyText
	};

	handleOnCopy() {
		return () => {
			this.setState({ copyTextPlaceholder: this.copiedText });
			const bounceTime = setTimeout(() => {
				this.setState({ copyTextPlaceholder: this.copyText });
				clearTimeout(bounceTime);
			}, 1000);
		};
	}

	render() {
		const { text, classes } = this.props;
		return (
			<CopyToClipboard text={text} onCopy={this.handleOnCopy()}>
				<Grid
					container
					alignItems="center"
					direction="column"
					className={classes.clipboard}
				>
					<ClipboardIcon className={classes.icon} />
					<Typography variant="subtitle2" color="secondary" className={classes.copyText}>
						{this.state.copyTextPlaceholder}
					</Typography>
				</Grid>
			</CopyToClipboard>
		);
	}
}

export const CopyWithIcon = withStyles(styles)(CopyComponent);

export default CopyWithIcon;
