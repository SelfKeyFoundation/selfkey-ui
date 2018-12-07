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
export * from '../icons/info';
export * from '../icons/incorporations';

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
          marginTop: '5px',
        },
      },
      MuiInputAdornment: {
        positionEnd: {
          marginLeft: '151px',
          position: 'absolute',
        }
      },
      MuiSvgIcon: {
        root: {
          color: grey,
          // '&:hover': {
          //   color: primary,
          // },
          '&:focus': {
            color: primary,
          },
          '&:checked': {
            color: primary,
          },
        },
      },
      MuiCheckbox: {
        root: {
          color: grey,
        },
        checked: {
          backgroundColor: primary,
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
          border: `1px solid ${primary}`,
          boxShadow: `0 0 3px 1px ${primary}`,
          marginLeft: '-17px',
          marginTop: '-6px',
          maxHeight: '131px',
          overflow: 'scroll',
          width: '200px',
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
          // padding: '0',
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
          color: warning,
        },
      },
      MuiTooltip: {
        tooltip: {
          backgroundColor: '#1F2830',
          border: '1px solid #43505B',
          borderRadius: '3px',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&:focus': {
            backgroundColor: 'transparent',
          },
        },
      },
      MuiTabs: {
        root: {
          borderBottom: `1px solid ${grey}`,
        },
        indicator: {
          backgroundColor: primary,
          height: '4px',
        },
      },
      MuiTab: {
        root: {
          textTransform: 'initial',
          '&:hover': {
            borderBottom: `4px solid ${grey}`,
            boxSizing: 'border-box',
            color: white,
          },
        },
      },
      MuiExpansionPanel: {
        root: {
          backgroundColor: base,
          borderRadius: '4px',
          boxShadow: 'none',
          position: 'initial',
        },
      },
      MuiExpansionPanelSummary: {
        content: {
          alignItems: 'baseline',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: '30px',
        },
        expandIcon: {
          left: '18px',
          padding: '0',
          right: 'initial',
          transform: 'translateY(-50%) rotate(90deg)',
          transformOrigin: '50%',
        },
      },
      MuiDivider: {
        root: {
          backgroundColor: '#303C49',
          height: '1px',
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
