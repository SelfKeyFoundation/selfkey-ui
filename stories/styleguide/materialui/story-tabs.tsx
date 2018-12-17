import * as React from 'react';
import { Typography } from '@material-ui/core';
import InteractiveTabs from '../../../src/materialui/tabs';

const underlineStyle = {
    textDecoration: 'underline',
}

export default function TabStories () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
				Tabs
			</Typography>
            <InteractiveTabs />
            <br/><br/>
        </div>
    )
}