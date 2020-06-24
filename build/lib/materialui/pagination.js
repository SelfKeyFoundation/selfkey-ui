import * as React from 'react';
import { TablePagination, IconButton, Grid } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/styles';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
export const KeyIconButton = withStyles(createStyles({
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
class TablePaginationActions extends React.Component {
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
    render() {
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
    }
}
class Pagination extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            page: 0,
            value: ''
        };
        this.handleChangePage = (event, page) => {
            this.setState({ page });
        };
    }
    render() {
        return (React.createElement(TablePagination, { rowsPerPageOptions: [5, 10, 25], component: "div", count: 148, rowsPerPage: 5, page: 0, backIconButtonProps: {
                'aria-label': 'Previous Page',
            }, nextIconButtonProps: {
                'aria-label': 'Next Page',
            }, onChangePage: this.handleChangePage, ActionsComponent: TablePaginationActions }));
    }
}
export default Pagination;
//# sourceMappingURL=pagination.js.map