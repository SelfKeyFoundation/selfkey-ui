import * as React from "react";
import { 
    FormControl, 
    MenuItem,
} from "@material-ui/core";
import { KeyboardArrowDown } from '@material-ui/icons';
import { 
    DropdownSelect, 
    DropdownInputField,
} from "./inputs";

class KeyDropdown extends React.Component {
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
                    <DropdownSelect
                        value={ this.state.country }
                        onChange={ this.handleChange }
                        displayEmpty
                        name="country"
                        disableUnderline={ true }
                        IconComponent={ KeyboardArrowDown }
                        input={ 
                            <DropdownInputField id="filled-age-simple" disableUnderline={ true }/> 
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
                    </DropdownSelect>
                </FormControl>
            </form>
        );
    }
}

export default KeyDropdown;
