import * as React from 'react';
import { Typography } from '@material-ui/core';
import KeyPicker from '../../../src/materialui/datepicker';

const underlineStyle = {
    textDecoration: 'underline',
};

export default function DatePickerStories() {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
                Date Time Picker
            </Typography>

            <KeyPicker
                includeTime
                onChange={(data: any) => console.log(data)}
                onFocus={(evt: any) => console.log(evt)}
                onBlur={(evt: any) => console.log(evt)}
            />

            <Typography variant="h3" style={underlineStyle} gutterBottom>
                Date Picker
            </Typography>

            <KeyPicker />
            <p style={{ marginBottom: '400px' }}>&nbsp;</p>
        </div>
    );
}
