import * as React from "react";
import { StyleSheet, css } from 'aphrodite';
import * as Datetime from 'react-datetime';

const style = StyleSheet.create({
    rdt: {
		fontFamily: 'Lato, arial, sans-serif'
	},
	
	rdtOpen: {
		display: 'block',
		position: 'absolute'
	},
	
	rdtPicker: {
		display: 'block',
		position: 'absolute'
	},

	formControl: {
		backgroundColor: '#1E262E',
		borderRadius: '4px',
		border: '1px solid #384656',
		color: '#93B0C1',
		fontSize: '14px',
		height: '44px',
		lineHeight: '21px',
		outline: 'none',
		paddingLeft: '16px',
		paddingRight: '16px',
		':focus': {
			border: '1px solid #00C0D9',
			boxShadow: '0 0 3px 1px #00C0D9'
		},
		':placeholder': {
			color: '#404B55'	
		}
	},

	rdtSwitch: {
		color: '#93B0C1',
		':hover': {
			color: 'white'
		}
	},

	dow: {
		color: '#93B0C1',
		fontWeight: 600,
		paddingBottom: '10px',
		paddingTop: '25px',
	},

	rdtTimeToggle: {
		':hover': {
			color: 'white'
		}
	},

	rdtNext: {
    	color: '#697C95',
		width: '40px',
		':hover': {
			color: 'white'
		},
		'& span': {
			fontSize: '2.2em',
			verticalAlign: 'sub'
		}
	},

	rdtPrev: {
    	color: '#697C95',
		width: '40px',
		':hover': {
			color: 'white'
		},
		'& span': {
			fontSize: '2.2em',
			verticalAlign: 'sub'
		}
	},

	tbody: {
		fontSize: '14px',
		fontWeight: 600
	},

	thead: {
		'& tr:first-child::after': {
			borderBottom: '1px solid #313D49',
			content: '',
			left: 0,
			position: 'absolute',
			top: '60px',
			width: '100%'
		},
		'& tr:first-child th': {
			cursor: 'pointer',
			paddingBottom: '10px',
			paddingTop: 0
		},
		'& tr:nth-child(2)': {
			fontSize: '14px',
    		textTransform: 'uppercase'
		}
	},

	tfoot: {
		'& td': {
			color: '#93B0C1',
			cursor: 'pointer',
			fontSize: '12px',
			paddingTop: '26px',
			textAlign: 'center'
		},
		':before': {
			borderTop: '1px solid #313D49',
			content: '',
			left: 0,
			marginTop: '10px',
			position: 'absolute',
			width: '100%'
		}
	},

	rdtDay: {
		cursor: 'pointer',
		fontWeight: 600,
		padding: '8px 10px',
		textAlign: 'center',
		':hover': {
			backgroundColor: '#00C0D9',
			borderRadius: '3px'
		}
	},

	rdtMonth: {
		cursor: 'pointer',
		fontWeight: 600,
		padding: '8px 10px',
		textAlign: 'center',
		':hover': {
			backgroundColor: '#00C0D9',
			borderRadius: '3px'
		}
	},

	rdtYear: {
		cursor: 'pointer',
		fontWeight: 600,
		padding: '8px 10px',
		textAlign: 'center',
		':hover': {
			backgroundColor: '#00C0D9',
			borderRadius: '3px'
		}
	},

	rdtTime: {
		cursor: 'pointer',
		fontWeight: 600,
		textAlign: 'center',
		backgroundColor: '#1E262E',
		borderRadius: '3px',
		border: '1px solid #313D49',
		minHeight: '326px',
		minWidth: '273px',
		padding: '5px 25px 15px 25px',
	},

});


export const KeyPicker = (props:any) => <Datetime  className={css(style.rdtPicker, style.rdt, style.rdtOpen, style.formControl)} {...props}/>;
 
export default KeyPicker;
