import * as React from 'react';
import { 
    ToggleBtnGroup, 
    ToggleBtn 
} from '../../../src/materialui/buttons';
import StructureIcon from '../../../src/icons/structure';
import ListIcon from '../../../src/icons/list';
import { Typography } from '@material-ui/core';

class ToggleButtonGroupStory extends React.Component {
    state = {
        value: "left"
    };

    handleChange = (event: any, value: any) => this.setState({ value });

    render() {
        const { value } = this.state;

        return (
            <ToggleBtnGroup 
                exclusive
                value={value}
                onChange={this.handleChange}
            >
                <ToggleBtn value="first">
                    <Typography variant="h5" gutterBottom>First</Typography>
                </ToggleBtn>
                <ToggleBtn value="second">
                    <Typography variant="h5" gutterBottom>second</Typography>
                </ToggleBtn>
                <ToggleBtn value="third">
                    <Typography variant="h5" gutterBottom>third</Typography>
                </ToggleBtn>
                <ToggleBtn value="structure">
                    <StructureIcon />
                </ToggleBtn>
                <ToggleBtn value="list">
                    <ListIcon />
                </ToggleBtn>
            </ToggleBtnGroup>
        );
    }
}

export default ToggleButtonGroupStory;
