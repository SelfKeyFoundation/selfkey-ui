"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var _ = require("lodash");
var react_jss_1 = require("react-jss");
var common_style_1 = require("../common/common-style");
var check_1 = require("../icons/check");
var warning_1 = require("../icons/warning");
var edit_1 = require("../icons/edit");
var lws_button_1 = require("./lws-button");
var styles = {
    form: common_style_1.default.form,
    buttonPrimary: common_style_1.default.buttonPrimary,
    buttonSecondary: common_style_1.default.buttonSecondary,
    requiredInfo: {
        '& a': {
            color: '#23E6FE',
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline',
            },
        },
    },
    areaTitle: {
        textAlign: 'center',
        '& h4': {
            fontSize: '16px',
            fontWeight: 'normal',
            padding: '0 0 40px',
            margin: '0',
            lineHeight: '22px',
            textAlign: 'left',
            color: '#FFF',
        },
    },
    attribute: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0 0 30px',
        color: '#FFF',
        '& dl': {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            margin: '0 0 0 15px',
            '& dd': {
                color: '#93B0C1',
                wordBreak: 'break-word',
                textAlign: 'right',
            },
        },
    },
    waringMessage: {
        color: '#FFA700',
        fontSize: '13px',
        marginTop: '-15px',
    },
    formSubmitColumn: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        '& button': {
            maxWidth: '215px',
            marginTop: '0px',
        },
    },
    tocMessage: {
        background: '#293743',
        padding: '20px',
        fontSize: '12px',
        lineHeight: '15px',
        fontFamily: 'ProximaNovaRegIt',
        margin: '30px 0 45px',
        color: '#FFF',
    },
    edit: {
        cursor: 'pointer',
    },
};
var renderAttributes = function (required, attributes, classes, editAction) {
    var attrs = required.map(function (attr) {
        return _.find(attributes, { key: attr.key }) || attr;
    });
    return attrs.map(function (attribute, index) {
        if (attribute.data && attribute.data.value) {
            return (React.createElement("div", { key: index },
                React.createElement("div", { className: classes.attribute },
                    React.createElement(check_1.CheckIcon, null),
                    React.createElement("dl", null,
                        React.createElement("dt", null, attribute.label),
                        React.createElement("dd", null, attribute.data.value)))));
        }
        else {
            return (React.createElement("div", { key: index },
                React.createElement("div", { className: classes.attribute },
                    React.createElement(warning_1.WarningIcon, null),
                    React.createElement("dl", null,
                        React.createElement("dt", null, attribute.label),
                        editAction ? (React.createElement("dd", null,
                            React.createElement("a", { onClick: editAction, className: classes.edit },
                                React.createElement(edit_1.EditIcon, null)))) : null)),
                React.createElement("div", { className: classes.waringMessage }, "Please update your missing details.")));
        }
    });
};
exports.LWSRequiredInfo = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, allowAction = _a.allowAction, required = _a.required, cancelAction = _a.cancelAction, editAction = _a.editAction, attributes = _a.attributes, website = _a.website;
    return (React.createElement("div", { className: classes.requiredInfo },
        React.createElement("div", { className: classes.areaTitle },
            React.createElement("h4", null,
                React.createElement("a", { href: website.url, target: "_blank" },
                    React.createElement("strong", null, website.name)),
                ' ',
                "would like to access this information:")),
        React.createElement("div", { className: classes.form },
            renderAttributes(required, attributes, classes, editAction),
            React.createElement("div", { className: classes.tocMessage },
                "By clicking \"Allow\", your information listed above will be used by",
                ' ',
                React.createElement("a", { href: website.url, target: "_blank" }, website.name),
                ' ',
                "with respect to their",
                ' ',
                React.createElement("a", { href: website.termsUrl, target: "_blank" }, "Terms of Service"),
                ' ',
                "and",
                ' ',
                React.createElement("a", { href: website.policyUrl, target: "_blank" }, "Privacy Policy"),
                "."),
            React.createElement("div", { className: classes.formSubmitColumn },
                React.createElement(lws_button_1.LWSButton, { className: classes.buttonSecondary, onClick: cancelAction }, "Cancel"),
                React.createElement(lws_button_1.LWSButton, { className: classes.buttonPrimary, onClick: allowAction }, "Allow")))));
});
exports.default = exports.LWSRequiredInfo;
//# sourceMappingURL=lws-required-info.js.map