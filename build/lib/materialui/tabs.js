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
var core_1 = require("@material-ui/core");
var InteractiveTabs = /** @class */ (function (_super) {
    __extends(InteractiveTabs, _super);
    function InteractiveTabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: 0
        };
        _this.handleChange = function (event, value) {
            _this.setState({ value: value });
        };
        return _this;
    }
    InteractiveTabs.prototype.render = function () {
        return (React.createElement(core_1.Tabs, { value: this.state.value, onChange: this.handleChange },
            React.createElement(core_1.Tab, { label: "First tab" }),
            React.createElement(core_1.Tab, { label: "Second" }),
            React.createElement(core_1.Tab, { label: "Third tab" })));
    };
    return InteractiveTabs;
}(React.Component));
exports.default = InteractiveTabs;
//# sourceMappingURL=tabs.js.map