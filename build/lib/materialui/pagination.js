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
exports.KeyPagination = core_1.withStyles({
    root: {
        label: {},
    },
    selectIcon: {
        label: {
            border: '5px solid #313D49',
        },
    },
})(core_1.TablePagination);
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: ''
        };
        _this.handleChangePage = function (event, page) {
            _this.setState({ page: page });
        };
        return _this;
    }
    Pagination.prototype.render = function () {
        // const { value } = this.state;
        return (React.createElement(exports.KeyPagination, { rowsPerPageOptions: [5, 10, 25], colSpan: 3, count: 2, rowsPerPage: 5, page: 2, SelectProps: {
                native: true,
            }, onChangePage: this.handleChangePage }));
    };
    return Pagination;
}(React.Component));
exports.default = Pagination;
//# sourceMappingURL=pagination.js.map