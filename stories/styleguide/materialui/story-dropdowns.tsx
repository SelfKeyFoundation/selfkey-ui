import * as React from 'react';
import { FormControl, MenuItem, Select, Input, Typography } from '@material-ui/core';
import SelectDropdownIcon from '../../../src/icons/select-dropdown';

const DropdownItems = ({ value, handleChange }: any) => (
	<Select
		value={value}
		onChange={handleChange}
		displayEmpty
		name="country"
		disableUnderline
		IconComponent={SelectDropdownIcon}
		input={<Input disableUnderline />}
	>
		<MenuItem value="">
			<Typography className="choose" variant="subtitle1" color="textSecondary">
				Choose...
			</Typography>
		</MenuItem>
		{[
			'Andorra',
			'Malta',
			'Russia',
			'Spain',
			'Uruguay',
			'Uganda',
			'Vatican',
			'Venezuela',
			'Zimbabwe',
			'Andorra2',
			'Malta2',
			'Russia2',
			'Spain2',
			'Uruguay2',
			'Uganda2',
			'Vatican2',
			'Venezuela2',
			'Zimbabwe2',
			'Andorra3',
			'Malta3',
			'Russia3',
			'Spain3',
			'Uruguay3',
			'Uganda3',
			'Vatican3',
			'Venezuela3',
			'Zimbabwe3',
			'Andorra4',
			'Malta4',
			'Russia4',
			'Spain4',
			'Uruguay4',
			'Uganda4',
			'Vatican4',
			'Venezuela4',
			'Zimbabwe4',
			'Andorra5',
			'Malta5',
			'Russia5',
			'Spain5',
			'Uruguay5',
			'Uganda5',
			'Vatican5',
			'Venezuela5',
			'Zimbabwe5',
			'Andorra6',
			'Malta6',
			'Russia6',
			'Spain6',
			'Uruguay6',
			'Uganda6',
			'Vatican6',
			'Venezuela6',
			'Zimbabwe6',
		].map(item => (
			<MenuItem key={item} value={item}>
				{item}
			</MenuItem>
		))}
	</Select>
);

class DropdownStories extends React.Component {
	state = {
		country: '',
	};

	handleChange = (event: any) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<form autoComplete="off">
				<FormControl variant="filled">
					<DropdownItems value={this.state.country} handleChange={this.handleChange} />
				</FormControl>
			</form>
		);
	}
}

export default DropdownStories;
