import * as React from 'react';
import { Typography, Grid, Slider } from '@material-ui/core';
import { SliderTooltip } from './../../../src/materialui/tooltip-arrow';

const underlineStyle = {
	textDecoration: 'underline'
};

interface Props {
	children: React.ReactElement;
	open: boolean;
	value: number;
}

const valuetext = (value: number) => {
	return `${value}°C`;
};

export default function StoryRangeSlider() {
	const [value, setValue] = React.useState<number[]>([20, 47]);

	const handleChange = (event: any, newValue: number | number[]) => {
		setValue(newValue as number[]);
	};

	const valueLabelComponent = (props: Props) => {
		const { children, open, value } = props;

		return (
			<SliderTooltip open={open} placement="bottom" title={`${value}%`}>
				{children}
			</SliderTooltip>
		);
	};

	return (
		<React.Fragment>
			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Range Slider
			</Typography>
			<Slider
				getAriaValueText={valuetext}
				ValueLabelComponent={valueLabelComponent}
				value={value}
				onChange={handleChange}
				valueLabelDisplay="on"
				aria-labelledby="range-slider"
			/>
			<Grid container justify="space-between">
				<Typography variant="subtitle2" color="textSecondary" gutterBottom>
					0
				</Typography>
				<Typography variant="subtitle2" color="textSecondary" gutterBottom>
					100%
				</Typography>
			</Grid>
		</React.Fragment>
	);
}
