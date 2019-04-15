import * as React from 'react';
import { Typography } from '@material-ui/core';
import { StatusInfo } from '../../../src/theme/selfkey-dark-theme';

const underlineStyle = {
    textDecoration: 'underline',
}

export default function StatusStories () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
				Statuses
			</Typography>
			<StatusInfo status="missing" />
			<br/><br/>
			<StatusInfo status="pending" />
			<br/><br/>
			<StatusInfo status="completed" />
			<br/><br/>
			<StatusInfo status="denied" />
			<br/><br/>
			<StatusInfo />

        </div>
    )
}