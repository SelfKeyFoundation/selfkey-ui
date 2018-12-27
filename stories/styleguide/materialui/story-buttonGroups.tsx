import * as React from 'react';
import { 
    ToggleBtnGroup, 
    ToggleBtn 
} from '../../../src/materialui/buttons';
import { DefinitionDescription } from '../../../src/materialui/typography';
import StructureIcon from '../../../src/icons/structure';
import ListIcon from '../../../src/icons/list';

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
                    <DefinitionDescription>First</DefinitionDescription>
                </ToggleBtn>
                <ToggleBtn value="second">
                    <DefinitionDescription>second</DefinitionDescription>
                </ToggleBtn>
                <ToggleBtn value="third">
                    <DefinitionDescription>third</DefinitionDescription>
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
