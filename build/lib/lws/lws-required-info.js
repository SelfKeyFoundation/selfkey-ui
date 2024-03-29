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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LWSRequiredInfo = void 0;
var React = require("react");
var lodash_1 = require("lodash");
var core_1 = require("@material-ui/core");
var common_style_1 = require("../common/common-style");
var check_1 = require("../icons/check");
var check_empty_1 = require("../icons/check-empty");
var attribute_alert_1 = require("../icons/attribute-alert");
var lws_button_1 = require("./lws-button");
var edit_transparent_1 = require("../icons/edit-transparent");
var styles = core_1.createStyles({
    form: common_style_1.default.form,
    buttonPrimary: __assign(__assign({}, common_style_1.default.buttonPrimary), { fontWeight: 700 }),
    buttonSecondary: __assign(__assign({}, common_style_1.default.buttonSecondary), { fontWeight: 700 }),
    requiredInfo: {
        '& a': {
            color: '#23E6FE',
            textDecoration: 'none'
        },
        '& a &:hover': {
            textDecoration: 'underline'
        },
        fontFamily: 'Lato, arial, sans-serif'
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
            color: '#FFF'
        }
    },
    attribute: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0 0 30px',
        color: '#FFF',
        '& svg': {
            flex: '20px'
        },
        '& dl': {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            margin: '0 0 0 15px'
        },
        '& dl & dd': {
            color: '#93B0C1',
            textAlign: 'right',
            wordBreak: 'break-word'
        }
    },
    clickable: {
        cursor: 'pointer'
    },
    waringMessage: {
        color: '#FFA700',
        fontSize: '13px',
        marginTop: '-20px',
        padding: '0 0 20px 35px'
    },
    formSubmitColumn: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        '& button': {
            maxWidth: '215px',
            marginTop: '0px',
            fontWeight: 700
        }
    },
    tocMessage: {
        background: '#293743',
        padding: '20px',
        fontSize: '12px',
        lineHeight: '15px',
        fontStyle: 'italic',
        fontFamily: 'Lato, arial, sans-serif',
        margin: '30px 0 45px',
        color: '#FFF'
    },
    edit: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        margin: 0,
        outline: 'none',
        padding: 0
    }
});
var getAttributeValue = function (attribute) {
    if (!attribute.value) {
        return null;
    }
    if (typeof attribute.value !== 'object') {
        return attribute.value;
    }
    return attribute.name || attribute.schema.title || attribute.url;
};
var renderAttributes = function (requested, attributes, notAllowedAttributes, classes, disallowAttributeAction, editAction) {
    var attrs = requested.map(function (attr) {
        if (typeof attr !== 'object') {
            attr = { attribute: attr };
        }
        var found = lodash_1.find(attributes, { url: attr.id || attr.attribute }) || {};
        var merged = __assign(__assign({}, attr), found);
        if (!merged.label && merged.schema && merged.schema.title) {
            merged.label = merged.schema.title;
        }
        return merged;
    });
    return attrs.map(function (attribute, index) {
        var attributeValue = getAttributeValue(attribute);
        var notAllowed = notAllowedAttributes.includes(attribute.url);
        if (attributeValue) {
            return (React.createElement("div", { key: index },
                React.createElement("div", { className: classes.attribute },
                    React.createElement("span", { className: classes.clickable, onClick: function () { return disallowAttributeAction(attribute, !notAllowed); } }, notAllowed ? React.createElement(check_empty_1.CheckEmptyIcon, null) : React.createElement(check_1.CheckIcon, null)),
                    React.createElement("dl", null,
                        React.createElement("dt", null, attribute.label || attribute.schema.title),
                        React.createElement("dd", null, attributeValue)))));
        }
        else {
            return (React.createElement("div", { key: index },
                React.createElement("div", { className: classes.attribute },
                    React.createElement(attribute_alert_1.AttributeAlertIcon, null),
                    React.createElement("dl", null,
                        React.createElement("dt", null, attribute.label),
                        editAction ? (React.createElement("dd", null,
                            React.createElement("button", { onClick: editAction, className: classes.edit },
                                React.createElement(edit_transparent_1.EditTransparentIcon, null)))) : null)),
                React.createElement("div", { className: classes.waringMessage }, "Please update your missing details.")));
        }
    });
};
exports.LWSRequiredInfo = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes, allowAction = _a.allowAction, requested = _a.requested, cancelAction = _a.cancelAction, editAction = _a.editAction, attributes = _a.attributes, _b = _a.notAllowedAttributes, notAllowedAttributes = _b === void 0 ? [] : _b, website = _a.website, 
    // tslint:disable-next-line:no-empty
    _c = _a.disallowAttributeAction, 
    // tslint:disable-next-line:no-empty
    disallowAttributeAction = _c === void 0 ? function (attribute, disallow) { } : _c;
    return (React.createElement("div", { className: classes.requiredInfo },
        React.createElement("div", { className: classes.areaTitle },
            React.createElement("h4", null,
                React.createElement("a", { href: website.url, target: "_blank", rel: "noopener noreferrer" },
                    React.createElement("strong", null, website.name)),
                ' ',
                "would like to access this information:")),
        React.createElement("div", { className: classes.form },
            renderAttributes(requested, attributes, notAllowedAttributes, classes, disallowAttributeAction, editAction),
            React.createElement("div", { className: classes.tocMessage },
                "By clicking \"Allow\", your information listed above will be used by",
                ' ',
                React.createElement("a", { href: website.url, target: "_blank", rel: "noopener noreferrer" }, website.name),
                ' ',
                "with respect to their",
                ' ',
                React.createElement("a", { href: website.termsUrl, target: "_blank", rel: "noopener noreferrer" }, "Terms of Service"),
                ' ',
                "and",
                ' ',
                React.createElement("a", { href: website.policyUrl, target: "_blank", rel: "noopener noreferrer" }, "Privacy Policy"),
                "."),
            React.createElement("div", { className: classes.formSubmitColumn },
                React.createElement(lws_button_1.LWSButton, { className: classes.buttonSecondary, onClick: cancelAction }, "Cancel"),
                React.createElement(lws_button_1.LWSButton, { className: classes.buttonPrimary, onClick: allowAction }, "Allow")))));
});
exports.default = exports.LWSRequiredInfo;
//# sourceMappingURL=lws-required-info.js.map