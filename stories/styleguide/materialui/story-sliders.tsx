import * as React from 'react';
import { 
    Grid, 
    Typography, 
} from '@material-ui/core';
import { 
    Definition, 
    Paragraph,
} from '../../../src/materialui/typography';
import { KeySlider } from '../../../src/materialui/slider';

const underlineStyle = {
    textDecoration: 'underline',
}

class SliderStory extends React.Component {
    state = {
        value: 50,
    };

    handleChange = (event: any, value: any) => this.setState({ value });

    render() {
        return (
            <React.Fragment>
                <Typography variant="h3" style={underlineStyle} gutterBottom>
                    Slider
                </Typography>
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

export default SliderStory;
