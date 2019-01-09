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
export * from '../colors';
export * from '../materialui/colorPresentation';
export * from '../materialui/datepicker';
export * from '../materialui/inputs';
export * from '../materialui/lists';
export * from '../materialui/modalElements';
export * from '../materialui/pagination';
export * from '../materialui/slider';
export * from '../materialui/tables';
export * from '../materialui/typography';
export * from '../icons/corporate';
export * from '../icons/incorporations';
export * from '../icons/info';
export * from '../icons/list';
export * from '../icons/person';
export * from '../icons/selfkeyLogo';
export * from '../icons/structure';

export { MuiEditIcon } from '../icons/muiedit';
export { MuiDeleteIcon } from '../icons/muidelete';

const theme = createMuiTheme({
    palette: {
      primary: { 
        main: primary,
        light: primaryTint,
      }, 
      secondary: { 
        main: typography,
      },
      error: { 
        main: error, 
      },
      text: {
        primary: white,
        secondary: grey,
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
        h4: {
          fontSize: '18px',
          fontWeight: 600,
          lineHeight: '26px',
        },
        h5: {
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: '20px',
          zIndex: 1,
        },
        h6: {
          fontSize: '15px',
          lineHeight: '18px',
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
          fontSize: '13px',
		      lineHeight: '19px',
        },
        caption: {
          color: warning,
          fontSize: '16px',
		      lineHeight: '24px',
        },
        overline: {
          color: typography,
          fontSize: '12px',
          fontWeight: 600,
          lineHeight: '15px',
          textTransform: 'uppercase',
          whiteSpace: 'normal',
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
          '&$selected': {
            backgroundColor: primary,
            '&:hover': {
              backgroundColor: primary,
            },
          },
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
        root: {
          backgroundColor: baseDark,
          borderRadius: '4px',
          border: '1px solid #384656',
          boxSizing: 'border-box',
          color: typography,
          fontSize: '14px',
          height: '44px',
          lineHeight: '21px',
          paddingLeft: '16px',
          '&$focused': {
              "&$focused:not($error):not($disabled)": {
                  border: `1px solid ${primary}`,
                  boxShadow: `0 0 3px 1px ${primary}`,
              },
          },
          '&$disabled': {
              color: '#93B0C1',
              opacity: 0.5,
          },
        },
        formControl: {
          marginTop: 0,
          label: {
            marginTop: '16px',
          },
        },
        underline: {
          '&:hover:not($disabled):not($focused):not($error):before': {
            borderBottom: '0',
          },
          '&:hover:not($disabled):not($focused):not($error):after': {
            borderBottom: '0',
          },
          '&:after': {
            borderBottom: '0',
          },
          '&:before': {
            borderBottom: '0',
          },
        },
        error: {
            backgroundColor: 'rgba(255, 46, 99, 0.09)',
            border: `1px solid ${error}`,
            color: error,
            marginBottom: '6px',
        },
      },
      MuiInputBase: {
        inputType: {
          height: '22px',
          textTransform: 'uppercase',
        },
        multiline: {
          overflow: 'scroll',
        },
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
            borderRadius: '3px',
            color: grey,
            height: '18px',
            marginRight: '10px',
            padding: 0,
            width: '18px',
            '&$checked:not($disabled):not($colorPrimary)': {
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
            '&$disabled:not($checked)': {
              color: 'transparent !important',
            },
            '&$disabled': {
              backgroundColor: '#222B34',
              border: '1px solid #2F3B48',
              borderRadius: '3px',
              color: 'transparent',
              height: '18px',
              padding: 0,
              width: '18px',
            },
            '&:hover': {
              backgroundColor: '#384656',
            },
        },
        colorSecondary: {
            backgroundColor: baseDark,
            border: `1px solid ${grey}`,
            borderRadius: '3px',
            color: 'transparent',
            height: '18px',
            padding: 0,
            width: '18px',
        },
        colorPrimary: {
            backgroundColor: 'rgba(255, 46, 99, 0.09)',
            border: `1px solid ${error}`,
            borderRadius: '3px',
            color: 'transparent',
            height: '18px',
            padding: 0,
            width: '18px',
            '&:hover': {
              backgroundColor: 'rgba(255, 46, 99, 0.05)',
            },
        },
      },
      MuiRadio: {
        root: {
          borderRadius: '50%',
          boxSizing: 'border-box',
          color: grey,
          height: '18px',
          marginRight: '10px',
          padding: 0,
          width: '18px',
          '&$checked:not($disabled):not($colorPrimary)': {
            backgroundColor: `#1e262d !important`,
            border: `1px solid ${primary} !important`,
            color: `${primary} !important`,
          },
          '&$checked:not($disabled)': {
            backgroundColor: `#392E3C !important`,
            border: `1px solid ${error} !important`,
            color: `${error} !important`,
          },
          '&$checked': {
            backgroundColor: `${baseDark} !important`,
            border: `1px solid ${baseDark} !important`,
            color: `#35424e !important`,
          },
          '&$disabled:not($checked)': {
            color: 'transparent !important',
          },
          '&$disabled': {
            backgroundColor: '#222B34',
            border: '1px solid #2F3B48',
            borderRadius: '50%',
            color: 'transparent',
            height: '18px',
            padding: 0,
            width: '18px',
          },
          '&:hover': {
            backgroundColor: '#384656',
          },
        },
        colorSecondary: {
          backgroundColor: baseDark,
          border: `1px solid ${grey}`,
          borderRadius: '50%',
          color: 'transparent',
          height: '18px',
          padding: 0,
          width: '18px',
        },
        colorPrimary: {
          backgroundColor: 'rgba(255, 46, 99, 0.09)',
          border: `1px solid ${error}`,
          borderRadius: '50%',
          color: 'transparent',
          height: '18px',
          padding: 0,
          width: '18px',
          '&:hover': {
            backgroundColor: 'rgba(255, 46, 99, 0.05)',
          },
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
      MuiFormGroup: {
        root: {
          backgroundColor: base,
          marginBottom: '15px',
        },
      },
      MuiFormControl: {
        root: {
          minWidth: '200px',
        },
      },
      MuiFormControlLabel: {
        root: {
          marginLeft: 0,
        },
        label: {
          color: typography,
        },
      },
      MuiFormLabel: {
        root: {
          display: 'block',
          fontSize: '14px',
          lineHeight: '21px',
          '$&focused': {
            display: 'none',
          },
        },
      },
      MuiButton: {
        root: {
          borderRadius: '4px',
          boxSizing: 'border-box',
          color: white,
          fontSize: '13px',
          fontWeight: 600,
          height: '36px',
          minWidth: '164px',
          '&$disabled': {
            color: white,
            opacity: 0.5,
          },
        },
        contained: {
          background: 'linear-gradient(to bottom, #0abbd0 0%, #09a8ba 100%)',
          border: '1px solid #0FB8D0',
          color: white,
          '&:hover': {
            background: 'linear-gradient(to bottom, #0AA9D0 0%, #099BBA 100%)',
          },
          '&:focus': {
              background: 'linear-gradient(to top right, #0A99D0 10%, #097CBA 70%);',
          },
          '&$disabled': {
            color: white,
          },
        },
        outlined: {
          background: 'transparent',
          border: '2px solid #1CA9BA',
          color: primary,
          '&:hover': {
            background: '#313D49',
            borderColor: '#23E6FE',
          },
          '&:focus': {
            background: '#1E262E',
          },
          '&$disabled': {
            color: primary,
          },
        },
        outlinedSecondary: {
          background: 'transparent',
          border: `1px solid ${typography}`,
          color: typography,
          '&:hover': {
            backgroundColor: '#313D49',
            border: `1px solid ${typography}`,
          },
          '&:focus': {
            background: baseDark,
          },
          '&$disabled': {
            border: `1px solid ${typography}`,
            color: typography,
          },
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
      // @ts-ignore
      MuiToggleButtonGroup: {
        root: {
          boxShadow: 'none',
        },
        selected: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }
      },
      MuiToggleButton: {
        root: {
          backgroundColor: '#293743',
          border: '1px solid #1D505F',
          boxSizing: 'border-box',
          fill: typography,
          height: '44px',
          textTransform: 'initial',
          '&:hover': {
              border: `1px solid ${primaryTint}`,
          },
        },
        selected: {
          background: '#313D49',
          border: `1px solid ${primaryTint}`,
          fill: primary,
          color: primary,
        },
        disabled: {
          opacity: 0.5,
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

