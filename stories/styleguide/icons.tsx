import * as React from 'react';
import { MuiAddIcon } from '../../src/icons/muiadd';
import { Typography, List, ListItem } from '@material-ui/core';

export const IconsStory = () => (
	<List>
		<ListItem>
			<Typography variant="body1">
				MuiAddIcon
			</Typography>
            {" "}
            <MuiAddIcon />
		</ListItem>
	</List>
);
