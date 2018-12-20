import * as React from 'react';
import { 
    Typography, 
    Grid,
	InputAdornment,
	FormControlLabel,
} from '@material-ui/core';
import { 
    TableHeader, 
    InputField, 
    ErrorMessage,
	DecimalInput,
	UnreadNotification,
	DefaultCheckbox,
	DefaultRadio,
} from '../../../src/theme/selfkey-dark-theme';

import KeyDropdown from './../../../src/materialui/dropdowns'

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
					<TableHeader gutterBottom>
						Normal / Focused
					</TableHeader>
					<InputField
						disableUnderline={ true }
						placeholder="First Name"
					/>
				</Grid>

				<Grid item>
					<TableHeader gutterBottom>
						Disabled
					</TableHeader>
					<InputField
						disabled
						disableUnderline={ true }
						placeholder="First Name"
					/>
				</Grid>

				<Grid item>
					<TableHeader gutterBottom>
						Error
					</TableHeader>
					<InputField
						error
						disableUnderline={ true }
						placeholder="First Name"
					/>
					<ErrorMessage>Error message</ErrorMessage>
				</Grid>
			</Grid> <br/>


			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Dropdown
			</Typography>
			<TableHeader gutterBottom>
				Normal/Selection
			</TableHeader>
			<KeyDropdown />
			<br/><br/>


			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Specific
			</Typography>
			<Grid container spacing={24}>
				<Grid item>
					<TableHeader gutterBottom>
						Decimal
					</TableHeader>

					<DecimalInput 
						disableUnderline={ true }
						placeholder="0"
						type="number"
						endAdornment={
							<InputAdornment position="end">
								<UnreadNotification color="primary">%</UnreadNotification>
							</InputAdornment>
						}
					/>
				</Grid>

				<Grid item>
					<TableHeader gutterBottom>
						Date
					</TableHeader>

					<InputField
						disableUnderline={ true }
						type="date"
					/>
				</Grid>


				<Grid item>
					<TableHeader gutterBottom>
						Numeric
					</TableHeader>

					<InputField
						disableUnderline={ true }
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
							<DefaultCheckbox color="primary" />
						}
						label="Default"
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						control={
							<DefaultCheckbox color="primary" checked />
						}
						label="Selected"
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						control={
							<DefaultCheckbox color="secondary" />
						}
						label="Unselected, Error"
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						control={
							<DefaultCheckbox color="secondary" checked />
						}
						label="Selected, Error"
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						control={
							<DefaultCheckbox color="primary" indeterminate checked />
						}
						label="Bulk"
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						control={
							<DefaultCheckbox disabled />
						}
						label="Unselected, Disabled"
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						control={
							<DefaultCheckbox disabled checked />
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
							<DefaultRadio color="primary" />
						}
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						label="Selected"
						value="end"
						labelPlacement="end"
						control={
							<DefaultRadio color="primary" checked />
						}
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						label="Unselected, Error"
						value="end"
						labelPlacement="end"
						control={
							<DefaultRadio color="secondary" />
						}
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						label="Selected, Error"
						value="end"
						labelPlacement="end"
						control={
							<DefaultRadio color="secondary" checked />
						}
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						label="Unselected, Disabled"
						value="end"
						labelPlacement="end"
						control={
							<DefaultRadio disabled />
						}
					/>
				</Grid>

				<Grid item>
					<FormControlLabel
						label="Selected, Disabled"
						value="end"
						labelPlacement="end"
						control={
							<DefaultRadio disabled checked />
						}
					/>
				</Grid>
			</Grid>
			<br/><br/>
        </div>
    )
}