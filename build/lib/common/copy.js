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
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles, createStyles } from '@material-ui/core';
export var styles = createStyles({
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
        letterSpacing: 'normal',
    }
});
var CopyComponent = /** @class */ (function (_super) {
    __extends(CopyComponent, _super);
    function CopyComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.copyText = 'COPY';
        _this.copiedText = 'COPIED';
        _this.state = {
            copyTextPlaceholder: _this.copyText
        };
        return _this;
    }
    CopyComponent.prototype.handleOnCopy = function () {
        var _this = this;
        return function () {
            _this.setState({ copyTextPlaceholder: _this.copiedText });
            var bounceTime = setTimeout(function () {
                _this.setState({ copyTextPlaceholder: _this.copyText });
                clearTimeout(bounceTime);
            }, 1000);
        };
    };
    CopyComponent.prototype.render = function () {
        var _a = this.props, text = _a.text, classes = _a.classes;
        return (React.createElement(CopyToClipboard, { text: text, onCopy: this.handleOnCopy() },
            React.createElement("button", { className: classes.copyButton },
                React.createElement("span", { className: classes.copyButtonSpan }, this.state.copyTextPlaceholder))));
    };
    return CopyComponent;
}(React.Component));
export { CopyComponent };
export var Copy = withStyles(styles)(CopyComponent);
export default Copy;
//# sourceMappingURL=copy.js.map