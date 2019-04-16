import * as React from 'react';
import { Typography } from '@material-ui/core';
import { StatusInfo } from '../../../src/theme/selfkey-dark-theme';

const underlineStyle = {
    textDecoration: 'underline',
}

class StatusStories extends React.Component {
    state = {
        empty: ''
    };

	handleClick = () => {
		alert('Clicked!');
	};

    render() {
        return (
			<div>
				<Typography variant="h3" style={underlineStyle} gutterBottom>
					Statuses
				</Typography>
				<StatusInfo status="Documents Required" onClick={this.handleClick} />
				<br/><br/>
				<StatusInfo status="Documents Submitted" />
				<br/><br/>
				<StatusInfo status="Denied" />
				<br/><br/>
				<StatusInfo />

			</div>
		)
	}
}

export default StatusStories;