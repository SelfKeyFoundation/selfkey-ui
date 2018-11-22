import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
export { 
  ParagraphLarge,
  Paragraph,
  Definition,
  DefinitionDescription,
  ExplanatoryLarge,
  Explanatory,
  TableHeader,
  TableText,
  TableSmallText,
  TableSmallTextDisabled,
  FormPlaceholder,
  FormLabel,
  ErrorMessage, 
  WarningMessage,
} from '../typography/materialui/typography-materialui';
export { DefaultBullet, GreenTick } from '../lists/lists-materialui';

const theme = createMuiTheme({
    palette: {
      primary: { 
        main: '#00C0D9',
        light: '#23E6FE',
      }, 
      secondary: { 
        main: '#E98548' 
      },
      error: { 
        main: '#FE4B61' 
      },
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
      },
      MuiListItem: {
        root: {
          paddingBottom: '0',
          paddingTop: '0',
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
