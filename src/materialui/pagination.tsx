import * as React from 'react';
import { TablePagination } from '@material-ui/core';

class Pagination extends React.Component {
    state = {
        value: ''
    };

    handleChangePage = (event: any, page: any) => {
        this.setState({ page });
    };

    render() {
        return (
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={20}
                rowsPerPage={5}
                page={0}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                onChangePage={this.handleChangePage}
            />
        );
    }
}

export default Pagination;
