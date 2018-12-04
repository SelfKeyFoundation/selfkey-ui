import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import {
  primary,
  typography,
  error,
  primaryTint,
  warning,
  white,
  grey,
  base,
  baseDark,
} from '../colors';
export * from '../materialui/typography';
export * from '../materialui/lists';
export * from '../materialui/inputs';
export * from '../materialui/checkboxes';
export * from '../materialui/buttons';
export * from '../materialui/colorPresentation';
export * from '../materialui/tables';
export * from '../icons/selfkeyLogo';
export * from '../icons/corporate';
export * from '../icons/person';

export { MuiEditIcon } from '../icons/muiedit';

const theme = createMuiTheme({
    palette: {
      primary: { 
        main: primary,
        light: primaryTint,
      }, 
      secondary: { 
        main: warning,
      },
      error: { 
        main: error, 
      },
      text: {
        primary: white,
        secondary: typography,
        disabled: grey,
        hint: "rgba(0, 0, 0, 0.38)",
      }
    },
    typography: {
        fontFamily: [
          'Lato',
          'arial',
          'sans-serif'
        ].join(','),
        fontSize: 16,
        useNextVariants: true,
    },
    overrides: {
      MuiCard: { 
        root: { 
          backgroundColor: base,
        },
      },
      MuiTypography: {
        root: {
          color: '#BE1E1E',
        },
        h1: {
          fontSize: '24px',
          fontWeight: 400,
          lineHeight: '30px',
        },
        h2: {
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: '26px',
        },
        h3: {
          color: typography,
          fontSize: '16px',
          lineHeight: '24px',
        },
        h5: {
          fontWeight: 600,
        },
      },
      MuiList: {
        root: {
          paddingRight: '8px!important',
        },
        padding: {
          boxSizing: 'border-box',
          paddingBottom: '4px',
          paddingLeft: '8px',
          paddingRight: '8px',
          paddingTop: '5px',
        },
      },
      MuiListItem: {
        root: {
          marginBottom: '10px',
          paddingBottom: '0',
          paddingTop: '0',
        },
        selected: {
          backgroundColor: primary,
        },
        button: {
          margin: '0',
          "&:hover": {
            backgroundColor: grey,
          },
        },
      },
      MuiListItemText: {
        root: {
          fontSize: '18px',
        },
      },
      MuiInput: {
        formControl: {
          marginTop: 0,
          label: {
            marginTop: '16px',
          },
        },
      },
      MuiInputBase: {
        inputType: {
          height: '22px',
          textTransform: 'uppercase',
        }
      },
      MuiInputLabel: {
        filled: {
        },
      },
      MuiSvgIcon: {
        root: {
          color: grey,
          marginRight: '13px',
        },
      },
      MuiCheckbox: {
        root: {
          color: grey,
        },
        checked: {
          color: 'green'
        },
        colorSecondary: {
          main: primary,
        },
      },
      MuiSelect: {
        root: {
          backgroundColor: baseDark,
          borderRadius: '4px',
        },
        selectMenu: {
          color: typography,
          fontSize: '14px',
          lineHeight: '21px',
        },
      },
      MuiMenu: {
        paper: {
          maxHeight: '131px',
          overflow: 'scroll',
        },
      },
      MuiPaper: {
        root: {
          backgroundColor: baseDark,
          border: '1px solid #384656',
          boxSizing: 'border-box',
          color: white,
          minWidth: '200px',
          top: '535px',
          left: '31px',
        },
      },
      MuiMenuItem: {
        root: {
          borderRadius: '4px',
          fontSize: '14px',
          lineHeight: '21px',
        },
      },
      MuiFormControl: {
        root: {
          minWidth: '200px',
        },
      },
      MuiFormControlLabel: {
        label: {
          color: typography,
        },
      },
      MuiFormLabel: {
        root: {
          display: 'block',
          fontSize: '14px',
          lineHeight: '21px',
        },
        focused: {
          display: 'none',
        }
      },
      MuiButton: {
        root: {
          fontSize: '13px',
          fontWeight: 600,
          height: '36px',
          minWidth: '164px',
        },
        sizeLarge: {
          fontSize: '16px',
          height: '44px',
          minWidth: '200px',
        },
        sizeSmall: {
          fontSize: '12px',
          fontWeight: 300,
          height: '26px',
          minHeight: '26px',
          minWidth: '50px',
          padding: '0 10px',
        },
      },
      MuiIconButton: {
        root: {
          padding: '7px 0 7px 10px',
        },
      },
      MuiTableRow: {
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: '#2E3945',
          },
        },
      },
      MuiTableCell: {
        root: {
          borderBottom: 0,
          padding: '0 30px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        head: {
          backgroundColor: baseDark,
          borderBottom: 0,
        },
        body: {
          height: '74px',
        },
        footer: {
          // backgroundColor: warning,
          color: warning,
        },
      },
    },
});

export const SelfkeyDarkTheme: React.SFC<{}> = ({children}) => {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
}
        
export default SelfkeyDarkTheme;
