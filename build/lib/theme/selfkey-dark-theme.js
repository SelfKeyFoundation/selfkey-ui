"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var theme = core_1.createMuiTheme({
    palette: {
        primary: { main: '#00C0D9' },
        secondary: { main: '#697C95' },
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
    },
});
exports.SelfkeyDarkTheme = function (_a) {
    var children = _a.children;
    return (React.createElement(core_1.MuiThemeProvider, { theme: theme }, children));
};
exports.default = exports.SelfkeyDarkTheme;
//# sourceMappingURL=selfkey-dark-theme.js.map