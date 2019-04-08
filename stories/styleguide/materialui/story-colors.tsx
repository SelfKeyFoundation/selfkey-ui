import * as React from 'react';
import { 
    Typography, 
    Grid, 
	CardContent 
} from '@material-ui/core';
import { 
	PrimaryCard, 
    PrimaryTintCard, 
    TypographyCard, 
    WhiteCard, 
    GreyCard, 
    BaseLightCard, 
    BaseDarkCard, 
    BaseCard, 
    SuccessCard, 
    WarningCard, 
    ErrorCard } 
from '../../../src/theme/selfkey-dark-theme';


export default function ColorStories () {
    return (
        <div>
            <Grid container spacing={24} style={{ marginBottom: '30px' }}>
				<Grid item>
					<Typography color="textSecondary" gutterBottom>
						Primary
					</Typography>
					<PrimaryCard>
						<CardContent>
						</CardContent>
					</PrimaryCard>
				</Grid>

				<Grid item>
					<Typography color="textSecondary" gutterBottom>
						Primary Tint
					</Typography>
					<PrimaryTintCard>
						<CardContent>
						</CardContent>
					</PrimaryTintCard>
				</Grid>

				<Grid item>
					<Typography color="textSecondary" gutterBottom>
						Typography
					</Typography>
					<TypographyCard>
						<CardContent>
						</CardContent>
					</TypographyCard>
				</Grid>

				<Grid item>
					<Typography color="textSecondary" gutterBottom>
						White
					</Typography>
					<WhiteCard>
						<CardContent>
						</CardContent>
					</WhiteCard>
				</Grid> 
			</Grid>

			<Grid container spacing={24} style={{ marginBottom: '30px' }}>
				<Grid item>
					<Typography color="textSecondary" gutterBottom>
						Grey
					</Typography>
					<GreyCard>
						<CardContent>
						</CardContent>
					</GreyCard>
				</Grid>

				<Grid item>
					<Typography color="textSecondary" gutterBottom>
						Base Light
					</Typography>
					<BaseLightCard>
						<CardContent>
						</CardContent>
					</BaseLightCard>
				</Grid>
				
				<Grid item>
					<Typography color="textSecondary" gutterBottom>
						Base Dark
					</Typography>
					<BaseDarkCard>
						<CardContent>
						</CardContent>
					</BaseDarkCard>
				</Grid>

				<Grid item>
					<Typography color="textSecondary" gutterBottom>
						Base
					</Typography>
					<BaseCard>
						<CardContent>
						</CardContent>
					</BaseCard>
				</Grid>
			</Grid>

			<Grid container spacing={24} justify="flex-start" style={{ marginBottom: '30px' }}>
				<Grid item>
					<Typography color="textSecondary" gutterBottom>
						Success
					</Typography>
					<SuccessCard>
						<CardContent>
						</CardContent>
					</SuccessCard>
				</Grid>

				<Grid item>
					<Typography color="textSecondary" gutterBottom>
						Warning
					</Typography>
					<WarningCard>
						<CardContent>
						</CardContent>
					</WarningCard>
				</Grid>

				<Grid item>
					<Typography color="textSecondary" gutterBottom>
						Error
					</Typography>
					<ErrorCard>
						<CardContent>
						</CardContent>
					</ErrorCard>
				</Grid>
			</Grid> <br/>
        </div>
    )
}