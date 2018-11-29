import * as React from 'react';
import { 
    Typography, 
    Grid,
    List,
    ListItem, 
} from '@material-ui/core';
import { 
    Paragraph,
    DefaultBullet,
    ParagraphLarge,
    Definition,
    GreenTick,
    DefinitionDescription,
    CheckedIcon, 
} from '../../../src/theme/selfkey-dark-theme';

const underlineStyle = {
    textDecoration: 'underline',
}

export default function InputStories () {
    return (
        <div>
            <Grid container spacing={24}>
				<Grid item xs>
					<Typography variant="h3" style={underlineStyle} gutterBottom>
						Lists
					</Typography>
					<Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit:
					</Paragraph>
					<List>
						{['Binance', 'KuCoin', 'IDEX'].map(item => (
							<ListItem key={item}>
								<DefaultBullet />
								<ParagraphLarge>{item}</ParagraphLarge>
							</ListItem>
						))}
					</List> <br/>
				</Grid>

				<Grid item xs>
					<Typography variant="h3" style={underlineStyle} gutterBottom>
						Definition Lists
					</Typography>
					<List>
						{['United States', 'LLC', '08/08/2016'].map(item => (
							<ListItem key={item}>
								<Definition>
									Jurisdiction
								</Definition>
								<GreenTick />
								<DefinitionDescription>
									{item}
								</DefinitionDescription>
							</ListItem>
						))}
					</List> <br/>
				</Grid>

				<Grid item xs>
					<Typography variant="h3" style={underlineStyle} gutterBottom>
						Check Lists
					</Typography>
					<List>
						{['Full Legal Name', 'Country of Residency', 'National ID Document', 'National ID with Selfie'].map(item => (
							<ListItem key={item}>
								<CheckedIcon />
								<Definition>
									{item}
								</Definition>
							</ListItem>
						))}
					</List> <br/>
				</Grid>
			</Grid>
        </div>
    )
}