"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var colors_1 = require("../colors");
__export(require("../colors"));
__export(require("../materialui/colorPresentation"));
__export(require("../materialui/datepicker"));
__export(require("../materialui/inputs"));
__export(require("../materialui/lists"));
__export(require("../materialui/modalElements"));
__export(require("../materialui/pagination"));
__export(require("../materialui/tables"));
__export(require("../materialui/typography"));
__export(require("../icons/corporate"));
__export(require("../icons/incorporations"));
__export(require("../icons/info"));
__export(require("../icons/list"));
__export(require("../icons/person"));
__export(require("../icons/selfkeyLogo"));
__export(require("../icons/structure"));
__export(require("../icons/file-pdf"));
__export(require("../icons/file-image"));
__export(require("../icons/book"));
__export(require("../icons/id-card"));
var muiedit_1 = require("../icons/muiedit");
exports.MuiEditIcon = muiedit_1.MuiEditIcon;
var muidelete_1 = require("../icons/muidelete");
exports.MuiDeleteIcon = muidelete_1.MuiDeleteIcon;
var theme = core_1.createMuiTheme({
    palette: {
        primary: {
            main: colors_1.primary,
            light: colors_1.primaryTint,
        },
        secondary: {
            main: colors_1.typography,
        },
        error: {
            main: colors_1.error,
        },
        text: {
            primary: colors_1.white,
            secondary: colors_1.grey,
            disabled: colors_1.grey,
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
                backgroundColor: colors_1.base,
                boxShadow: 'none',
                height: '100%',
            },
        },
        MuiCardHeader: {
            title: {
                color: colors_1.white,
                fontSize: '18px',
                fontWeight: 600,
                lineHeight: '22px',
            },
            subheader: {
                color: colors_1.white,
                fontSize: '16px',
                fontWeight: 600,
            },
        },
        MuiCardContent: {
            root: {
                height: '100%',
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
                color: colors_1.typography,
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
                color: colors_1.warning,
                fontSize: '16px',
                lineHeight: '24px',
            },
            overline: {
                color: colors_1.typography,
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
                    backgroundColor: colors_1.grey,
                    '&:hover': {
                        backgroundColor: colors_1.grey,
                    },
                },
            },
            button: {
                margin: '0',
                "&:hover": {
                    backgroundColor: '#394553',
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
                backgroundColor: colors_1.baseDark,
                borderRadius: '4px',
                border: '1px solid #384656',
                boxSizing: 'border-box',
                color: colors_1.typography,
                fontSize: '14px',
                height: '44px',
                lineHeight: '21px',
                paddingLeft: '16px',
                '&$focused': {
                    "&$focused:not($error):not($disabled)": {
                        border: "1px solid " + colors_1.primary,
                        boxShadow: "0 0 3px 1px " + colors_1.primary,
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
                border: "1px solid " + colors_1.error,
                color: colors_1.error,
                marginBottom: '6px',
            },
        },
        MuiInputBase: {
            inputType: {
                height: '22px',
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
                    color: colors_1.primary,
                },
                '&:checked': {
                    color: colors_1.primary,
                },
            },
        },
        MuiCheckbox: {
            root: {
                borderRadius: '3px',
                color: colors_1.grey,
                height: '18px',
                marginRight: '10px',
                padding: 0,
                width: '18px',
                '&$checked:not($disabled):not($colorPrimary)': {
                    backgroundColor: colors_1.primary + " !important",
                    border: "1px solid " + colors_1.primary + " !important",
                    color: colors_1.baseDark + " !important",
                },
                '&$checked:not($disabled)': {
                    backgroundColor: colors_1.error + " !important",
                    border: "1px solid " + colors_1.error + " !important",
                    color: "#392E3C !important",
                },
                '&$checked': {
                    backgroundColor: "#384656 !important",
                    border: "1px solid #2F3B48 !important",
                    color: colors_1.baseDark + " !important",
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
                backgroundColor: colors_1.baseDark,
                border: "1px solid " + colors_1.grey,
                borderRadius: '3px',
                color: 'transparent',
                height: '18px',
                padding: 0,
                width: '18px',
            },
            colorPrimary: {
                backgroundColor: 'rgba(255, 46, 99, 0.09)',
                border: "1px solid " + colors_1.error,
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
                color: colors_1.grey,
                height: '18px',
                marginRight: '10px',
                padding: 0,
                width: '18px',
                '&$checked:not($disabled):not($colorPrimary)': {
                    backgroundColor: "#1e262d !important",
                    border: "1px solid " + colors_1.primary + " !important",
                    color: colors_1.primary + " !important",
                },
                '&$checked:not($disabled)': {
                    backgroundColor: "#392E3C !important",
                    border: "1px solid " + colors_1.error + " !important",
                    color: colors_1.error + " !important",
                },
                '&$checked': {
                    backgroundColor: colors_1.baseDark + " !important",
                    border: "1px solid " + colors_1.baseDark + " !important",
                    color: "#35424e !important",
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
                backgroundColor: colors_1.baseDark,
                border: "1px solid " + colors_1.grey,
                borderRadius: '50%',
                color: 'transparent',
                height: '18px',
                padding: 0,
                width: '18px',
            },
            colorPrimary: {
                backgroundColor: 'rgba(255, 46, 99, 0.09)',
                border: "1px solid " + colors_1.error,
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
                backgroundColor: colors_1.baseDark,
                borderRadius: '4px',
            },
            icon: {
                color: 'rgba(147, 176, 193, 0.5)',
            },
            selectMenu: {
                color: colors_1.typography,
                fontSize: '14px',
                lineHeight: '21px',
            },
        },
        MuiMenu: {
            paper: {
                border: "1px solid " + colors_1.primary,
                boxShadow: "0 0 3px 1px " + colors_1.primary,
                marginLeft: '-17px',
                marginTop: '-6px',
                maxHeight: '131px',
                overflow: 'scroll',
            },
        },
        MuiPaper: {
            root: {
                backgroundColor: colors_1.baseDark,
                border: '1px solid #384656',
                boxSizing: 'border-box',
                color: colors_1.white,
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
                backgroundColor: colors_1.base,
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
                marginBottom: '15px',
                marginLeft: 0,
            },
            label: {
                color: colors_1.typography,
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
                color: colors_1.white,
                fontSize: '13px',
                fontWeight: 600,
                height: '36px',
                minWidth: '164px',
                '&$disabled': {
                    color: colors_1.white,
                    opacity: 0.5,
                },
            },
            contained: {
                background: 'linear-gradient(to bottom, #0abbd0 0%, #09a8ba 100%)',
                border: '1px solid #0FB8D0',
                color: colors_1.white,
                '&:hover': {
                    background: 'linear-gradient(to bottom, #0AA9D0 0%, #099BBA 100%)',
                },
                '&:focus': {
                    background: 'linear-gradient(to top right, #0A99D0 10%, #097CBA 70%);',
                },
                '&$disabled': {
                    color: colors_1.white,
                },
            },
            outlined: {
                background: 'transparent',
                border: '2px solid #1CA9BA',
                color: colors_1.primary,
                '&:hover': {
                    background: '#313D49',
                    borderColor: '#23E6FE',
                },
                '&:focus': {
                    background: '#1E262E',
                },
                '&$disabled': {
                    color: colors_1.primary,
                },
            },
            outlinedSecondary: {
                background: 'transparent',
                border: "1px solid " + colors_1.typography,
                color: colors_1.typography,
                '&:hover': {
                    backgroundColor: '#313D49',
                    border: "1px solid " + colors_1.typography,
                },
                '&:focus': {
                    background: colors_1.baseDark,
                },
                '&$disabled': {
                    border: "1px solid " + colors_1.typography,
                    color: colors_1.typography,
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
                color: colors_1.grey,
                padding: '7px 0 7px 10px',
                '&:hover': {
                    backgroundColor: 'transparent',
                },
                '&$disabled': {
                    color: colors_1.grey,
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
                backgroundColor: colors_1.baseDark,
                borderBottom: 0,
            },
            body: {
                height: '74px',
            },
            footer: {
                color: colors_1.warning,
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
                borderBottom: "1px solid " + colors_1.grey,
            },
            indicator: {
                backgroundColor: colors_1.primary,
                height: '4px',
            },
        },
        MuiTab: {
            root: {
                textTransform: 'initial',
                '&:hover': {
                    borderBottom: "4px solid " + colors_1.grey,
                    boxSizing: 'border-box',
                    color: colors_1.white,
                },
            },
            textColorInherit: {
                color: colors_1.typography,
            },
            selected: {
                color: colors_1.white,
            },
        },
        MuiExpansionPanel: {
            root: {
                backgroundColor: colors_1.base,
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
                color: colors_1.typography,
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
            actions: {},
            select: {
                backgroundColor: colors_1.base,
                border: '1px solid #313D49',
                borderRadius: 0,
                paddingLeft: '12px',
                paddingRight: '30px',
            },
            selectIcon: {
                color: colors_1.primary,
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
                backgroundColor: colors_1.base,
            },
        },
        // @ts-ignore
        MuiToggleButtonGroup: {
            root: {
                boxShadow: 'none',
                '&$selected': {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                },
            },
        },
        MuiToggleButton: {
            root: {
                backgroundColor: '#293743',
                border: '1px solid #1D505F',
                boxSizing: 'border-box',
                fill: colors_1.typography,
                height: '44px',
                textTransform: 'initial',
                '&:hover': {
                    border: "1px solid " + colors_1.primaryTint,
                },
                '&$selected': {
                    background: '#313D49',
                    border: "1px solid " + colors_1.primaryTint,
                    fill: colors_1.primary,
                    color: colors_1.primary,
                },
                '&$disabled': {
                    opacity: 0.5,
                },
            },
        },
        MuiSlider: {
            root: {
                margin: '20px 0 33px',
            },
            track: {
                borderRadius: '6px',
                height: '10px',
            },
            trackAfter: {
                backgroundColor: '#313D49',
                opacity: 1,
            },
            thumb: {
                height: '18px',
                width: '18px',
            },
        },
        MuiDrawer: {
            paperAnchorRight: {
                backgroundColor: '#222B34',
                borderLeft: '1px solid #29333D',
                boxShadow: 'none',
                width: '300px',
            },
        },
        MuiAvatar: {
            root: {
                fontSize: '12px',
                height: '26px',
                marginTop: '16px',
                width: '26px',
            },
            colorDefault: {
                backgroundColor: colors_1.baseLight,
            }
        },
    },
});
exports.SelfkeyDarkTheme = function (_a) {
    var children = _a.children;
    return (React.createElement(core_1.MuiThemeProvider, { theme: theme }, children));
};
exports.default = exports.SelfkeyDarkTheme;
//# sourceMappingURL=selfkey-dark-theme.js.map