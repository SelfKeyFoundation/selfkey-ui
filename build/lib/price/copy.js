"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_copy_to_clipboard_1 = require("react-copy-to-clipboard");
var react_jss_1 = require("react-jss");
var styles = {
    copyButton: {
        cursor: 'pointer',
        width: '46px',
        height: '20px',
        marginLeft: '7px',
        padding: 0,
        backgroundColor: '#435160',
        border: 'none',
        borderRadius: '4px',
        margin: 0,
        color: '#ffffff !important'
    },
    copyButtonSpan: {
        fontSize: '11px',
        lineHeight: '12px',
        fontFamily: 'ProximaNovaRegular',
        letterSpacing: 'normal',
        color: '#93b0c1'
    },
};
var Copy = /** @class */ (function (_super) {
    __extends(Copy, _super);
    function Copy(props) {
        var _this = _super.call(this, props) || this;
        _this.copyText = 'COPY';
        _this.copiedText = 'COPIED';
        _this.state = {
            copyTextPlaceholder: _this.copyText
        };
        _this.handleOnCopy = _this.handleOnCopy.bind(_this);
        return _this;
    }
    Copy.prototype.handleOnCopy = function () {
        var _this = this;
        this.setState({ copyTextPlaceholder: this.copiedText });
        var bounceTime = setTimeout(function () {
            _this.setState({ copyTextPlaceholder: _this.copyText });
            clearTimeout(bounceTime);
        }, 1000);
    };
    ;
    Copy.prototype.render = function () {
        var _a = this.props, text = _a.text, classes = _a.classes;
        return (React.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: text, onCopy: this.handleOnCopy },
            React.createElement("button", { className: classes.copyButton },
                React.createElement("span", { className: classes.copyButtonSpan }, this.state.copyTextPlaceholder))));
    };
    Copy = __decorate([
        react_jss_1.default(styles)
    ], Copy);
    return Copy;
}(React.Component));
exports.Copy = Copy;
//# sourceMappingURL=copy.js.map