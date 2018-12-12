import * as React from 'react';
import { 
	Typography, 
	Grid, 
	Tooltip,
	IconButton, 
} from '@material-ui/core';
// import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { 
    TableHeader, 
    FullButton, 
    OutlineButton, 
	OutlineSecondaryButton,
	ToggleBtn,
	ToggleBtnGroup,
} from '../../../src/theme/selfkey-dark-theme';
import Fingerprint from '@material-ui/icons/Fingerprint';
import Wallpaper from '@material-ui/icons/Wallpaper';
import InfoTooltip from '../../../src/icons/info';
import InteractiveButtonGroups from '../../../src/materialui/buttonGroups';

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
					<Tooltip interactive placement="top-start" 
						title={
							<React.Fragment>
								<span>Tooltip test with link <a color="primary" href="https://selfkey.org">SelfKey</a></span>
							</React.Fragment>
						}
					>
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
					<ToggleBtnGroup 
						exclusive
						value=''
					>
s						<ToggleBtn value="fingerprint">
							<Fingerprint />
						</ToggleBtn>
						<ToggleBtn value="wallpaper">
							<Wallpaper />
						</ToggleBtn>
					</ToggleBtnGroup>
				</Grid>

				<Grid item>
					<InteractiveButtonGroups />
				</Grid>
			</Grid>
			<br/><br/>
        </div>
    )
}