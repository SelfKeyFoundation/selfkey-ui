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

	handleRefresh = () => {
		alert('Status refreshed!');
	};

    render() {
        return (
			<div>
				<Typography variant="h3" style={underlineStyle} gutterBottom>
					Statuses
				</Typography>
				<StatusInfo status="Documents Required" onClick={this.handleClick} handleRefresh={this.handleRefresh} />
				<br/><br/>
				<StatusInfo handleRefresh={this.handleRefresh} status="Documents Submitted" />
				<br/><br/>
				<StatusInfo handleRefresh={this.handleRefresh} status="Denied" />
				<br/><br/>
				<StatusInfo handleRefresh={this.handleRefresh} />

			</div>
		)
	}
}

export default StatusStories;