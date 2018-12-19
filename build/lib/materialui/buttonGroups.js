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
var buttons_1 = require("./buttons");
var typography_1 = require("./typography");
var InteractiveButtonGroups = /** @class */ (function (_super) {
    __extends(InteractiveButtonGroups, _super);
    function InteractiveButtonGroups() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: "left"
        };
        _this.handleChange = function (event, value) { return _this.setState({ value: value }); };
        return _this;
    }
    InteractiveButtonGroups.prototype.render = function () {
        var value = this.state.value;
        return (React.createElement(buttons_1.ToggleBtnGroup, { exclusive: true, value: value, onChange: this.handleChange },
            React.createElement(buttons_1.ToggleBtn, { value: "first" },
                React.createElement(typography_1.DefinitionDescription, null, "First")),
            React.createElement(buttons_1.ToggleBtn, { value: "second" },
                React.createElement(typography_1.DefinitionDescription, null, "second")),
            React.createElement(buttons_1.ToggleBtn, { value: "third" },
                React.createElement(typography_1.DefinitionDescription, null, "third"))));
    };
    return InteractiveButtonGroups;
}(React.Component));
exports.default = InteractiveButtonGroups;
//# sourceMappingURL=buttonGroups.js.map