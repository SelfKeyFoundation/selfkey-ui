import * as React from 'react';
import { Slider, Typography } from '@material-ui/core';

const underlineStyle = {
    textDecoration: 'underline',
}

const valuetext = (value: number) => {
    return `${value}°C`;
}

export default function RangeSlider () {
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <React.Fragment>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
                Range Slider
            </Typography>
            <Slider
                // getAriaValueText={this.valuetext}
                value={this.value}
                onChange={handleChange}
                valueLabelDisplay="on"
                aria-labelledby="range-slider"
            />
        </React.Fragment>
    );
};
