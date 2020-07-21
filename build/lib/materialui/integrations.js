"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationComp = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var icons_1 = require("../icons");
var styles = core_1.createStyles({
    integration: {
        alignItems: 'center',
        background: 'linear-gradient(0deg, rgba(30,38,46,1) 0%, rgba(34,43,52,1) 100%)',
        borderRadius: '4px',
        display: 'flex',
        width: 'fit-content'
    },
    text: {
        fontSize: '12px',
        marginLeft: '6px',
        marginRight: '6px',
        textTransform: 'capitalize'
    }
});
exports.IntegrationComp = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes, status = _a.status, message = _a.message, icon = _a.icon;
    switch (status) {
        case 'deep':
            icon = React.createElement(icons_1.DeepIntegrationIcon, null);
            message = message ? message : 'Deep Integration';
            break;
        case 'light':
            icon = React.createElement(icons_1.LightIntegrationIcon, null);
            message = message ? message : 'Light Integration';
            break;
        case 'affiliate':
            icon = React.createElement(icons_1.AffiliateIntegrationIcon, null);
            message = message ? message : 'Affiliate';
            break;
        default:
            icon = icon ? icon : React.createElement(icons_1.DeepIntegrationIcon, null);
            message = message ? message : 'Affiliate';
    }
    return (React.createElement("div", { className: classes.integration },
        icon,
        React.createElement(core_1.Typography, { className: classes.text, variant: "subtitle1", color: "secondary" }, message)));
});
//# sourceMappingURL=integrations.js.map