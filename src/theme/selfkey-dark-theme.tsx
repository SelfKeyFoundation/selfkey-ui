import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
      primary: { 
        main: '#00C0D9',
        light: '#23E6FE',
      }, 
      secondary: { main: '#697C95' },
      error: { main: '#FE4B61' },
      text: {
        primary: "#FFFFFF",
        secondary: "#93B0C1",
        disabled: "#697C95",
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
          backgroundColor: '#262F39',
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
          fontSize: '16px',
          lineHeight: '24px',
        },
        body1: {
          fontSize: '18px',
          lineHeight: '30px',
        },
        body2: {
          fontSize: '16px',
          lineHeight: '24px',
        },
        subtitle1: {
          fontSize: '14px',
          lineHeight: '17px',
        },
        subtitle2: {
          fontSize: '12px',
          lineHeight: '15px',
        },
        caption: {
          fontSize: '13px',
          lineHeight: '19px',
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
