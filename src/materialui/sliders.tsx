import * as React from 'react';
import Slider from '@material-ui/lab/Slider';
import { Definition, Paragraph } from './typography';
import { withStyles, Grid } from '@material-ui/core';

export const KeySlider = withStyles({
    root: {
        margin: '20px 0 33px',
    },
    track: {
        borderRadius: '6px',
        height: '10px',
    },
    trackAfter: {
        backgroundColor: '#313D49',
        opacity: 1,
    },
    thumb: {
        height: '18px',
        width: '18px',
    }
})(Slider);


class InteractiveSlider extends React.Component {
    state = {
        value: 50,
    };

    handleChange = (event: any, value: any) => this.setState({ value });

    render() {
        return (
            <React.Fragment>
                <Grid container justify='flex-start' alignItems='baseline' >
                    <Definition>Network Transaction Fee: &nbsp;</Definition>
                    <Paragraph>0.00042 ETH / $0.01 USD</Paragraph>
                </Grid>
                <KeySlider
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <Grid container justify='space-between'>
                    <Definition>Slow</Definition>
                    <Definition>Medium</Definition>
                    <Definition>Fast</Definition>
                </Grid>
            </React.Fragment>
        );
    }
}

export default InteractiveSlider;
