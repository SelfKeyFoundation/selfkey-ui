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
} from '../colors';
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
export { 
  DefaultBullet, 
  GreenTick, 
  CheckedIcon,
  CheckedIcon2,
} from '../lists/lists-materialui';
export {
  NormalInput,
} from '../forms/inputs';

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
          fontSize: '16px',
          lineHeight: '24px',
        },
      },
      MuiListItem: {
        root: {
          marginBottom: '10px',
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
      MuiInput: {
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
