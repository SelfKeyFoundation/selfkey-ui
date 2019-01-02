import * as React from 'react';
import { 
	Typography, 
	Grid, 
	IconButton, 
	Button,
} from '@material-ui/core';
import { 
    TableHeader, 
    OutlineButton, 
	OutlineSecondaryButton,
} from '../../../src/theme/selfkey-dark-theme';
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
							<Button size="large">Large</Button>
						</Grid>

						<Grid item>
							<Button disabled size="large">
								Disabled
							</Button> 
						</Grid>

						<Grid item>
							<Button>Medium</Button> 
						</Grid>

						<Grid item>
							<Button size="small">Small</Button>
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
					<ToggleButtonGroupStory />
				</Grid>
			</Grid>
			<br/><br/>
        </div>
    )
}