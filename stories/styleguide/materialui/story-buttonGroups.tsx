import * as React from 'react';
import StructureIcon from '../../../src/icons/structure';
import ListIcon from '../../../src/icons/list';
import { Typography } from '@material-ui/core';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';

class ToggleButtonGroupStory extends React.Component {
    state = {
        value: "left"
    };

    handleChange = (event: any, value: any) => this.setState({ value });

    render() {
        const { value } = this.state;

        return (
            <ToggleButtonGroup 
                exclusive
                value={value}
                onChange={this.handleChange}
            >
                <ToggleButton value="first">
                    <Typography variant="h5">First</Typography>
                </ToggleButton>
                <ToggleButton value="second">
                    <Typography variant="h5">second</Typography>
                </ToggleButton>
                <ToggleButton value="third">
                    <Typography variant="h5">third</Typography>
                </ToggleButton>
                <ToggleButton value="structure">
                    <StructureIcon />
                </ToggleButton>
                <ToggleButton value="list">
                    <ListIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        );
    }
}

export default ToggleButtonGroupStory;
