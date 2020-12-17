import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { WithStyles, withStyles, createStyles } from '@material-ui/styles';

export const styles = createStyles({
	copyButton: {
		backgroundColor: 'transparent',
		border: '1px solid #3B4A5A',
		borderRadius: '4px',
		color: '#ffffff !important',
		cursor: 'pointer',
		display: 'flex',
		height: '24px',
		justifyContent: 'center',
		margin: 0,
		marginLeft: '7px',
		minWidth: '63px',
		outline: 'none',
		padding: '5px 12px 6px'
	},
	copyButtonSpan: {
		color: '#93b0c1',
		fontFamily: 'Lato, arial, sans-serif',
		fontSize: '10px',
		letterSpacing: 'normal'
	}
});

export type CopyProps = {
	text: string;
};

export type CopyState = {
	copyTextPlaceholder: string;
};

export type StyledProps = WithStyles<typeof styles> & CopyProps;

export class CopyComponent extends React.Component<StyledProps, CopyState> {
	copyText = 'COPY';
	copiedText = 'COPIED';
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
				<button className={classes.copyButton}>
					<span className={classes.copyButtonSpan}>{this.state.copyTextPlaceholder}</span>
				</button>
			</CopyToClipboard>
		);
	}
}

export const Copy = withStyles(styles)(CopyComponent);

export default Copy;
