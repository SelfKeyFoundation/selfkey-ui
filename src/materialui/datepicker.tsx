import * as React from 'react';
import * as Datetime from 'react-datetime';
import './test.css';

class KeyPicker extends React.Component {
    render() {
        return (
            <div>
                <Datetime 
                    inputProps={{ placeholder: '18/12/2018' }}
                    open={false}
                />
            </div>
        )
    }
}

export default KeyPicker;
