import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { Grid } from '@material-ui/core';
import StyledButton from '../common/styled-button';

export const styles: StyleSheet = {
    errorText: {
        height: '19px',
        width: '242px',
        color: '#FE4B61',
        fontFamily: 'Lato',
        fontSize: '13px',
        lineHeight: '19px'
    },

    errorColor: {
        color: '#FE4B61 !important',
        border: '2px solid #FE4B61 !important',
        backgroundColor: 'rgba(255,46,99,0.09) !important'
    },

    input: {
        boxSizing: 'border-box',
        height: '46px',
        width: '722px', 
        border: '1px solid #384656',
        borderRadius: '4px',
        backgroundColor: '#1E262E',
        color: '#a9c5d6',
        fontSize: '14px',
        boxShadow: 'inset -1px 0 0 0 rgba(0,0,0,0.24), 1px 0 0 0 rgba(118,128,147,0.2), 2px 0 2px 0 rgba(0,0,0,0.2)',
        paddingLeft: '10px',
        '&::-webkit-input-placeholder': {
            fontSize: '14px',
            color: '#93B0C1',
        }
    },

    inputError: {
        borderBottom: '2px solid #FE4B61 !important'
    },

    label: {
        color: '#93A4AF',
        fontSize: '12px',
        fontWeight: 'bold',
        lineHeight: '15px'
    }

};

export type AddressBookEditState = {
  label: string
};

export type AddressBookEditProps = {
    label: string,
    onSave: (label: string) => void,
    labelError?: string,
    onCancel: () => void,
    onLabelChange: (label: string) => void,
}

export type StyledProps = WithStyles<keyof typeof styles> & AddressBookEditProps;

export class AddressBookEditComponent extends React.Component<StyledProps, AddressBookEditState> {

  constructor(props: StyledProps) {
    super(props);
    this.state = {label: props.label};
  }

  componentDidUpdate() {
    this.state = {label: this.props.label};
  }

  handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const label = event.target.value;
    this.setState({...this.state, label});
    this.props.onLabelChange(label);
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    return this.props.onSave(this.state.label);
  }

  render() {
    const { classes, labelError, onCancel} = this.props;
    const hasLabelError = (labelError !== '' && labelError !== undefined)
    const labelInputClass = `${classes.input} ${hasLabelError ? classes.errorColor : ''}`;
    return (
        <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <Grid container direction='column' spacing={32}>
                <Grid item>
                    <Grid container direction='column' spacing={8}>
                        <Grid item>
                            <label className={classes.label}>LABEL</label>
                        </Grid>
                        <Grid item>
                            <input type='text' onChange={this.handleLabelChange} value={this.state.label} className={labelInputClass} placeholder="Address label" />
                            {hasLabelError &&
                                <span className={classes.errorText}>{labelError}</span>
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction='row' spacing={24}>
                        <Grid item>
                            <StyledButton variant="contained" size="medium" type="submit" disabled={(!this.state.label || hasLabelError)}>
                                Save
                            </StyledButton>
                        </Grid>
                        <Grid item>
                            <StyledButton variant="outlined" size="medium" onClick={onCancel}>
                                Cancel
                            </StyledButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
  }
}

export const AddressBookEdit = injectSheet(styles)(AddressBookEditComponent);

export default AddressBookEdit;
