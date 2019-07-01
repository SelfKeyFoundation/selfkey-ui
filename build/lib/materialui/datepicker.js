"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var Datetime = require("react-datetime");
var selfkey_dark_theme_1 = require("../theme/selfkey-dark-theme");
var calendarIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0i8J+Suy1JRC1EYXNoYm9hcmQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSI0MDguNC1OYXRpb25hbC1JRC13aXRoLXNpbmdsZS1maWxlcy11cGxvYWQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDM1LjAwMDAwMCwgLTg0My4wMDAwMDApIiBmaWxsPSIjMjNFNkZFIj4KICAgICAgICAgICAgPGcgaWQ9Ik1vZGFsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMzAuMDAwMDAwLCAxNTkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0ibW9kYWwtYm9keSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAxMjYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkV4cGlyeSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDUxOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY4Mi45NzEyNDYsNDcgTDY2Ni45OTY4MDUsNDcgTDY2Ni45OTY4MDUsNDMuOTcxIEM2NjYuOTk2ODA1LDQzLjQzNSA2NjcuNDMxMTEsNDMgNjY3Ljk2NjI1NCw0MyBMNjY4Ljk5MzYxLDQzIEw2NjguOTkzNjEsNDUgTDY3MC45OTA0MTUsNDUgTDY3MC45OTA0MTUsNDMgTDY3OC45Nzc2MzYsNDMgTDY3OC45Nzc2MzYsNDUgTDY4MC45NzQ0NDEsNDUgTDY4MC45NzQ0NDEsNDMgTDY4MS45NzI4NDMsNDMgQzY4Mi41MjM5NjIsNDMgNjgyLjk3MTI0Niw0My40NDggNjgyLjk3MTI0Niw0NCBMNjgyLjk3MTI0Niw0NyBaIE02ODIuOTcxMjQ2LDU2IEM2ODIuOTcxMjQ2LDU2LjU1IDY4Mi41MjE5NjUsNTcgNjgxLjk3Mjg0Myw1NyBMNjY3Ljk5NTIwOCw1NyBDNjY3LjQ0NDA4OSw1NyA2NjYuOTk2ODA1LDU2LjU1MiA2NjYuOTk2ODA1LDU2IEw2NjYuOTk2ODA1LDQ5IEw2ODIuOTcxMjQ2LDQ5IEw2ODIuOTcxMjQ2LDU2IFogTTY2NS4wNjM4OTgsNTYuNzYxIEM2NjUuMDYzODk4LDU3Ljg2NSA2NjYuMDIxMzY2LDU5IDY2Ny4xMjM2MDIsNTkgTDY4My4wOTgwNDMsNTkgQzY4NC4yMDEyNzgsNTkgNjg1LDU3Ljk3OSA2ODUsNTYuNzYxIEM2ODUsNTYuMzcyIDY4NC45NjgwNTEsNDQuMzYgNjg0Ljk2ODA1MSw0My43MDggQzY4NC45NjgwNTEsNDEuNjI2IDY4NC42ODc1LDQxIDY4MC45NzQ0NDEsNDEgTDY4MC45NzQ0NDEsMzkgTDY3OC45Nzc2MzYsMzkgTDY3OC45Nzc2MzYsNDEgTDY3MC45OTA0MTUsNDEgTDY3MC45OTA0MTUsMzkgTDY2OC45OTM2MSwzOSBMNjY4Ljk5MzYxLDQxIEw2NjYuOTk2ODA1LDQxIEM2NjUuODk4NTYyLDQxIDY2NSw0MS45IDY2NSw0MyBMNjY1LjA2Mzg5OCw1Ni43NjEgWiIgaWQ9Imljb24tY2FsZW5kYXIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
var styles = {
    datepickerWrap: {
        fontFamily: 'Lato, arial, sans-serif',
        '& .rdt': {
            width: '100%',
            '& input': {
                boxSizing: 'border-box',
                color: 'white',
                width: '100%',
                background: "url(" + calendarIcon + ") #1E262E no-repeat right 10px center",
                paddingRight: '35px',
            },
            '& input::placeholder': {
                color: 'rgba(147, 176, 193, 0.42)',
            },
        },
        '& .rdtOpen': {
            display: 'table',
            position: 'relative',
            '& .rdtPicker': {
                display: 'block',
                position: 'absolute',
                zIndex: 100,
            },
        },
        '& .rdtPicker': {
            backgroundColor: '#1E262E',
            border: '1px solid #313D49',
            borderRadius: '3px',
            color: 'white',
            cursor: 'pointer',
            display: 'none',
            fontWeight: 600,
            minHeight: '325px',
            minWidth: '263px',
            padding: '5px 25px 15px 25px',
            textAlign: 'center',
            '& th ': {
                borderBottom: 'none',
            },
        },
        '& .form-control': {
            backgroundColor: '#1E262E',
            borderRadius: '4px',
            border: '1px solid #384656',
            color: '#93B0C1',
            fontSize: '14px',
            height: '44px',
            lineHeight: '21px',
            outline: 'none',
            paddingLeft: '16px',
            paddingRight: '16px',
            '&:focus': {
                border: '1px solid #00C0D9',
                boxShadow: '0 0 3px 1px #00C0D9',
            },
            '&:placeholder': {
                color: '#404B55',
            },
        },
        '& .rdtSwitch': {
            color: '#93B0C1',
            '&:hover': {
                color: 'white',
            },
        },
        '& .dow': {
            color: '#93B0C1',
            fontWeight: 600,
            paddingBottom: '10px',
            paddingTop: '25px',
        },
        '& .rdtTimeToggle:hover': {
            color: 'white',
        },
        '& .rdtNext': {
            color: '#697C95',
            verticalAlign: 'sub',
            userSelect: 'none',
            width: '40px',
            '&:hover': {
                color: 'white',
            },
            '& span': {
                fontSize: '2.2em',
                verticalAlign: 'sub',
            },
        },
        '& .rdtPrev': {
            color: '#697C95',
            verticalAlign: 'sub',
            userSelect: 'none',
            width: '40px',
            '&:hover': {
                color: 'white',
            },
            '& span': {
                fontSize: '2.2em',
                verticalAlign: 'sub',
            },
        },
        '& tbody': {
            fontSize: '14px',
            fontWeight: 600,
        },
        '& thead': {
            '& tr:first-child': {
                '&:after': {
                    borderBottom: '1px solid #313D49',
                    content: '""',
                    left: 0,
                    position: 'absolute',
                    top: '60px',
                    width: '100%',
                },
                '& th': {
                    cursor: 'pointer',
                    paddingBottom: '10px',
                    paddingTop: 0,
                },
            },
            '& tr:nth-child(2)': {
                fontSize: '14px',
                textTransform: 'uppercase',
            },
        },
        '& tfoot': {
            '& td': {
                color: '#93B0C1',
                cursor: 'pointer',
                fontSize: '12px',
                paddingTop: '30px',
                textAlign: 'center',
            },
            '&:before': {
                borderTop: '1px solid #313D49',
                content: '""',
                left: 0,
                marginTop: '10px',
                position: 'absolute',
                width: '100%',
            },
        },
        '& .rdtDay': {
            color: 'white',
            cursor: 'pointer',
            fontWeight: 600,
            padding: '8px 10px',
            textAlign: 'center',
            '&:hover': {
                backgroundColor: '#00C0D9 !important',
                borderRadius: '3px',
            },
        },
        '& .rdtNew': {
            color: '#404B55',
        },
        '& .rdtOld': {
            color: '#404B55',
        },
        '& .rdtMonth': {
            cursor: 'pointer',
            fontWeight: 600,
            padding: '8px 10px',
            textAlign: 'center',
            '&:hover': {
                backgroundColor: '#00C0D9',
                borderRadius: '3px',
            },
        },
        '& .rdtMonths': {
            '& table': {
                width: '100%',
            },
            '& table:nth-child(2)': {
                display: 'flex',
                '& tbody': {
                    marginTop: '65px',
                    textAlign: 'center',
                    width: 'inherit',
                    '& tr': {
                        display: 'flex',
                        justifyContent: 'space-around',
                        margin: '10px 0',
                    },
                },
            },
        },
        '& .rdtYear': {
            cursor: 'pointer',
            fontWeight: 600,
            padding: '8px 10px',
            textAlign: 'center',
            '&:hover': {
                backgroundColor: '#00C0D9',
                borderRadius: '3px',
            },
        },
        '& .rdtYears': {
            '& table': {
                width: '100%',
            },
            '& table:nth-child(2)': {
                display: 'flex',
                '& tbody': {
                    marginTop: '65px',
                    textAlign: 'center',
                    width: 'inherit',
                    '& tr': {
                        display: 'flex',
                        justifyContent: 'space-around',
                        margin: '10px 0',
                    },
                },
            },
        },
        '& .rdtTime': {
            '& table': {
                width: '100%',
                '& tbody': {
                    display: 'inherit',
                    marginTop: '85px',
                    textAlign: 'center',
                    width: 'inherit',
                },
            },
            '& .rdtSwitch': {
                fontWeight: '400',
                paddingBottom: '18px',
                paddingTop: '14px',
            },
        },
        '& .rdtPicker td.rdtActive': {
            backgroundColor: '#00C0D9',
            borderRadius: '3px',
        },
        '& .rdtPicker td.rdtToday:before': {
            display: 'none',
        },
        '& .rdtCounters': {
            display: 'flex',
            justifyContent: 'space-around',
        },
        '& .rdtCounter': {
            '&:first-child:before': {
                color: '#93B0C1',
                content: '"Hours"',
                marginLeft: '-14px',
                marginTop: '-35px',
                position: 'absolute',
            },
            '&:nth-child(3):before': {
                color: '#93B0C1',
                content: '"Minutes"',
                marginLeft: '-21px',
                marginTop: '-35px',
                position: 'absolute',
            },
        },
        '& .rdtCount': {
            border: '1px solid #384656',
            borderRadius: '4px',
            color: '#93B0C1',
            fontWeight: 'normal',
            margin: '15px 0',
            padding: '15px 17px',
            width: '25px',
        },
        '& .rdtBtn': {
            color: '#697C95',
            userSelect: 'none',
            '&:hover': {
                color: 'white',
            },
        },
        '& .rdtCounterSeparator': {
            display: 'none',
        },
    },
    formError: {
        '& input': {
            backgroundColor: 'rgba(255, 46, 99, 0.09) !important',
            border: "1px solid " + selfkey_dark_theme_1.error + " !important",
        }
    },
};
exports.KeyPicker = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, includeTime = _a.includeTime, isError = _a.isError, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, props = __rest(_a, ["classes", "includeTime", "isError", "onChange", "onBlur", "onFocus"]);
    var eventHandlers = {};
    if (onChange) {
        eventHandlers.onChange = function (date) {
            return onChange({
                target: {
                    value: date
                        ? date.format
                            ? date.format("YYYY-MM-DD" + (includeTime ? ' h:mm:ss a' : ''))
                            : date
                        : null,
                },
            });
        };
    }
    if (onBlur) {
        eventHandlers.onBlur = function () {
            onBlur({ target: { value: null } });
        };
    }
    if (onFocus) {
        eventHandlers.onFocus = function () {
            onFocus({ target: { value: null } });
        };
    }
    var additionalClass = null;
    if (isError) {
        additionalClass = classes.formError;
    }
    var placeholder = includeTime ? 'YYYY-MM-DD h:mm:ss a' : 'YYYY-MM-DD';
    return (React.createElement("div", { className: classes.datepickerWrap },
        React.createElement(Datetime, __assign({ dateFormat: "YYYY-MM-DD", timeFormat: !!includeTime, inputProps: { placeholder: placeholder }, closeOnSelect: true }, props, eventHandlers, { className: additionalClass }))));
});
exports.default = exports.KeyPicker;
//# sourceMappingURL=datepicker.js.map