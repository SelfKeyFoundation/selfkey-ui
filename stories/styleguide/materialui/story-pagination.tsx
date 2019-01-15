import * as React from 'react';
import { 
	Typography, 
} from '@material-ui/core';
import Pagination from './../../../src/materialui/pagination';

const underlineStyle = {
    textDecoration: 'underline',
}

export default function PaginationStories () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
                Pagination
            </Typography>
            <Pagination />

        </div>
    )
}