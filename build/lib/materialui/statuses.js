"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusInfo = void 0;
var React = require("react");
var classnames_1 = require("classnames");
var core_1 = require("@material-ui/core");
var icons_1 = require("../icons");
var colors_1 = require("../colors");
var tooltip_arrow_1 = require("./tooltip-arrow");
var styles = function (theme) {
    return core_1.createStyles({
        defaultStatus: {
            border: "1px solid " + colors_1.success,
            borderRadius: '4px',
            boxSizing: 'border-box',
            padding: '25px 30px'
        },
        grow: {
            flexGrow: 1
        },
        statusIcon: {
            marginRight: '25px'
        },
        iconContainer: {
            marginRight: '25px',
            textAlign: 'center',
            width: '38px'
        },
        attribute: {
            height: '45px',
            width: '38px'
        },
        statusWrap: {
            width: '100%',
            '& .required': {
                border: "1px solid " + colors_1.warning
            },
            '& .submitted': {
                border: "1px solid " + colors_1.typography
            },
            '& .denied': {
                border: "1px solid " + colors_1.error
            }
        },
        refresh: {
            cursor: 'pointer',
            marginLeft: '30px'
        }
    });
};
exports.StatusInfo = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes, status = _a.status, onClick = _a.onClick, handleRefresh = _a.handleRefresh, tooltip = _a.tooltip;
    var icon;
    var message;
    var statusStyle;
    var button = null;
    switch (status) {
        case 'Documents Required':
            icon = React.createElement(icons_1.AttributeAlertLargeIcon, { className: classes.statusIcon });
            message = 'Application started. Missing required documents.';
            button = (React.createElement(core_1.Button, { variant: "contained", size: "large", onClick: onClick }, "Add Documents"));
            statusStyle = 'required';
            break;
        case 'Documents Submitted':
            icon = React.createElement(icons_1.SimpleHourglassIcon, { className: classes.statusIcon });
            message =
                'Application started. Documents submitted. Please check your email for further instructions.';
            statusStyle = 'submitted';
            break;
        case 'Denied':
            icon = React.createElement(icons_1.SimpleDeniedIcon, { className: classes.statusIcon });
            message = 'Application denied. Please check your email for the reject reason.';
            statusStyle = 'denied';
            break;
        default:
            icon = React.createElement(icons_1.SimpleCheckIcon, { className: classes.statusIcon });
            message =
                'Application completed. Please check your email to receive relevant documents and information.';
    }
    return (React.createElement("div", { className: classes.statusWrap },
        React.createElement(core_1.Grid, { item: true, className: classnames_1.default(classes.defaultStatus, status, statusStyle) },
            React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center", wrap: "nowrap" },
                React.createElement(core_1.Grid, { item: true, className: classes.iconContainer }, icon),
                React.createElement(core_1.Grid, { item: true, className: classes.grow },
                    React.createElement(core_1.Typography, { variant: "h2" }, "Status"),
                    React.createElement(core_1.Typography, { variant: "subtitle2", color: "secondary" }, message)),
                React.createElement(core_1.Grid, { item: true }, button ? button : React.createElement("span", null)),
                React.createElement(core_1.Grid, { item: true, style: { height: '23px' } },
                    React.createElement(tooltip_arrow_1.KeyTooltip, { interactive: true, placement: "top-start", title: React.createElement(React.Fragment, null,
                            React.createElement("span", null, tooltip),
                            React.createElement(tooltip_arrow_1.TooltipArrow, null)) },
                        React.createElement("span", { className: classes.refresh, onClick: handleRefresh },
                            React.createElement(icons_1.NewRefreshIcon, null))))))));
});
//# sourceMappingURL=statuses.js.map