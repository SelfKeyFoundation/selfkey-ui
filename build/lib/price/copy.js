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
    function Copy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.copyText = 'COPY';
        _this.copiedText = 'COPIED';
        _this.state = {
            copyTextPlaceholder: _this.copyText
        };
        return _this;
    }
    Copy.prototype.handleOnCopy = function () {
        var _this = this;
        this.state.copyTextPlaceholder = this.copiedText;
        var bounceTime = setTimeout(function () {
            _this.state.copyTextPlaceholder = _this.copyText;
            clearTimeout(bounceTime);
        }, 5000);
    };
    ;
    Copy.prototype.render = function () {
        return (React.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: this.props.text, onCopy: this.handleOnCopy },
            React.createElement("button", null,
                React.createElement("span", null, this.state.copyTextPlaceholder))));
    };
    Copy = __decorate([
        react_jss_1.default(styles)
    ], Copy);
    return Copy;
}(React.Component));
exports.Copy = Copy;
//# sourceMappingURL=copy.js.map