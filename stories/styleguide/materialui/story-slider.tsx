import * as React from 'react';
import { 
    Typography, 
} from '@material-ui/core';
import InteractiveSlider from '../../../src/materialui/sliders';

const underlineStyle = {
    textDecoration: 'underline',
}

export default function SliderStories () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
				Slider
			</Typography>
            <InteractiveSlider />
            <br/>
        </div>
    )
}