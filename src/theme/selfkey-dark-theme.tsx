import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#00C0D9' }, 
      secondary: { main: '#697C95' },
      text: {
        primary: "#FFFFFF",
        secondary: "rgba(0, 0, 0, 0.54)",
        disabled: "rgba(0, 0, 0, 0.38)",
        hint: "rgba(0, 0, 0, 0.38)"
      }
    },
    typography: {
        fontFamily: [
          'Lato',
          'arial',
          'sans-serif'
        ].join(','),
        fontSize: 16,
        useNextVariants: true
    },
    overrides: {
      MuiCard: { 
        root: { 
          backgroundColor: '#262F39',
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
