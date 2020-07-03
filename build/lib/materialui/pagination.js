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
import { TablePagination, IconButton, Grid } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/styles';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
export var KeyIconButton = withStyles(createStyles({
    root: {
        border: '1px solid #313D49',
        borderRadius: 0,
        margin: '0 5px',
        padding: '5px',
        '&:hover': {
            backgroundColor: '#2D3742',
            border: '1px solid #687C8A',
        },
    },
}))(IconButton);
var TablePaginationActions = /** @class */ (function (_super) {
    __extends(TablePaginationActions, _super);
    function TablePaginationActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // handleFirstPageButtonClick = event => {
    //   this.props.onChangePage(event, 0);
    // };
    // handleBackButtonClick = event => {
    //   this.props.onChangePage(event, this.props.page - 1);
    // };
    // handleNextButtonClick = event => {
    //   this.props.onChangePage(event, this.props.page + 1);
    // };
    // handleLastPageButtonClick = event => {
    //   this.props.onChangePage(
    //     event,
    //     Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    //   );
    // };
    TablePaginationActions.prototype.render = function () {
        //   const { classes, count, page, rowsPerPage, theme } = this.props;
        return (React.createElement(Grid, { container: true, direction: 'row' },
            React.createElement(Grid, { item: true },
                React.createElement(KeyIconButton, { "aria-label": "First Page" },
                    React.createElement(FirstPageIcon, null))),
            React.createElement(Grid, { item: true },
                React.createElement(KeyIconButton, { "aria-label": "Previous Page" },
                    React.createElement(KeyboardArrowLeft, null))),
            React.createElement(Grid, { item: true },
                React.createElement(KeyIconButton, { "aria-label": "Next Page" },
                    React.createElement(KeyboardArrowRight, null))),
            React.createElement(Grid, { item: true },
                React.createElement(KeyIconButton, { "aria-label": "Last Page" },
                    React.createElement(LastPageIcon, null)))));
    };
    return TablePaginationActions;
}(React.Component));
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            page: 0,
            value: ''
        };
        _this.handleChangePage = function (event, page) {
            _this.setState({ page: page });
        };
        return _this;
    }
    Pagination.prototype.render = function () {
        return (React.createElement(TablePagination, { rowsPerPageOptions: [5, 10, 25], component: "div", count: 148, rowsPerPage: 5, page: 0, backIconButtonProps: {
                'aria-label': 'Previous Page',
            }, nextIconButtonProps: {
                'aria-label': 'Next Page',
            }, onChangePage: this.handleChangePage, ActionsComponent: TablePaginationActions }));
    };
    return Pagination;
}(React.Component));
export default Pagination;
//# sourceMappingURL=pagination.js.map