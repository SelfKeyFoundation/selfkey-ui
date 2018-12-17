import * as React from 'react';
import { 
    Typography, 
} from '@material-ui/core';
import SimpleModal from '../../../src/materialui/modal';
import ModalWithBackButton from '../../../src/materialui/modalWithBackButton';

const underlineStyle = {
    textDecoration: 'underline',
}

export default function ModalStories () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
                With Close Button
            </Typography>
            <SimpleModal />
            <br/>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
                Inline with Back Button
            </Typography>
            
            <ModalWithBackButton />
        </div>
    )
}