import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';
import * as Datetime from 'react-datetime';

const styles: StyleSheet = {
    datepickerWrap: {
        fontFamily: 'Lato, arial, sans-serif',

        '& .rdt': {
			'& input::placeholder': {
				color: 'rgba(147, 176, 193, 0.42)',
			},
		},

        '& .rdtOpen': {
            display: 'table',
            position: 'relative',
    
            '& .rdtPicker': {
                display: 'block',
                position: 'absolute'
            },
        },

        '& .rdtPicker': {
            backgroundColor: '#1E262E',
            border: '1px solid #313D49',
            borderRadius: '3px',
            color: 'white',
            cursor: 'pointer',
            display: 'none',
            fontWeight: 600,
            minHeight: '325px',
            minWidth: '263px',
            padding: '5px 25px 15px 25px',
            textAlign: 'center',
    
            '& th ': {
                borderBottom: 'none',
            }
        },    

        '& .form-control': {
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
    
            '&:focus': {
                border: '1px solid #00C0D9',
                boxShadow: '0 0 3px 1px #00C0D9'
            },
    
            '&:placeholder': {
                color: '#404B55'
            }
        },

        '& .rdtSwitch': {
            color: '#93B0C1',

            '&:hover': {
                color: 'white',
            },
        },
    
        '& .dow': {
            color: '#93B0C1',
            fontWeight: 600,
            paddingBottom: '10px',
            paddingTop: '25px',
        },
    
        '& .rdtTimeToggle:hover': {
            color: 'white',
        },

        '& .rdtNext': {
            color: '#697C95',
            verticalAlign: 'sub',
            userSelect: 'none',
            width: '40px',

            '&:hover': {
                color: 'white',
            },

            '& span': {
                fontSize: '2.2em',
                verticalAlign: 'sub',
            },
        },
    
        '& .rdtPrev': {
            color: '#697C95',
            verticalAlign: 'sub',
            userSelect: 'none',
            width: '40px',

            '&:hover': {
                color: 'white',
            },

            '& span': {
                fontSize: '2.2em',
                verticalAlign: 'sub',
            },
        },
    
        '& tbody': {
            fontSize: '14px',
            fontWeight: 600,
        },
    
        '& thead': {
            '& tr:first-child': {
                '&:after': {
                    borderBottom: '1px solid #313D49',
                    content: '""',
                    left: 0,
                    position: 'absolute',
                    top: '60px',
                    width: '100%',
                },

                '& th': {
                    cursor: 'pointer',
                    paddingBottom: '10px',
                    paddingTop: 0,
                },
            },

            '& tr:nth-child(2)': {
                fontSize: '14px',
                textTransform: 'uppercase',
            },
        },

        '& tfoot': {
            '& td': {
                color: '#93B0C1',
                cursor: 'pointer',
                fontSize: '12px',
                paddingTop: '30px',
                textAlign: 'center'
            },

            '&:before': {
                borderTop: '1px solid #313D49',
                content: '""',
                left: 0,
                marginTop: '10px',
                position: 'absolute',
                width: '100%'
            },
        },
    
        '& .rdtDay': {
            color: 'white',
            cursor: 'pointer',
            fontWeight: 600,
            padding: '8px 10px',
            textAlign: 'center',

            '&:hover': {
                backgroundColor: '#00C0D9 !important',
                borderRadius: '3px',
            },
        },

        '& .rdtNew': {
            color: '#404B55',
        },

        '& .rdtOld': {
            color: '#404B55',
        },
    
        '& .rdtMonth': {
            cursor: 'pointer',
            fontWeight: 600,
            padding: '8px 10px',
            textAlign: 'center',

            '&:hover': {
                backgroundColor: '#00C0D9',
                borderRadius: '3px'
            },
        },

        '& .rdtMonths': {
            '& table': {
                width: '100%',
            },
            '& table:nth-child(2)': {
                display: 'flex',

                '& tbody': {
                    marginTop: '65px',
                    textAlign: 'center',
                    width: 'inherit',

                    '& tr': {
                        display: 'flex',
                        justifyContent: 'space-around',
                        margin: '10px 0',
                    },
                },
            },
        },
    
        '& .rdtYear': {
            cursor: 'pointer',
            fontWeight: 600,
            padding: '8px 10px',
            textAlign: 'center',

            '&:hover': {
                backgroundColor: '#00C0D9',
                borderRadius: '3px',
            },
        },

        '& .rdtYears': {
            '& table': {
                width: '100%',
            },

            '& table:nth-child(2)': {
                display: 'flex',

                '& tbody': {
                    marginTop: '65px',
                    textAlign: 'center',
                    width: 'inherit',

                    '& tr': {
                        display: 'flex',
                        justifyContent: 'space-around',
                        margin: '10px 0',
                    },
                },
            },
        },

        '& .rdtTime': {
            '& table': {
                width: '100%',

                '& tbody': {
                    display: 'inherit',
                    marginTop: '85px',
                    textAlign: 'center',
                    width: 'inherit',
                },
            },

            '& .rdtSwitch': {
                fontWeight: '400',
                paddingBottom: '18px',
                paddingTop: '14px',
            },
        },
    
        '& .rdtPicker td.rdtActive': {
            backgroundColor: '#00C0D9',
            borderRadius: '3px',
        },
    
        '& .rdtPicker td.rdtToday:before': {
            display: 'none',
        },

        '& .rdtCounters': {
            display: 'flex',
            justifyContent: 'space-around',
        },

        '& .rdtCounter': {
            '&:first-child:before': {
                color: '#93B0C1',
                content: '"Hours"',
                marginLeft: '-14px',
                marginTop: '-35px',
                position: 'absolute',
            },

            '&:nth-child(3):before': {
                color: '#93B0C1',
                content: '"Minutes"',
                marginLeft: '-21px',
                marginTop: '-35px',
                position: 'absolute',
            },
        },

        '& .rdtCount': {
            border: '1px solid #384656',
            borderRadius: '4px',
            color: '#93B0C1',
            fontWeight: 'normal',
            margin: '15px 0',
            padding: '15px 17px',
            width: '25px',
        },

        '& .rdtBtn': {
            color: '#697C95',
            userSelect: 'none',

            '&:hover': {
                color: 'white',
            },
        },

        '& .rdtCounterSeparator': {
            display: 'none',
        },
    },
};

  

export const KeyPicker = injectSheet(styles)(({classes}) => (
    <div className={classes.datepickerWrap} >
        <Datetime 
            dateFormat="DD MMM YYYY"
            inputProps={{ placeholder: '19 Dec 2018 11:23 AM' }}
            closeOnSelect={true}
        />
    </div>
));

export default KeyPicker;