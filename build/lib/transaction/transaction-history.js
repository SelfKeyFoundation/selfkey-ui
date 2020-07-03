var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var styles = createStyles({
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
var TransactionHistoryComponent = /** @class */ (function (_super) {
    __extends(TransactionHistoryComponent, _super);
    function TransactionHistoryComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.copyText = 'Copy';
        _this.copiedText = 'Copied';
        _this.state = {
            currentCopyValues: [],
        };
        return _this;
    }
    TransactionHistoryComponent.prototype.handleLinkClick = function (event, externalLink) {
        var openLink = this.props.openLink;
        event.preventDefault();
        if (!openLink) {
            return;
        }
        openLink(externalLink);
    };
    TransactionHistoryComponent.prototype.renderIcon = function (statusIconName) {
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
    };
    TransactionHistoryComponent.prototype.updateCopyText = function (index, text) {
        var currentCopyValuesClone = this.state.currentCopyValues.slice();
        currentCopyValuesClone[index] = text;
        this.setState({ currentCopyValues: currentCopyValuesClone });
    };
    TransactionHistoryComponent.prototype.handleOnCopy = function (itemIndex) {
        var _this = this;
        return function () {
            _this.updateCopyText(itemIndex, _this.copiedText);
            var bounceTime = setTimeout(function () {
                _this.updateCopyText(itemIndex, _this.copyText);
                clearTimeout(bounceTime);
            }, 1000);
        };
    };
    TransactionHistoryComponent.prototype.renderRow = function (item, index) {
        var _this = this;
        var classes = this.props.classes;
        var currentCopyValues = this.state.currentCopyValues;
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
                    React.createElement("div", { onClick: function (event) {
                            _this.handleLinkClick.call(_this, event, item.externalLink);
                        }, className: classes.viewActionContainer },
                        React.createElement(ViewIcon, null),
                        React.createElement("span", { className: classes.actionTitle }, " View ")))),
            React.createElement("div", { className: classes.line }, " ")));
    };
    TransactionHistoryComponent.prototype.render = function () {
        var _a = this.props, classes = _a.classes, list = _a.list;
        list = list || [];
        var txRows = list.map(this.renderRow.bind(this));
        return (React.createElement(Grid, null,
            list.length ? React.createElement("div", { className: classes.line }, " ") : '',
            txRows));
    };
    return TransactionHistoryComponent;
}(React.Component));
export { TransactionHistoryComponent };
export var TransactionHistory = withStyles(styles)(TransactionHistoryComponent);
//# sourceMappingURL=transaction-history.js.map