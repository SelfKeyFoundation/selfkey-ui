"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var inputs_1 = require("./inputs");
var KeyDropdown = /** @class */ (function (_super) {
    __extends(KeyDropdown, _super);
    function KeyDropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            country: '',
        };
        _this.handleChange = function (event) {
            var _a;
            _this.setState((_a = {}, _a[event.target.name] = event.target.value, _a));
        };
        return _this;
    }
    KeyDropdown.prototype.render = function () {
        return (React.createElement("form", { autoComplete: "off" },
            React.createElement(core_1.FormControl, { variant: "filled" },
                React.createElement(inputs_1.DropdownSelect, { value: this.state.country, onChange: this.handleChange, displayEmpty: true, name: "country", disableUnderline: true, IconComponent: icons_1.KeyboardArrowDown, input: React.createElement(inputs_1.DropdownInputField, { id: "filled-age-simple", disableUnderline: true }) },
                    React.createElement(core_1.MenuItem, { value: "" },
                        React.createElement("em", null, "Choose...")),
                    ['Andorra', 'Malta', 'Russia', 'Spain', 'Uruguay', 'Uganda', 'Vatican', 'Venezuela', 'Zimbabwe'].map(function (item) { return (React.createElement(core_1.MenuItem, { key: item, value: item }, item)); })))));
    };
    return KeyDropdown;
}(React.Component));
exports.default = KeyDropdown;
//# sourceMappingURL=dropdowns.js.map