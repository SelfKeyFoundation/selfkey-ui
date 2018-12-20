import * as React from 'react';
import * as Datetime from 'react-datetime';
import './datepicker.css';

class KeyPicker extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Datetime 
                    dateFormat="DD MMM YYYY"
                    inputProps={{ placeholder: '19 Dec 2018 11:23 AM' }}
                    closeOnSelect={true}
                />
            </React.Fragment>
        )
    }
}

export default KeyPicker;
