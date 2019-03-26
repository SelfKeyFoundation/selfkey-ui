"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var core_1 = require("@material-ui/core");
var selfkey_dark_theme_1 = require("../theme/selfkey-dark-theme");
var statusInfoStyle = function (theme) {
    return core_1.createStyles({
        defaultStatus: {
            borderRadius: '4px',
            boxSizing: 'border-box',
            padding: '25px 30px',
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
            '& .completed': {
                border: "1px solid " + selfkey_dark_theme_1.success,
            },
            '& .missing': {
                border: "1px solid " + selfkey_dark_theme_1.warning,
            },
            '& .denied': {
                border: "1px solid " + selfkey_dark_theme_1.error
            },
            '& .pending': {
                border: "1px solid " + selfkey_dark_theme_1.typography
            }
        },
    });
};
var StatusIcon = function (status) {
    if (status.status === "missing") {
        return (React.createElement(selfkey_dark_theme_1.AttributeAlertLargeIcon, null));
    }
    else if (status.status === "pending") {
        return (React.createElement(selfkey_dark_theme_1.SimpleHourglassIcon, null));
    }
    else if (status.status === "completed") {
        return (React.createElement(selfkey_dark_theme_1.SimpleCheckIcon, null));
    }
    else {
        return (React.createElement(selfkey_dark_theme_1.SimpleDeniedIcon, null));
    }
};
var StatusMessage = function (status) {
    if (status.status === "missing") {
        return (React.createElement(core_1.Typography, { variant: "subtitle2", color: "secondary" }, "Application started. Missing required documents."));
    }
    else if (status.status === "pending") {
        return (React.createElement(core_1.Typography, { variant: "subtitle2", color: "secondary" }, "Application started. Documents submitted. Please check your email for further instructions."));
    }
    else if (status.status === "completed") {
        return (React.createElement(core_1.Typography, { variant: "subtitle2", color: "secondary" }, "Application completed. Please check your email to recieve relevant documents and information."));
    }
    else if (status.status === "denied") {
        return (React.createElement(core_1.Typography, { variant: "subtitle2", color: "secondary" }, "Application denied.  Please check your email to for the rejection reason."));
    }
    else {
        return (React.createElement(core_1.Typography, { variant: "subtitle2", color: "secondary" }, "No status"));
    }
};
exports.StatusInfo = core_1.withStyles(statusInfoStyle)(function (_a) {
    var classes = _a.classes, status = _a.status;
    return (React.createElement("div", { className: classes.statusWrap },
        React.createElement(core_1.Grid, { item: true, className: classnames_1.default(classes.defaultStatus, classes.pending, status) },
            React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center", wrap: "nowrap" },
                React.createElement(core_1.Grid, { item: true, className: classes.iconContainer },
                    React.createElement(StatusIcon, { status: status, className: classes.statusIcon })),
                React.createElement(core_1.Grid, { item: true, className: classes.grow },
                    React.createElement(core_1.Typography, { variant: "h2" }, "Status"),
                    React.createElement(StatusMessage, { status: status })),
                React.createElement(core_1.Grid, { item: true }, status === 'missing' ? React.createElement(core_1.Button, { variant: 'contained', size: "large" }, "Add Documents") : '')))));
});
//# sourceMappingURL=statuses.js.map