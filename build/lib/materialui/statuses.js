"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var core_1 = require("@material-ui/core");
var selfkey_dark_theme_1 = require("../theme/selfkey-dark-theme");
var statusInfoStyle = function (theme) {
    return core_1.createStyles({
        defaultStatus: {
            border: "1px solid " + selfkey_dark_theme_1.success,
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
            '& .DocumentsRequired': {
                border: "1px solid " + selfkey_dark_theme_1.warning,
            },
            '& .DocumentsSubmitted': {
                border: "1px solid " + selfkey_dark_theme_1.typography
            },
            '& .Denied': {
                border: "1px solid " + selfkey_dark_theme_1.error
            }
        },
    });
};
var StatusIcon = function (status) {
    if (status.status === 'DocumentsRequired') {
        return (React.createElement(selfkey_dark_theme_1.AttributeAlertLargeIcon, null));
    }
    else if (status.status === 'DocumentsSubmitted') {
        return (React.createElement(selfkey_dark_theme_1.SimpleHourglassIcon, null));
    }
    else if (status.status === 'Denied') {
        return (React.createElement(selfkey_dark_theme_1.SimpleDeniedIcon, null));
    }
    else {
        return (React.createElement(selfkey_dark_theme_1.SimpleCheckIcon, null));
    }
};
var StatusMessage = function (status) {
    if (status.status === 'DocumentsRequired') {
        return (React.createElement(core_1.Typography, { variant: 'subtitle2', color: 'secondary' }, "Application started. Missing required documents."));
    }
    else if (status.status === 'DocumentsSubmitted') {
        return (React.createElement(core_1.Typography, { variant: 'subtitle2', color: 'secondary' }, "Application started. Documents submitted. Please check your email for further instructions."));
    }
    else if (status.status === 'Denied') {
        return (React.createElement(core_1.Typography, { variant: 'subtitle2', color: 'secondary' }, "Application denied.  Please check your email to for the rejection reason."));
    }
    else {
        return (React.createElement(core_1.Typography, { variant: 'subtitle2', color: 'secondary' }, "Application completed. Please check your email to recieve relevant documents and information."));
    }
};
var StatusButton = function (status) {
    if (status.status === 'DocumentsRequired') {
        return (React.createElement(core_1.Button, { variant: 'contained', size: 'large' }, "Add Documents"));
    }
    else {
        return (React.createElement("span", null));
    }
};
exports.StatusInfo = core_1.withStyles(statusInfoStyle)(function (_a) {
    var classes = _a.classes, status = _a.status;
    return (React.createElement("div", { className: classes.statusWrap },
        React.createElement(core_1.Grid, { item: true, className: classnames_1.default(classes.defaultStatus, classes.pending, status) },
            React.createElement(core_1.Grid, { container: true, direction: 'row', justify: 'space-between', alignItems: 'center', wrap: 'nowrap' },
                React.createElement(core_1.Grid, { item: true, className: classes.iconContainer },
                    React.createElement(StatusIcon, { status: status, className: classes.statusIcon })),
                React.createElement(core_1.Grid, { item: true, className: classes.grow },
                    React.createElement(core_1.Typography, { variant: 'h2' }, "Status"),
                    React.createElement(StatusMessage, { status: status })),
                React.createElement(core_1.Grid, { item: true },
                    React.createElement(StatusButton, { status: status }))))));
});
//# sourceMappingURL=statuses.js.map