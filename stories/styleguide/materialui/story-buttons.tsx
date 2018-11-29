import * as React from 'react';
import { 
	Typography, 
} from '@material-ui/core';
import { 
    TableHeader, 
    FullButton, 
    OutlineButton, 
    OutlineSecondaryButton,
} from '../../../src/theme/selfkey-dark-theme';

const underlineStyle = {
    textDecoration: 'underline',
}

export default function ButtonStories () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
				Buttons
			</Typography>
			<TableHeader gutterBottom>
				Full Primary
			</TableHeader>

			<FullButton size="large">Large</FullButton>
			<FullButton disabled size="large">
				Disabled
			</FullButton> 
			<FullButton>Medium</FullButton> 
			<FullButton size="small">Small</FullButton>
			<br/><br/>

			<TableHeader gutterBottom>
				Shell Primary
			</TableHeader>
			<OutlineButton size="large">Large</OutlineButton>
			<OutlineButton disabled size="large">
				Disabled
			</OutlineButton> 
			<OutlineButton>Medium</OutlineButton> 
			<OutlineButton size="small">Small</OutlineButton>
			<br/><br/>

			<TableHeader gutterBottom>
				Shell Secondary
			</TableHeader>
			<OutlineSecondaryButton size="large">Large</OutlineSecondaryButton>
			<OutlineSecondaryButton disabled size="large">
				Disabled
			</OutlineSecondaryButton> 
			<OutlineSecondaryButton>Medium</OutlineSecondaryButton> 
			<OutlineSecondaryButton size="small">Small</OutlineSecondaryButton>
			<br/><br/><br/>
        </div>
    )
}