import * as React from 'react';
import { Grid } from '@material-ui/core';
import { WithStyles, withStyles, createStyles } from '@material-ui/styles';
import CommonStyle from '../common/common-style';
import FailedIcon from '../icons/failed';
import ReceiveIcon from '../icons/receive';
import SentIcon from '../icons/sent';
import CopyIcon from '../icons/copy';
import ViewIcon from '../icons/view';
import HourGlassSmallIcon from '../icons/hourglass-small';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const styles = createStyles({
	line: {
		height: '1px',
		transform: 'scaleY(-1)',
		backgroundColor: '#475768'
	},
	flex: {
		display: 'flex',
		alignItems: 'center'
	},
	row: {
		paddingTop: '32px',
		paddingBottom: '24px',
		fontFamily: CommonStyle.fontFamily
	},
	date: {
		color: '#93B0C1',
		fontSize: '15px',
		lineHeight: '18px',
		paddingLeft: '17px',
		paddingRight: '40px',
		boxSizing: 'border-box',
		minWidth: '220px'
	},
	icon: {
		minWidth: '32px',
		textAlign: 'center',
		display: 'inline-block'
	},
	status: {
		color: '#FFFFFF',
		fontSize: '15px',
		lineHeight: '18px'
	},
	cryptoCurrency: {
		color: '#FFFFFF',
		fontSize: '15px',
		fontWeight: 600,
		lineHeight: '18px'
	},
	value: {
		color: '#FFFFFF',
		fontSize: '15px',
		lineHeight: '18px',
		textAlign: 'right'
	},
	actionTitle: {
		color: '#93B0C1',
		fontSize: '14px',
		lineHeight: '17px',
		paddingLeft: '14px'
	},
	viewActionContainer: {
		paddingLeft: '20px',
		cursor: 'pointer',
		display: 'flex'
	},
	copyActionContainer: {
		width: '65px',
		paddingLeft: '99px',
		cursor: 'pointer',
		display: 'flex'
	}
});

export type TransactionHistoryProps = {
	list: TxHistoryItem[];
	openLink?: (link: string) => void;
};

export type StatusIconName = 'failed' | 'receive' | 'hourglass' | 'sent';
export type TxHistoryItem = {
	statusText: string;
	date: string;
	cryptoCurrency: string;
	value: string;
	externalLink: string;
	statusIconName: StatusIconName;
};

type TransactionHistoryState = {
	currentCopyValues: string[];
};

type StyledProps = WithStyles<typeof styles> & TransactionHistoryProps;

export class TransactionHistoryComponent extends React.Component<
	StyledProps,
	TransactionHistoryState
> {
	copyText = 'Copy';
	copiedText = 'Copied';

	constructor(props: StyledProps) {
		super(props);
		this.state = {
			currentCopyValues: []
		};
	}
	handleLinkClick(event: React.MouseEvent<HTMLElement>, externalLink: string) {
		const { openLink } = this.props;
		event.preventDefault();
		if (!openLink) {
			return;
		}
		openLink(externalLink);
	}
	renderIcon(statusIconName: string) {
		switch (statusIconName) {
			case 'failed':
				return <FailedIcon />;
			case 'receive':
				return <ReceiveIcon />;
			case 'hourglass':
				return <HourGlassSmallIcon />;
			case 'sent':
				return <SentIcon />;
			default:
				return;
		}
	}
	updateCopyText(index: number, text: string) {
		const currentCopyValuesClone = this.state.currentCopyValues.slice();
		currentCopyValuesClone[index] = text;
		this.setState({ currentCopyValues: currentCopyValuesClone });
	}
	handleOnCopy(itemIndex: number) {
		return () => {
			this.updateCopyText(itemIndex, this.copiedText);
			const bounceTime = setTimeout(() => {
				this.updateCopyText(itemIndex, this.copyText);
				clearTimeout(bounceTime);
			}, 1000);
		};
	}
	renderRow(item: TxHistoryItem, index: number) {
		const { classes } = this.props;
		const { currentCopyValues } = this.state;
		return (
			<div key={index}>
				<Grid
					container
					className={classes.row}
					direction="row"
					justify="space-between"
					alignItems="center"
				>
					<div className={classes.flex}>
						<span className={classes.icon}>{this.renderIcon(item.statusIconName)}</span>
						<span className={classes.date}>{item.date}</span>
						<div>
							<span className={classes.status}>{item.statusText} </span>
							<span className={classes.cryptoCurrency}>{item.cryptoCurrency}</span>
						</div>
					</div>
					<div className={classes.flex}>
						<span className={classes.value}>{item.value}</span>
						<CopyToClipboard text={item.externalLink} onCopy={this.handleOnCopy(index)}>
							<div className={classes.copyActionContainer}>
								<CopyIcon />
								<span className={classes.actionTitle}>
									{' '}
									{currentCopyValues[index] || this.copyText}{' '}
								</span>
							</div>
						</CopyToClipboard>

						<div
							onClick={event => {
								this.handleLinkClick.call(this, event, item.externalLink);
							}}
							className={classes.viewActionContainer}
						>
							<ViewIcon />
							<span className={classes.actionTitle}> View </span>
						</div>
					</div>
				</Grid>
				<div className={classes.line}> </div>
			</div>
		);
	}
	render() {
		const { classes, list = [] } = this.props;
		const txRows = list.map(this.renderRow.bind(this));
		return (
			<Grid>
				{list.length ? <div className={classes.line}> </div> : ''}
				{txRows}
			</Grid>
		);
	}
}

export const TransactionHistory = withStyles(styles)(TransactionHistoryComponent);
