import * as React from 'react';
import { Typography } from '@material-ui/core';
import * as moment from 'moment';
import KeyPicker from '../../../src/materialui/datepicker';

const underlineStyle = {
	textDecoration: 'underline'
};

export default function DatePickerStories() {
	const today = moment(Date.now()).add(1, 'month');
	return (
		<div>
			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Date Time Picker
			</Typography>

			<KeyPicker
				includeTime
				onChange={(data: any) => console.log(data)}
				onFocus={(evt: any) => console.log(evt)}
				onBlur={(evt: any) => console.log(evt)}
			/>

			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Date Picker
			</Typography>

			<KeyPicker />
			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Date Picker: Allow only events in one month
			</Typography>
			<KeyPicker
				isValidDate={(current: any): boolean => {
					return current.isSameOrAfter(today, 'day');
				}}
				viewDate={today}
			/>
			<p style={{ marginBottom: '400px' }}>&nbsp;</p>
		</div>
	);
}
