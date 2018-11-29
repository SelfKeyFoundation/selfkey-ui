import * as React from 'react';
import { 
    Typography, 
    FormControl, 
    InputLabel, 
    MenuItem, 
    Select, 
} from '@material-ui/core';
import { 
    TableHeader, 
    DropdownSelect, 
    DropdownInputField, 
} from '../../../src/theme/selfkey-dark-theme';

const underlineStyle = {
    textDecoration: 'underline',
}

export default function ButtonStories () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
				Dropdown
			</Typography>
			<TableHeader gutterBottom>
				Normal/Selection
			</TableHeader>
			<FormControl variant="filled">
				<InputLabel 
					htmlFor="filled-age-simple"
				>
					Choose...
				</InputLabel>
				<DropdownSelect
					input={
						<DropdownInputField
							id="filled-age-simple"
							disableUnderline={ true }
							/>
						}
				>
					<MenuItem value="">
						<em>Choose\\...</em>
					</MenuItem>
					{['Andorra', 'Malta', 'Russia', 'Spain', 'Uruguay'].map(item => (
						<MenuItem 
							key={item}
							value={item}
						>
							{item}
						</MenuItem>
					))}
				</DropdownSelect>
			</FormControl>
			<br/><br/>

			<FormControl >
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
			</FormControl>
			<br/><br/>
        </div>
    )
}