import * as React from 'react';
import { Grid, Slider, Typography } from '@material-ui/core';
import StoryRangeSlider from './story-rangeSlider';

const underlineStyle = {
	textDecoration: 'underline'
};

class SliderStory extends React.Component {
	state = {
		value: 50
	};

	handleChange = (event: any, value: any) => this.setState({ value });

	render() {
		return (
			<React.Fragment>
				<Typography variant="h3" style={underlineStyle} gutterBottom>
					Slider
				</Typography>
				<Grid container justify="flex-start" alignItems="baseline">
					<Typography variant="body2" color="textSecondary" gutterBottom>
						Network Transaction Fee: &nbsp;
					</Typography>
					<Typography variant="body1" gutterBottom>
						0.00042 ETH / $0.01 USD
					</Typography>
				</Grid>
				<Slider value={this.state.value} onChange={this.handleChange} />
				<Grid container justify="space-between">
					<Typography variant="body2" color="textSecondary" gutterBottom>
						Slow
					</Typography>
					<Typography variant="body2" color="textSecondary" gutterBottom>
						Medium
					</Typography>
					<Typography variant="body2" color="textSecondary" gutterBottom>
						Fast
					</Typography>
				</Grid>
				<StoryRangeSlider />
			</React.Fragment>
		);
	}
}

export default SliderStory;
