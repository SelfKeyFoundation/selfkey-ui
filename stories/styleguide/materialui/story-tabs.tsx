import * as React from 'react';
import { 
    Typography, 
    Grid,
    Tabs,
    Tab,
} from '@material-ui/core';
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
			<Grid container spacing={24}>
				<Grid item>
                    <Tabs value="">
                        <Tab label="Acasdtive" selected />
                        <Tab label="Dised" />
                        <Tab label="Active" />
                    </Tabs>
				</Grid>
				<Grid item>
                    <InteractiveTabs />
                </Grid>
			</Grid>
        </div>
    )
}