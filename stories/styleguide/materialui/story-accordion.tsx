import * as React from 'react';
import { 
    ExpansionPanel, 
    ExpansionPanelSummary, 
    Typography, 
    ExpansionPanelDetails,
    Divider,
    Grid
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Explanatory } from '../../../src/materialui/typography';
import { 
    GreenTick,
    DeniedTick, 
    HourGlassIcon,
} from '../../../src/materialui/lists';


const underlineStyle = {
    textDecoration: 'underline',
}

export default function AccordionStories () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
				Accordion
			</Typography>
            
            <ExpansionPanel >
                <ExpansionPanelSummary expandIcon={<ExpandLessIcon />}>
                    <Grid container direction='row' justify='flex-start' alignItems='baseline'>
                        <Typography variant="h2">Location </Typography>
                        <Explanatory>- Explanatory</Explanatory>
                    </Grid>
                    <Grid container direction='row' justify='flex-end' alignItems='center'>
                        <GreenTick />
                        <Explanatory>
                            Approved
                        </Explanatory>
                    </Grid>
                </ExpansionPanelSummary>
                <Divider />

                <ExpansionPanelDetails >
                    <Typography variant="h3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat, libero rutrum tincidunt convallis, massa nisl luctus tortor, vitae faucibus est sapien ac ante. Nunc hendrerit quam ut semper laoreet. Duis et gravida metus, dictum imperdiet est. Suspendisse mauris leo, dapibus eget libero finibus, imperdiet euismod leo. Donec venenatis luctus urna, porta accumsan felis facilisis eu. Maecenas ac justo non ligula ultrices mollis at at enim. Praesent condimentum lacinia neque id ornare. Nunc id velit nec lorem scelerisque luctus. Nullam sed molestie neque, ut tempor mauris. Aenean sit amet libero ac lorem venenatis lacinia ac eu leo. Aliquam bibendum accumsan sodales. Mauris sed orci et lorem finibus ultrices mattis quis diam. Quisque vel lectus tempor, finibus velit ac, sagittis felis. Aliquam orci velit, pharetra sit amet iaculis a, vehicula vitae urna.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <br/>

            <ExpansionPanel >
                <ExpansionPanelSummary expandIcon={<ExpandLessIcon />}>
                    <Grid container direction='row' justify='flex-start' alignItems='baseline'>
                        <Typography variant="h2">Location</Typography>
                        <Explanatory>- Explanatory</Explanatory>
                    </Grid>
                    <Grid container direction='row' justify='flex-end' alignItems='center'>
                        <DeniedTick />
                        <Explanatory>
                            Denied
                        </Explanatory>
                    </Grid>
                </ExpansionPanelSummary>
                <Divider />

                <ExpansionPanelDetails >
                    <Typography variant="h3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat, libero rutrum tincidunt convallis, massa nisl luctus tortor, vitae faucibus est sapien ac ante. Nunc hendrerit quam ut semper laoreet. Duis et gravida metus, dictum imperdiet est. Suspendisse mauris leo, dapibus eget libero finibus, imperdiet euismod leo. Donec venenatis luctus urna, porta accumsan felis facilisis eu. Maecenas ac justo non ligula ultrices mollis at at enim. Praesent condimentum lacinia neque id ornare. Nunc id velit nec lorem scelerisque luctus. Nullam sed molestie neque, ut tempor mauris. Aenean sit amet libero ac lorem venenatis lacinia ac eu leo. Aliquam bibendum accumsan sodales. Mauris sed orci et lorem finibus ultrices mattis quis diam. Quisque vel lectus tempor, finibus velit ac, sagittis felis. Aliquam orci velit, pharetra sit amet iaculis a, vehicula vitae urna.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <br/>

            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandLessIcon />}>
                    <Grid container direction='row' justify='flex-start' alignItems='baseline'>
                        <Typography variant="h2">Location</Typography>
                        <Explanatory>- Explanatory</Explanatory>
                    </Grid>
                    <Grid container direction='row' justify='flex-end' alignItems='center'>
                        <HourGlassIcon />
                        <Explanatory>
                            Pending
                        </Explanatory>
                    </Grid>
                </ExpansionPanelSummary>
                <Divider />

                <ExpansionPanelDetails >
                    <Typography variant="h3"></Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <br/>
        </div>
    )
}