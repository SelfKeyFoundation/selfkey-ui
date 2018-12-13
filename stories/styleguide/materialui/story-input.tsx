import * as React from 'react';
import { 
    Typography, 
    Grid,
	InputAdornment,
	FormControlLabel,
	Checkbox,
} from '@material-ui/core';
import { 
    TableHeader, 
    InputField, 
    ErrorMessage,
	DecimalInput,
	UnreadNotification,
	DefaultCheckbox,
	NewCheckbox, 
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
			<FormControlLabel
				control={
					<DefaultCheckbox color="primary" />
				}
				label="Primary"
			/>

			<FormControlLabel
				control={
					<NewCheckbox />
				}
				label="New Checkbox"
			/>

			<FormControlLabel
				control={
					<DefaultCheckbox color="secondary" />
				}
				label="Primary"
			/>

			<FormControlLabel
				control={
					<Checkbox color="secondary" />
				}
				label="Primary"
			/>



			{/* <FormControl >
				<Select
					value=""
					displayEmpty
					disableUnderline={ true }
					name="number"
				>
					<MenuItem value="">Test text</MenuItem>
					{['Andorra', 'Malta', 'Russia', 'Spain', 'Spain2', 'Andorra', 'Malta', 'Russia', 'Spain', 'Spain2'].map(item => (
						<MenuItem 
							key={item}
							value={item}
						>
							{item}
						</MenuItem>
					))}
				</Select>
			</FormControl> */}
			<br/><br/>
        </div>
    )
}