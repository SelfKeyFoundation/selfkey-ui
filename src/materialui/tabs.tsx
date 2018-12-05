import * as React from 'react';
import { Tabs, Tab } from "@material-ui/core";

class InteractiveTabs extends React.Component {
    state = {
        value: 0
    };

    handleChange = (event: any, value: any) => {
        this.setState({ value });
    };

    render() {
        return (
            <Tabs value={this.state.value} onChange={this.handleChange}>
                <Tab label="First tab" />
                <Tab label="Second" />
                <Tab label="Third tab" />
            </Tabs>
        );
    }
}

export default InteractiveTabs;
