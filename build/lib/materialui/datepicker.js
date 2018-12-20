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
var Datetime = require("react-datetime");
require("./datepicker.css");
var KeyPicker = /** @class */ (function (_super) {
    __extends(KeyPicker, _super);
    function KeyPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeyPicker.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(Datetime, { dateFormat: "DD MMM YYYY", inputProps: { placeholder: '19 Dec 2018 11:23 AM' }, closeOnSelect: true })));
    };
    return KeyPicker;
}(React.Component));
exports.default = KeyPicker;
//# sourceMappingURL=datepicker.js.map