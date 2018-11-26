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
export * from '../typography/materialui/typography-materialui';
export * from '../lists/lists-materialui';
export * from '../forms/inputs';
// export * from '../forms/checkboxes';
export * from '../buttons/buttons';

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
      },
      MuiListItem: {
        root: {
          marginBottom: '10px',
          paddingBottom: '0',
          paddingTop: '0',
        },
        selected: {
          backgroundColor: primary,
        }
      },
      MuiListItemText: {
        root: {
          fontSize: '18px',
        }
      },
      MuiSvgIcon: {
        root: {
          marginRight: '13px',
        }
      },
      MuiCheckbox: {
        root: {
          color: grey,
        },
        checked: {
          color: 'green'
        }
      },
      MuiSelect: {
        root: {
          backgroundColor: baseDark,
          borderRadius: '4px',
        }
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
          fontSize: '14px',
          lineHeight: '21px',
        },
      },
      MuiFormControl: {
        root: {
          minWidth: '200px',
        },
      },
      MuiFormLabel: {
        root: {
          fontSize: '14px',
          lineHeight: '21px',
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
