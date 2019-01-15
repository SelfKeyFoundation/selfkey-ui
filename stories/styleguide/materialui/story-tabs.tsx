import * as React from 'react';
import { Typography, Tabs, Tab } from '@material-ui/core';

const underlineStyle = {
    textDecoration: 'underline',
}

class TabStories extends React.Component {
    state = {
        value: 0
    };

    handleChange = (event: any, value: any) => {
        this.setState({ value });
    };

    render() {
        return (
            <div>
                <Typography variant="h3" style={underlineStyle} gutterBottom>
                    Tabs
                </Typography>
        
                <Tabs value={this.state.value} onChange={this.handleChange}>
                    <Tab label="First tab" />
                    <Tab label="Second" />
                    <Tab label="Third tab" />
                </Tabs>
                <br/><br/>
            </div>
        )
    }
}

export default TabStories;
