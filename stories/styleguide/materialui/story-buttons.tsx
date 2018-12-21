import * as React from 'react';
import { 
	Typography, 
	Grid, 
	// Tooltip,
	IconButton, 
} from '@material-ui/core';
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
import { 
	TooltipArrow, 
	KeyTooltip,
} from '../../../src/materialui/tooltipArrow';
import ToggleButtonGroupStory from './story-buttonGroups';

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

					<Grid container spacing={24}>
						<Grid item>
							<FullButton size="large">Large</FullButton>
						</Grid>

						<Grid item>
							<FullButton disabled size="large">
								Disabled
							</FullButton> 
						</Grid>

						<Grid item>
							<FullButton>Medium</FullButton> 
						</Grid>

						<Grid item>
							<FullButton size="small">Small</FullButton>
						</Grid>
					</Grid>
					<br/><br/>

					<TableHeader gutterBottom>
						Shell Primary
					</TableHeader>

					<Grid container spacing={24}>
						<Grid item>
							<OutlineButton size="large">Large</OutlineButton>
						</Grid>

						<Grid item>
							<OutlineButton disabled size="large">
								Disabled
							</OutlineButton> 
						</Grid>

						<Grid item>
							<OutlineButton>Medium</OutlineButton> 
						</Grid>

						<Grid item>
							<OutlineButton size="small">Small</OutlineButton>
						</Grid>
					</Grid>
					<br/><br/>

					<TableHeader gutterBottom>
						Shell Secondary
					</TableHeader>

					<Grid container spacing={24}>
						<Grid item>
							<OutlineSecondaryButton size="large">Large</OutlineSecondaryButton>
						</Grid>

						<Grid item>
							<OutlineSecondaryButton disabled size="large">
								Disabled
							</OutlineSecondaryButton> 
						</Grid>

						<Grid item>
							<OutlineSecondaryButton>Medium</OutlineSecondaryButton> 
						</Grid>

						<Grid item>
							<OutlineSecondaryButton size="small">Small</OutlineSecondaryButton>
						</Grid>
					</Grid>
				</Grid>

				<Grid item>
					<TableHeader gutterBottom>
						Tooltips
					</TableHeader>
					<KeyTooltip interactive placement="top-start" 
						title={
							<React.Fragment>
								<span>Tooltip test with link <a color="primary" href="https://selfkey.org">SelfKey</a></span>
								<TooltipArrow />
							</React.Fragment>
						}
					>
						<IconButton aria-label="Info">
							<InfoTooltip />
						</IconButton>
					</KeyTooltip>
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
						<ToggleBtn value="fingerprint">
							<Fingerprint />
						</ToggleBtn>
						<ToggleBtn value="wallpaper">
							<Wallpaper />
						</ToggleBtn>
					</ToggleBtnGroup>
				</Grid>

				<Grid item>
					<ToggleButtonGroupStory />
				</Grid>
			</Grid>
			<br/><br/>
        </div>
    )
}