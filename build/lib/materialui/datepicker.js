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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var Datetime = require("react-datetime");
var styles = {
    datepickerWrap: {
        fontFamily: 'Lato, arial, sans-serif',
        '& .rdt': {
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
};
exports.KeyPicker = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, includeTime = _a.includeTime, props = __rest(_a, ["classes", "includeTime"]);
    var placeholder = includeTime ? '19 Dec 2018 11:23 AM' : '19 Dec 2018';
    return (React.createElement("div", { className: classes.datepickerWrap },
        React.createElement(Datetime, __assign({ dateFormat: "DD MMM YYYY", timeFormat: !!includeTime, inputProps: { placeholder: placeholder }, closeOnSelect: true }, props))));
});
exports.default = exports.KeyPicker;
//# sourceMappingURL=datepicker.js.map