import * as React from 'react';
import * as Datetime from 'react-datetime';
import './datepicker.css';

class KeyPicker extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Datetime 
                    inputProps={{ placeholder: '19/12/2018 11:23 AM' }}
                    closeOnSelect={true}
                />
            </React.Fragment>
        )
    }
}

export default KeyPicker;
