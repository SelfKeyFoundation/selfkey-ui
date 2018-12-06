import * as React from 'react';
import { ToggleBtn, ToggleBtnGroup } from './buttons';
import { DefinitionDescription } from './typography';

class InteractiveButtonGroups extends React.Component {
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
                    <DefinitionDescription>First</DefinitionDescription>
                </ToggleBtn>
                <ToggleBtn value="second">
                    <DefinitionDescription>second</DefinitionDescription>
                </ToggleBtn>
                <ToggleBtn value="third">
                    <DefinitionDescription>third</DefinitionDescription>
                </ToggleBtn>
            </ToggleBtnGroup>
        );
    }
}

export default InteractiveButtonGroups;
