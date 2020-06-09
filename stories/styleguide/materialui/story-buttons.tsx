import * as React from 'react';
import { Typography, Grid, IconButton, Button } from '@material-ui/core';
import InfoTooltip from '../../../src/icons/info';
import { TooltipArrow, KeyTooltip } from '../../../src/materialui/tooltipArrow';
import ToggleButtonGroupStory from './story-buttonGroups';
import { BackButton } from '../../../src';

const underlineStyle = {
    textDecoration: 'underline',
}

export default function ButtonStories () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
                Buttons
            </Typography>

            <Grid container spacing={8}>
                <Grid item>
                    <Typography variant="overline" gutterBottom>
                        Full Primary
                    </Typography>

                    <Grid container spacing={8}>
                        <Grid item>
                            <Button variant='contained' size='large'>Large</Button>
                        </Grid>

                        <Grid item>
                            <Button variant='contained' disabled size='large'>
                                Disabled
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button variant='contained'>Medium</Button>
                        </Grid>

                        <Grid item>
                            <Button variant='contained' size='small'>Small</Button>
                        </Grid>
                    </Grid>
                    <br/><br/>

                    <Typography variant="overline" gutterBottom>
                        Shell Primary
                    </Typography>

                    <Grid container spacing={8}>
                        <Grid item>
                            <Button variant='outlined' size='large'>Large</Button>
                        </Grid>

                        <Grid item>
                            <Button variant='outlined' disabled size='large'>
                                Disabled
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button variant='outlined'>Medium</Button>
                        </Grid>

                        <Grid item>
                            <Button variant='outlined' size='small'>Small</Button>
                        </Grid>
                    </Grid>
                    <br/><br/>

                    <Typography variant="overline" gutterBottom>
                        Shell Secondary
                    </Typography>

                    <Grid container spacing={8}>
                        <Grid item>
                            <Button variant='outlined' color='secondary' size='large'>Large</Button>
                        </Grid>

                        <Grid item>
                            <Button variant='outlined' color='secondary' disabled size='large'>
                                Disabled
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button variant='outlined' color='secondary'>Medium</Button>
                        </Grid>

                        <Grid item>
                            <Button variant='outlined' color='secondary' size='small'>Small</Button>
                        </Grid>
                    </Grid>
                    <br/><br/>

                    <Typography variant="overline" gutterBottom>
                        Button links & text links
                    </Typography>

                    <Grid container spacing={8}>
                        <Grid item>
                            <Button>Normal text button</Button>
                        </Grid>
                    </Grid>
                    <br/><br/>

                    <Typography variant="overline" gutterBottom>
                        Back Button
                    </Typography>
                    <BackButton />
                    <br /><br />
                    <br /><br />

                </Grid>

                <Grid item>
                    <Typography variant="overline" gutterBottom>
                        Tooltips
                    </Typography>
                    <KeyTooltip interactive placement="top-start"
                        title={
                            <React.Fragment>
                                <span>Tooltip test with link <a color="primary" href="https://selfkey.org">SelfKey</a></span>
                                <TooltipArrow />
                            </React.Fragment>
                        }
                        TransitionProps={{ timeout: 1000 }}
                    >
                        <IconButton aria-label="Info">
                            <InfoTooltip />
                        </IconButton>
                    </KeyTooltip>
                </Grid>
            </Grid>

            <Typography variant="overline" gutterBottom>
                Button Groups
            </Typography>
            <Grid container spacing={8}>
                <Grid item>
                    <ToggleButtonGroupStory />
                </Grid>
            </Grid>
            <br/><br/><br/>
        </div>
    )
}