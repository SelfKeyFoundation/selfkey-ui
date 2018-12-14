"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var colors_1 = require("../colors");
__export(require("../materialui/checkboxes"));
__export(require("../materialui/buttonGroups"));
__export(require("../materialui/buttons"));
__export(require("../materialui/colorPresentation"));
__export(require("../materialui/dropdowns"));
__export(require("../materialui/inputs"));
__export(require("../materialui/modal"));
__export(require("../materialui/lists"));
__export(require("../materialui/sliders"));
__export(require("../materialui/tables"));
__export(require("../materialui/tabs"));
__export(require("../materialui/typography"));
__export(require("../icons/selfkeyLogo"));
__export(require("../icons/corporate"));
__export(require("../icons/person"));
__export(require("../icons/info"));
__export(require("../icons/incorporations"));
var muiedit_1 = require("../icons/muiedit");
exports.MuiEditIcon = muiedit_1.MuiEditIcon;
var theme = core_1.createMuiTheme({
    palette: {
        primary: {
            main: colors_1.primary,
            light: colors_1.primaryTint,
        },
        secondary: {
            main: colors_1.warning,
        },
        error: {
            main: colors_1.error,
        },
        text: {
            primary: colors_1.white,
            secondary: colors_1.typography,
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
                backgroundColor: colors_1.primary,
            },
            button: {
                margin: '0',
                "&:hover": {
                    backgroundColor: colors_1.grey,
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
                    color: colors_1.primary,
                },
                '&:checked': {
                    color: colors_1.primary,
                },
            },
        },
        MuiCheckbox: {
            root: {
                color: colors_1.grey,
                '&$checked:not($disabled):not($colorSecondary)': {
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
                '&$disabled': {
                    color: 'transparent',
                },
            },
            colorPrimary: {
                backgroundColor: colors_1.baseDark,
                border: "1px solid " + colors_1.grey,
                borderRadius: '3px',
                color: 'transparent',
                height: '18px',
                padding: 0,
                width: '18px',
            },
            colorSecondary: {
                backgroundColor: 'rgba(255, 46, 99, 0.09)',
                border: "1px solid " + colors_1.error,
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
                width: '200px',
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
                '&:hover': {
                    backgroundColor: 'transparent',
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
    },
});
exports.SelfkeyDarkTheme = function (_a) {
    var children = _a.children;
    return (React.createElement(core_1.MuiThemeProvider, { theme: theme }, children));
};
exports.default = exports.SelfkeyDarkTheme;
//# sourceMappingURL=selfkey-dark-theme.js.map