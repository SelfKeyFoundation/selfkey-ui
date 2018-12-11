import * as React from 'react';
import { 
    Typography, 
} from '@material-ui/core';
import SimpleModal from '../../../src/materialui/modal';
// import KeyModal from '../../../src/materialui/modal';

const underlineStyle = {
    textDecoration: 'underline',
}

export default function ModalStories () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
                With Close Button
            </Typography>
            {/* <KeyModal /> */}
            <SimpleModal />
        </div>
    )
}