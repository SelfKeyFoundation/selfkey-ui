import * as React from 'react';
import { Typography } from '@material-ui/core';
import { StatusInfo } from '../../../src/theme/selfkey-dark-theme';

const underlineStyle = {
    textDecoration: 'underline',
}

class StatusStories extends React.Component {
    state = {
		empty: '',
		tooltip: 'Test Tooltip message'
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
				<StatusInfo status={9} onClick={this.handleClick} handleRefresh={this.handleRefresh} tooltip={this.state.tooltip} />
				<br/><br/>
				<StatusInfo handleRefresh={this.handleRefresh} tooltip={this.state.tooltip} />
				<br/><br/>
				<StatusInfo status={3} handleRefresh={this.handleRefresh} tooltip={this.state.tooltip} />
				<br/><br/>
				<StatusInfo status={2} handleRefresh={this.handleRefresh} tooltip={this.state.tooltip} />

			</div>
		)
	}
}

export default StatusStories;