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
export * from '../materialui/checkboxes';
export * from '../materialui/buttonGroups';
export * from '../materialui/buttons';
export * from '../materialui/checkboxes';
export * from '../materialui/colorPresentation';
export * from '../materialui/dropdowns';
export * from '../materialui/inputs';
export * from '../materialui/lists';
export * from '../materialui/modal';
export * from '../materialui/pagination';
export * from '../materialui/sliders';
export * from '../materialui/tables';
export * from '../materialui/tabs';
export * from '../materialui/typography';
export * from '../icons/corporate';
export * from '../icons/incorporations';
export * from '../icons/info';
export * from '../icons/person';
export * from '../icons/selfkeyLogo';

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
          color: 'inherit',
          // fill: 'transparent',
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
          '&$checked:not($disabled):not($colorSecondary)': {
            backgroundColor: `${primary} !important`,
            border: `1px solid ${primary} !important`,
            color: `${baseDark} !important`,
          },
          '&$checked:not($disabled)': {
            backgroundColor: `${error} !important`,
            border: `1px solid ${error} !important`,
            color: `#392E3C !important`,
          },
          '&$checked': {
            backgroundColor: `#384656 !important`,
            border: `1px solid #2F3B48 !important`,
            color: `${baseDark} !important`,
          },
          '&$disabled': {
            color: 'transparent',
          },
        },
        colorPrimary: {
          backgroundColor: baseDark,
          border: `1px solid ${grey}`,
          borderRadius: '3px',
          color: 'transparent',
          height: '18px',
          padding: 0,
          width: '18px',
        },
        colorSecondary: {
          backgroundColor: 'rgba(255, 46, 99, 0.09)',
          border: `1px solid ${error}`,
          borderRadius: '3px',
          color: 'transparent',
          height: '18px',
          padding: 0,
          width: '18px',
        },
        disabled: {
          backgroundColor: '#222B34',
          border: '1px solid #2F3B48',
          borderRadius: '3px',
          color: 'transparent',
          height: '18px',
          padding: 0,
          width: '18px',
        },
      },
      MuiRadio: {
        root: {
          boxSizing: 'border-box',
          color: grey,
          '&$checked:not($disabled):not($colorSecondary)': {
            backgroundColor: `#1e262d !important`,
            border: `1px solid ${primary} !important`,
            // boxSizing: 'border-box',
            color: `${primary} !important`,
          },
          '&$checked:not($disabled)': {
            backgroundColor: `#392E3C !important`,
            border: `1px solid ${error} !important`,
            // boxSizing: 'border-box',
            color: `${error} !important`,
          },
          '&$checked': {
            backgroundColor: `${baseDark} !important`,
            border: `1px solid ${baseDark} !important`,
            color: `#35424e !important`,
          },
          '&$disabled': {
            color: 'transparent',
          },
        },
        colorPrimary: {
          backgroundColor: baseDark,
          border: `1px solid ${grey}`,
          borderRadius: '50%',
          color: 'transparent',
          height: '18px',
          padding: 0,
          width: '18px',
        },
        colorSecondary: {
          backgroundColor: 'rgba(255, 46, 99, 0.09)',
          border: `1px solid ${error}`,
          borderRadius: '50%',
          color: 'transparent',
          height: '18px',
          padding: 0,
          width: '18px',
        },
        disabled: {
          backgroundColor: '#222B34',
          border: '1px solid #2F3B48',
          borderRadius: '50%',
          color: 'transparent',
          height: '18px',
          padding: 0,
          width: '18px',
        },
      },
      MuiSelect: {
        root: {
          backgroundColor: baseDark,
          borderRadius: '4px',
        },
        icon: {
          color: 'rgba(147, 176, 193, 0.5)',
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
      // MuiFormControlLabel: {
      //   label: {
      //     color: typography,
      //   },
      // },
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
          fontWeight: 400,
          height: '26px',
          minHeight: '26px',
          minWidth: '50px',
          padding: '0 10px',
        },
      },
      MuiIconButton: {
        root: {
          color: grey,
          padding: '7px 0 7px 10px',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&$disabled': {
            color: grey,
          },
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
          color: typography,
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
      MuiLinearProgress: {
        root: {
          backgroundColor: '#414F63',
          borderRadius: '10px',
          height: '4px',
          marginBottom: '15px',
          marginTop: '10px',
          width: '235px',
        },
        colorPrimary: {
          backgroundColor: '#414F63',
        },
        barColorPrimary: {
          background: 'linear-gradient(to right, #2DA1F8 0%, #08BCCD 20%)',
        },
      },
      MuiTablePagination: {
        actions: {
        },
        select: {
          backgroundColor: base,
          border: '1px solid #313D49',
          borderRadius: 0,
          paddingLeft: '12px',
          paddingRight: '30px',
        },
        selectIcon: {
          color: primary,
          right: '5px',
          top: '6px',
        },
      },
      // MuiModal: {
      //   root: {
      //     backgroundColor: white,
      //     border: '1px solid #303C49',
      //     borderRadius: '4px',
      //     boxSizing: 'border-box',
      //     margin: 'auto',
      //     width: '780px',
      //   },
      // },
      MuiBackdrop: {
        root: {
          backgroundColor: base,
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

