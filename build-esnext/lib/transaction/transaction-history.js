import * as React from 'react';
import { Grid, withStyles, createStyles } from '@material-ui/core';
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
        backgroundColor: '#475768',
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
    },
    row: {
        paddingTop: '32px',
        paddingBottom: '24px',
        fontFamily: CommonStyle.fontFamily,
    },
    date: {
        color: '#93B0C1',
        fontSize: '15px',
        lineHeight: '18px',
        paddingLeft: '17px',
        paddingRight: '40px',
        boxSizing: 'border-box',
        minWidth: '220px',
    },
    icon: {
        minWidth: '32px',
        textAlign: 'center',
        display: 'inline-block'
    },
    status: {
        color: '#FFFFFF',
        fontSize: '15px',
        lineHeight: '18px',
    },
    cryptoCurrency: {
        color: '#FFFFFF',
        fontSize: '15px',
        fontWeight: 600,
        lineHeight: '18px',
    },
    value: {
        color: '#FFFFFF',
        fontSize: '15px',
        lineHeight: '18px',
        textAlign: 'right',
    },
    actionTitle: {
        color: '#93B0C1',
        fontSize: '14px',
        lineHeight: '17px',
        paddingLeft: '14px',
    },
    viewActionContainer: {
        paddingLeft: '20px',
        cursor: 'pointer',
        display: 'flex',
    },
    copyActionContainer: {
        width: '65px',
        paddingLeft: '99px',
        cursor: 'pointer',
        display: 'flex',
    },
});
export class TransactionHistoryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.copyText = 'Copy';
        this.copiedText = 'Copied';
        this.state = {
            currentCopyValues: [],
        };
    }
    handleLinkClick(event, externalLink) {
        const { openLink } = this.props;
        event.preventDefault();
        if (!openLink) {
            return;
        }
        openLink(externalLink);
    }
    renderIcon(statusIconName) {
        switch (statusIconName) {
            case 'failed':
                return React.createElement(FailedIcon, null);
            case 'receive':
                return React.createElement(ReceiveIcon, null);
            case 'hourglass':
                return React.createElement(HourGlassSmallIcon, null);
            case 'sent':
                return React.createElement(SentIcon, null);
            default:
                return;
        }
    }
    updateCopyText(index, text) {
        const currentCopyValuesClone = this.state.currentCopyValues.slice();
        currentCopyValuesClone[index] = text;
        this.setState({ currentCopyValues: currentCopyValuesClone });
    }
    handleOnCopy(itemIndex) {
        return () => {
            this.updateCopyText(itemIndex, this.copiedText);
            const bounceTime = setTimeout(() => {
                this.updateCopyText(itemIndex, this.copyText);
                clearTimeout(bounceTime);
            }, 1000);
        };
    }
    renderRow(item, index) {
        let { classes } = this.props;
        let { currentCopyValues } = this.state;
        return (React.createElement("div", { key: index },
            React.createElement(Grid, { container: true, className: classes.row, direction: "row", justify: "space-between", alignItems: "center" },
                React.createElement("div", { className: classes.flex },
                    React.createElement("span", { className: classes.icon }, this.renderIcon(item.statusIconName)),
                    React.createElement("span", { className: classes.date }, item.date),
                    React.createElement("div", null,
                        React.createElement("span", { className: classes.status },
                            item.statusText,
                            " "),
                        React.createElement("span", { className: classes.cryptoCurrency }, item.cryptoCurrency))),
                React.createElement("div", { className: classes.flex },
                    React.createElement("span", { className: classes.value }, item.value),
                    React.createElement(CopyToClipboard, { text: item.externalLink, onCopy: this.handleOnCopy(index) },
                        React.createElement("div", { className: classes.copyActionContainer },
                            React.createElement(CopyIcon, null),
                            React.createElement("span", { className: classes.actionTitle },
                                ' ',
                                currentCopyValues[index] || this.copyText,
                                ' '))),
                    React.createElement("div", { onClick: event => {
                            this.handleLinkClick.call(this, event, item.externalLink);
                        }, className: classes.viewActionContainer },
                        React.createElement(ViewIcon, null),
                        React.createElement("span", { className: classes.actionTitle }, " View ")))),
            React.createElement("div", { className: classes.line }, " ")));
    }
    render() {
        let { classes, list } = this.props;
        list = list || [];
        let txRows = list.map(this.renderRow.bind(this));
        return (React.createElement(Grid, null,
            list.length ? React.createElement("div", { className: classes.line }, " ") : '',
            txRows));
    }
}
export const TransactionHistory = withStyles(styles)(TransactionHistoryComponent);
//# sourceMappingURL=transaction-history.js.map