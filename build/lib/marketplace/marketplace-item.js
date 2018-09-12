"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var paragraph_1 = require("../typography/paragraph");
var headings_1 = require("../typography/headings");
var styles = {
    root: {
        width: '360px',
        height: '326px',
        marginTop: '30px',
        marginBottom: '30px',
        border: 'solid 1px #303c49',
        borderRadius: '4px'
    },
    title: {
        margin: '20px'
    },
    icon: {
        marginLeft: '20px'
    },
    header: {
        backgroundColor: '#2a3540'
    },
    svgIcon: {
        height: '44px',
        color: '#23E6FE'
    },
    button: {
        color: '#93b0c1',
        borderColor: '#3b4a5a',
        '&:disabled': {
            color: '#48565f'
        }
    },
    body: {
        width: '320px',
        textAlign: 'left',
        margin: '20px',
        color: '#fff',
        fontFamily: '"Proxima Nova", arial, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: 1.5,
        height: '130px',
    },
    footer: {
        margin: '20px',
    }
};
exports.MarketplaceItem = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, title = _a.title, description = _a.description, active = _a.active, svgIcon = _a.svgIcon, learnMoreAction = _a.learnMoreAction;
    return (React.createElement(core_1.Grid, { container: true, className: classes.root },
        React.createElement(core_1.Grid, { item: true },
            React.createElement(core_1.Grid, { container: true, id: 'header', direction: 'row', justify: 'flex-start', alignItems: 'center', className: classes.header },
                React.createElement(core_1.Grid, { item: true, id: 'icon', className: classes.icon }, svgIcon &&
                    React.createElement("img", { src: svgIcon, className: classes.svgIcon })),
                React.createElement(core_1.Grid, { item: true, id: 'title', className: classes.title },
                    React.createElement(headings_1.H2, null, title))),
            React.createElement(core_1.Grid, { item: true, id: 'body', className: classes.body },
                React.createElement(paragraph_1.P, null, description)),
            React.createElement(core_1.Grid, { item: true, id: 'footer', className: classes.footer },
                React.createElement(core_1.Button, { variant: "outlined", disabled: !active, className: classes.button, onClick: learnMoreAction }, active ? 'Learn More' : 'Coming Soon')))));
});
exports.default = exports.MarketplaceItem;
//# sourceMappingURL=marketplace-item.js.map