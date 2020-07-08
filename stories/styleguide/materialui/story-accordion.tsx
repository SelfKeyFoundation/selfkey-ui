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
import {
    GreenTick,
    DeniedTick,
} from '../../../src/materialui/lists';
import { HourGlassIcon } from '../../../src';

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
                        <Typography variant="subtitle2" color="secondary" gutterBottom>- Explanatory</Typography>
                    </Grid>
                    <Grid container direction='row' justify='flex-end' alignItems='center'>
                        <GreenTick />
                        <Typography variant="subtitle2" color="secondary" gutterBottom>
                            Approved
                        </Typography>
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
                        <Typography variant="subtitle2" color="secondary" gutterBottom>- Explanatory</Typography>
                    </Grid>
                    <Grid container direction='row' justify='flex-end' alignItems='center'>
                        <DeniedTick />
                        <Typography variant="subtitle2" color="secondary" gutterBottom>
                            Denied
                        </Typography>
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
                        <Typography variant="subtitle2" color="secondary" gutterBottom>- Explanatory</Typography>
                    </Grid>
                    <Grid container direction='row' justify='flex-end' alignItems='center'>
                        <HourGlassIcon />
                        <Typography variant="subtitle2" color="secondary" gutterBottom>
                            Pending
                        </Typography>
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