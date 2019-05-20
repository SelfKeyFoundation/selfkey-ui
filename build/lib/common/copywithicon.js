"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_copy_to_clipboard_1 = require("react-copy-to-clipboard");
// @ts-ignore
var react_jss_1 = require("react-jss");
var clipboard_1 = require("../icons/clipboard");
var core_1 = require("@material-ui/core");
exports.styles = {
    clipboard: {
        cursor: "pointer",
        '&:hover': {
            '& svg': {
                fill: '#FFFFFF'
            }
        }
    },
    icon: {
        marginBottom: '10px'
    },
    copyText: {
        minWidth: '50px',
        textAlign: 'center'
    }
};
var CopyComponent = /** @class */ (function (_super) {
    __extends(CopyComponent, _super);
    function CopyComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.copyText = "Copy";
        _this.copiedText = "Copied";
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
        return (React.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: text, onCopy: this.handleOnCopy() },
            React.createElement(core_1.Grid, { container: true, alignItems: "center", direction: "column", className: classes.clipboard },
                React.createElement(clipboard_1.default, { className: classes.icon }),
                React.createElement(core_1.Typography, { variant: "subtitle2", color: "secondary", className: classes.copyText }, this.state.copyTextPlaceholder))));
    };
    return CopyComponent;
}(React.Component));
exports.CopyComponent = CopyComponent;
exports.CopyWithIcon = react_jss_1.default(exports.styles)(CopyComponent);
exports.default = exports.CopyWithIcon;
//# sourceMappingURL=copywithicon.js.map