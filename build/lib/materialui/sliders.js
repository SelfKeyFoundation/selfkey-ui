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
var Slider_1 = require("@material-ui/lab/Slider");
var typography_1 = require("./typography");
var core_1 = require("@material-ui/core");
exports.KeySlider = core_1.withStyles({
    root: {
        margin: '20px 0 33px',
    },
    track: {
        borderRadius: '6px',
        height: '10px',
    },
    trackAfter: {
        backgroundColor: '#313D49',
        opacity: 1,
    },
    thumb: {
        height: '18px',
        width: '18px',
    }
})(Slider_1.default);
var InteractiveSlider = /** @class */ (function (_super) {
    __extends(InteractiveSlider, _super);
    function InteractiveSlider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: 50,
        };
        _this.handleChange = function (event, value) { return _this.setState({ value: value }); };
        return _this;
    }
    InteractiveSlider.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(core_1.Grid, { container: true, justify: 'flex-start', alignItems: 'baseline' },
                React.createElement(typography_1.Definition, null, "Network Transaction Fee: \u00A0"),
                React.createElement(typography_1.Paragraph, null, "0.00042 ETH / $0.01 USD")),
            React.createElement(exports.KeySlider, { value: this.state.value, onChange: this.handleChange }),
            React.createElement(core_1.Grid, { container: true, justify: 'space-between' },
                React.createElement(typography_1.Definition, null, "Slow"),
                React.createElement(typography_1.Definition, null, "Medium"),
                React.createElement(typography_1.Definition, null, "Fast"))));
    };
    return InteractiveSlider;
}(React.Component));
exports.default = InteractiveSlider;
//# sourceMappingURL=sliders.js.map