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
			<StatusInfo status="Documents Required" />
			<br/><br/>
			<StatusInfo status="Documents Submitted" />
			<br/><br/>
			<StatusInfo status="Denied" />
			<br/><br/>
			<StatusInfo />

        </div>
    )
}