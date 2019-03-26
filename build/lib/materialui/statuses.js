"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var classnames_1 = require("classnames");
var hourglass_simple_1 = require("../icons/hourglass-simple");
var selfkey_dark_theme_1 = require("../theme/selfkey-dark-theme");
var fileViewStyles = function (theme) {
    return core_1.createStyles({
        status: {
            borderRadius: '4px',
            boxSizing: 'border-box',
            padding: '25px 30px',
        },
        missingStatus: {
            border: '1px solid #E98548',
        },
        grow: {
            flexGrow: 1
        },
        statusIcon: {
            marginRight: '25px'
        }
    });
};
var StatusIcon = function (status) {
    if (status.status === "missing") {
        return (React.createElement(selfkey_dark_theme_1.AttributeAlertIcon, null));
    }
    else if (status.status === "pending") {
        return (React.createElement(hourglass_simple_1.SimpleHourglassIcon, null));
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
exports.StatusInfo = core_1.withStyles(fileViewStyles)(function (_a) {
    var classes = _a.classes, status = _a.status;
    return (React.createElement(core_1.Grid, { item: true, className: classnames_1.default(classes.status, classes.missingStatus), "data-status": status },
        React.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between", alignItems: "center", wrap: "nowrap" },
            React.createElement(core_1.Grid, { item: true },
                React.createElement(StatusIcon, { status: status, className: classes.statusIcon })),
            React.createElement(core_1.Grid, { item: true, className: classes.grow },
                React.createElement(core_1.Typography, { variant: "h2" }, "Status"),
                React.createElement(StatusMessage, { status: status })),
            React.createElement(core_1.Grid, { item: true }))));
});
//# sourceMappingURL=statuses.js.map