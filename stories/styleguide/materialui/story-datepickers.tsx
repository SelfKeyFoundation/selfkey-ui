import * as React from 'react';
import { Typography } from '@material-ui/core';
import KeyPicker from '../../../src/materialui/datepicker';

const underlineStyle = {
    textDecoration: 'underline',
}

export default function DatePickerStories () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
                Date Picker
            </Typography>

            <KeyPicker />

            <p style={{ marginBottom: '400px' }}>&nbsp;</p>

        </div>
    )
}