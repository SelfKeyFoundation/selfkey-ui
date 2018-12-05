import * as React from 'react';
import { 
	Typography, 
	Grid, 
	Tooltip,
	IconButton, 
} from '@material-ui/core';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { 
    TableHeader, 
    FullButton, 
    OutlineButton, 
	OutlineSecondaryButton,
	ToggleBtn,
	DefinitionDescription,
} from '../../../src/theme/selfkey-dark-theme';
import Fingerprint from '@material-ui/icons/Fingerprint';
import Wallpaper from '@material-ui/icons/Wallpaper';
import InfoTooltip from '../../../src/icons/info';

const underlineStyle = {
    textDecoration: 'underline',
}

export default function ButtonStories () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
				Buttons
			</Typography>

			<Grid container spacing={24}>
				<Grid item>
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
				</Grid>

				<Grid item>
					<TableHeader gutterBottom>
						Tooltips
					</TableHeader>
					<Tooltip interactive placement="top-start" title='Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus. Praesent non nunc mollis, fermentum neque at, semper arcu. Nullam eget est sed sem iaculis gravida eget <a href="selfkey.org">click here</a>'>
						<IconButton aria-label="Info">
							<InfoTooltip />
						</IconButton>
					</Tooltip>
				</Grid>
			</Grid>
			<br/><br/><br/>


			<TableHeader gutterBottom>
				Button Groups
			</TableHeader>
			<Grid container spacing={24}>
				<Grid item>
					<ToggleButtonGroup value="" exclusive>
						<ToggleBtn value="fingerprint">
							<Fingerprint />
						</ToggleBtn>
						<ToggleBtn value="wallpeper">
							<Wallpaper />
						</ToggleBtn>
					</ToggleButtonGroup>
				</Grid>

				<Grid item>
					<ToggleButtonGroup value="" exclusive>
						<ToggleBtn value="first">
							<DefinitionDescription>First</DefinitionDescription>
						</ToggleBtn>
						<ToggleBtn value="second">
							<DefinitionDescription>second</DefinitionDescription>
						</ToggleBtn>
						<ToggleBtn value="third">
							<DefinitionDescription>third</DefinitionDescription>
						</ToggleBtn>
					</ToggleButtonGroup>
				</Grid>
			</Grid>
			<br/><br/>
        </div>
    )
}