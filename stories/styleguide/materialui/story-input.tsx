import * as React from 'react';
import { 
    Typography, 
    Grid,
	InputAdornment,
	FormControlLabel,
	Checkbox,
	Radio,
	Input,
	TextField,
} from '@material-ui/core';
import { DecimalInput } from '../../../src/theme/selfkey-dark-theme';

import DropdownStories from './story-dropdowns';

const underlineStyle = {
    textDecoration: 'underline',
}

export default function InputStories () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
				Text Input
			</Typography>
            
			<Grid container spacing={24}>
				<Grid item>
					<Typography variant="overline" gutterBottom>
						Normal / Focused
					</Typography>
					<Input
						disableUnderline
						placeholder="First Name"
					/>
				</Grid>

				<Grid item>
					<Typography variant="overline" gutterBottom>
						Disabled
					</Typography>
					<Input
						disabled
						disableUnderline
						placeholder="First Name"
					/>
				</Grid>

				<Grid item>
					<Typography variant="overline" gutterBottom>
						Error
					</Typography>
					<Input
						error
						disableUnderline
						placeholder="First Name"
					/>
					<Typography variant="subtitle2" color="error" gutterBottom>
						Error Message
					</Typography>
				</Grid>
			</Grid>


			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Text Field
			</Typography>
			<Grid container spacing={24}>
				<Grid item>
					<Typography variant="overline" gutterBottom>
						Multiline
					</Typography>
					<TextField
						multiline
					/>
				</Grid>
			</Grid><br/>


			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Dropdown
			</Typography>
			<Typography variant="overline" gutterBottom>
				Normal/Selection
			</Typography>
			<DropdownStories />
			<br/><br/>


			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Specific
			</Typography>
			<Grid container spacing={24}>
				<Grid item>
					<Typography variant="overline" gutterBottom>
						Decimal
					</Typography>

					<DecimalInput 
						disableUnderline
						placeholder="0"
						type="number"
						endAdornment={
							<InputAdornment position="end">
								<Typography variant="h4" gutterBottom>%</Typography>
							</InputAdornment>
						}
					/>
				</Grid>

				<Grid item>
					<Typography variant="overline" gutterBottom>
						Date
					</Typography>

					<Input
						disableUnderline
						type="date"
					/>
				</Grid>


				<Grid item>
					<Typography variant="overline" gutterBottom>
						Numeric
					</Typography>

					<Input
						disableUnderline
						placeholder="0"
						type="number"
					/>
				</Grid>
			</Grid>
			<br/>

			<br/><br/>

			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Checkboxes
			</Typography>

			<Grid container spacing={24} direction='column' >
				<Grid item>
					<FormControlLabel
						control={
							<Checkbox />
						}
						label="Default"
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						control={
							<Checkbox checked />
						}
						label="Selected"
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						control={
							<Checkbox color="primary" />
						}
						label="Unselected, Error"
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						control={
							<Checkbox color="primary" checked />
						}
						label="Selected, Error"
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						control={
							<Checkbox indeterminate checked />
						}
						label="Bulk"
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						control={
							<Checkbox disabled />
						}
						label="Unselected, Disabled"
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						control={
							<Checkbox disabled checked />
						}
						label="Selected, Disabled"
					/>
				</Grid>
			</Grid>


			<br/><br/>

			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Radio buttons
			</Typography>

			<Grid container spacing={24} direction='column' >
				<Grid item>
					<FormControlLabel
						label="Default"
						value="end"
						labelPlacement="end"
						control={
							<Radio />
						}
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						label="Selected"
						value="end"
						labelPlacement="end"
						control={
							<Radio checked />
						}
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						label="Unselected, Error"
						value="end"
						labelPlacement="end"
						control={
							<Radio color="primary" />
						}
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						label="Selected, Error"
						value="end"
						labelPlacement="end"
						control={
							<Radio color="primary" checked />
						}
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						label="Unselected, Disabled"
						value="end"
						labelPlacement="end"
						control={
							<Radio disabled />
						}
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						label="Selected, Disabled"
						value="end"
						labelPlacement="end"
						control={
							<Radio disabled checked />
						}
					/>
				</Grid>
			</Grid>
			<br/><br/>
        </div>
    )
}