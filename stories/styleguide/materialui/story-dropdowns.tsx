import * as React from "react";
import { 
    FormControl, 
    MenuItem,
    Select,
    Input,
} from "@material-ui/core";
import { KeyboardArrowDown } from '@material-ui/icons';

class DropdownStories extends React.Component {
    state = {
        country: '',
    };
    
    handleChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    render() {
        return (
            <form autoComplete="off">
                <FormControl variant="filled">
                    <Select
                        value={ this.state.country }
                        onChange={ this.handleChange }
                        displayEmpty
                        name="country"
                        disableUnderline
                        IconComponent={ KeyboardArrowDown }
                        input={ 
                            <Input disableUnderline/> 
                        }
                    >
                        <MenuItem value="">
                            <em>Choose...</em>
                        </MenuItem>
                        {['Andorra', 'Malta', 'Russia', 'Spain', 'Uruguay', 'Uganda', 'Vatican', 'Venezuela', 'Zimbabwe'].map(item => (
                            <MenuItem key={ item } value={ item }>
                                { item }
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </form>
        );
    }
}

export default DropdownStories;
