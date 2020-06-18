import * as React from 'react';
import { Typography, Grid, List, ListItem } from '@material-ui/core';
import { DefaultBullet, GreenTick, CheckedIcon } from '../../../src/icons';

const underlineStyle = {
    textDecoration: 'underline',
}

export default function InputStories () {
    return (
        <div>
            <Grid container spacing={8}>
                <Grid item>
                    <Typography variant="h3" style={underlineStyle} gutterBottom>
                        Lists
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit:
                    </Typography>
                    <List>
                        {['Binance', 'KuCoin', 'IDEX'].map(item => (
                            <ListItem key={item}>
                                <DefaultBullet />
                                <Typography variant="body2" gutterBottom>{item}</Typography>
                            </ListItem>
                        ))}
                    </List> <br/>
                </Grid>

                <Grid item>
                    <Typography variant="h3" style={underlineStyle} gutterBottom>
                        Definition Lists
                    </Typography>
                    <List>
                        {['United States', 'LLC', '08/08/2016'].map(item => (
                            <ListItem key={item}>
                                <Typography variant="body2" color="textSecondary" gutterBottom>
                                    Jurisdiction
                                </Typography>
                                <GreenTick />
                                <Typography variant="h5" gutterBottom>
                                    {item}
                                </Typography>
                            </ListItem>
                        ))}
                    </List> <br/>
                </Grid>

                <Grid item>
                    <Typography variant="h3" style={underlineStyle} gutterBottom>
                        Check Lists
                    </Typography>
                    <List>
                        {[
                            {
                                name: 'Full Legal Name',
                                icon: ''
                            },
                            {
                                name: 'Status: Verified',
                                icon: 'verified'
                            },
                            {
                                name: 'Status: Unverified',
                                icon: 'unverified'
                            },
                            {
                                name: 'National ID with Selfie',
                                icon: ''
                            },
                        ].map(item => (
                            <ListItem key={item.name}>
                                <CheckedIcon item={item.icon} data-item={item} />
                                <Typography variant="body2" color="textSecondary" gutterBottom>
                                    {item.name}
                                </Typography>
                            </ListItem>
                        ))}
                    </List> <br/>
                </Grid>
            </Grid>
        </div>
    )
}