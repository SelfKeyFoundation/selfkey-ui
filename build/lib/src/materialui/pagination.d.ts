import * as React from 'react';
declare class Pagination extends React.Component {
    state: {
        value: string;
    };
    handleChangePage: (event: any, page: any) => void;
    render(): JSX.Element;
}
export default Pagination;
