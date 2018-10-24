"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var headings_1 = require("../../typography/headings");
var paragraph_1 = require("../../typography/paragraph");
var tick_1 = require("../../icons/tick");
var unlock_1 = require("../../icons/unlock");
var return_1 = require("../../icons/return");
var hourglass_1 = require("../../icons/hourglass");
var styled_button_1 = require("../../common/styled-button");
var react_truncate_1 = require("react-truncate");
var document_1 = require("../../icons/document");
var styles = {
    root: {
        width: '946px',
        height: '100%',
        marginTop: '50px',
        marginBottom: '30px',
        border: 'solid 1px #303c49',
        borderRadius: '4px',
    },
    title: {
        margin: '20px',
    },
    icon: {
        marginLeft: '20px',
    },
    header: {
        backgroundColor: '#2a3540',
    },
    body: {
        textAlign: 'justify',
        margin: '20px',
        color: '#fff',
        fontFamily: 'Lato, arial, sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: 1.67,
    },
    formControl: {
        marginRight: '100px',
    },
    divider: {
        backgroundColor: '#475768',
    },
    dividerWrapper: {
        width: '100%',
    },
    formGroup: {
        '& span': {
            fontSize: '14px',
            lineHeight: '35px',
        },
        '& span strong': {
            fontSize: '16px',
        },
    },
    bullet: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30px',
        height: '28px',
        borderRadius: '18px',
        backgroundColor: '#3b4b59',
        border: 'solid 1px #495b70',
    },
    description: {
        marginTop: '0px',
        textAlign: 'left',
        width: '620px',
    },
    buttonWrapper: {
        marginRight: '30px',
    },
    button: {
        color: '#93b0c1',
        borderColor: '#3b4a5a',
        '&:disabled': {
            color: '#48565f',
        },
    },
    buttonDescription: {
        fontSize: '12px',
        width: '620px',
    },
    requirementListItem: {
        columnBreakInside: 'avoid',
        color: '#93b0c1',
    },
    requirementList: {
        columnCount: 2,
    },
    notEnteredRequeriment: {
        height: '28px',
        width: '30px',
        borderRadius: '18px',
        backgroundColor: '#F5A623',
    },
};
var ItemDetailsComponent = /** @class */ (function (_super) {
    __extends(ItemDetailsComponent, _super);
    function ItemDetailsComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isDescriptionTruncated: true,
        };
        return _this;
    }
    ItemDetailsComponent.prototype.getKYCRequirements = function (requirements, classes) {
        return requirements.map(function (requirement, index) {
            return (React.createElement(core_1.ListItem, { className: classes.requirementListItem },
                React.createElement(core_1.ListItemAvatar, null, requirement.isEntered ? (React.createElement(core_1.Avatar, { className: classes.bullet },
                    React.createElement(tick_1.TickIcon, null))) : (React.createElement(core_1.Avatar, { className: classes.notEnteredRequeriment },
                    React.createElement("div", null, index + 1)))),
                React.createElement(core_1.ListItemText, { disableTypography: true }, requirement.name),
                requirement.type === 'document' && React.createElement(document_1.DocumentIcon, null)));
        });
    };
    ItemDetailsComponent.prototype.unlockActionCall = function (unlockAction, item, hasBalance) {
        if (!unlockAction) {
            return;
        }
        unlockAction(hasBalance);
    };
    ItemDetailsComponent.prototype.handleViewAllDetails = function () {
        this.setState({ isDescriptionTruncated: !this.state.isDescriptionTruncated });
    };
    ItemDetailsComponent.prototype.renderDescription = function (description) {
        if (this.state.isDescriptionTruncated) {
            return React.createElement(react_truncate_1.default, { lines: 5 }, description);
        }
        return description;
    };
    ItemDetailsComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, item = _a.item, unlockAction = _a.unlockAction, hasBalance = _a.hasBalance, backAction = _a.backAction;
        return (React.createElement(core_1.Grid, { container: true },
            React.createElement(core_1.Grid, { item: true, className: classes.buttonWrapper },
                React.createElement(core_1.Button, { variant: "outlined", className: classes.button, onClick: backAction }, "< Back")),
            React.createElement(core_1.Grid, { container: true, className: classes.root },
                React.createElement(core_1.Grid, { container: true, id: "header", direction: "row", justify: "flex-start", alignItems: "center", className: classes.header },
                    React.createElement(core_1.Grid, { item: true, id: "icon", className: classes.icon },
                        React.createElement("img", { src: item.logo[0].url })),
                    React.createElement(core_1.Grid, { item: true, id: "title", className: classes.title },
                        React.createElement(headings_1.H2, null, item.name))),
                React.createElement(core_1.Grid, { item: true, id: "body", className: classes.body },
                    React.createElement(core_1.Grid, { container: true, direction: "column", justify: "flex-start", alignItems: "flex-start", spacing: 32 },
                        React.createElement(core_1.Grid, { item: true, id: "description" },
                            React.createElement(core_1.Grid, { container: true, direction: "row", justify: "center", alignItems: "flex-start", spacing: 40 },
                                React.createElement(core_1.Grid, { item: true, xs: 8 },
                                    React.createElement(paragraph_1.P, { className: classes.description }, this.renderDescription(item.description)),
                                    React.createElement(core_1.Button, { variant: "outlined", className: classes.button + " " + classes.buttonDescription, onClick: function () { return _this.handleViewAllDetails(); } }, this.state.isDescriptionTruncated
                                        ? 'VIEW ALL DETAILS'
                                        : 'COLLAPSE DETAILS')),
                                React.createElement(core_1.Grid, { item: true, xs: 4 },
                                    React.createElement(styled_button_1.StyledButton, { disabled: item.status === 'pending', variant: ['unlocked', 'locked'].includes(item.status) ? 'outlined' : 'contained', onClick: function () { return _this.unlockActionCall(unlockAction, item, hasBalance); } },
                                        item.status === 'Active' && React.createElement(unlock_1.UnlockIcon, null),
                                        item.status === 'pending' && React.createElement(hourglass_1.HourglassIcon, { width: "10px", height: "14px" }),
                                        item.status === 'unlocked' && React.createElement(return_1.ReturnIcon, null),
                                        item.integration)))),
                        React.createElement(core_1.Grid, { item: true, className: classes.dividerWrapper },
                            React.createElement(core_1.Divider, { className: classes.divider })),
                        React.createElement(core_1.Grid, { item: true, id: "highlights" },
                            React.createElement(core_1.Grid, { container: true, direction: "column", justify: "flex-start", alignItems: "flex-start", spacing: 16 },
                                React.createElement(core_1.Grid, { item: true },
                                    React.createElement(headings_1.H3, null, "Highlights")),
                                React.createElement(core_1.Grid, { item: true },
                                    React.createElement(core_1.FormControl, { component: "fieldset", className: classes.formControl },
                                        React.createElement(core_1.FormGroup, { className: classes.formGroup },
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "Location:"),
                                                " ",
                                                item.location,
                                                ' '),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "Year Launched:"),
                                                " ",
                                                item.year_launched,
                                                ' '),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "Coin Pairs:"),
                                                " ",
                                                item.coin_pairs,
                                                ' '),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "Maker Fee:"),
                                                " ",
                                                item.maker_fee,
                                                ' '),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "Taker Fee:"),
                                                " ",
                                                item.taker_fee,
                                                ' '),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "URL:"),
                                                " ",
                                                item.url,
                                                ' '))),
                                    React.createElement(core_1.FormControl, { component: "fieldset", className: classes.formControl },
                                        React.createElement(core_1.FormGroup, { className: classes.formGroup },
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "FIAT Payment:"),
                                                " ",
                                                item.fiat_payments,
                                                ' '),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "FIAT Supported:"),
                                                ' ',
                                                item.fiat_supported
                                                    ? item.fiat_supported.toString().replace(/,/g, ' ')
                                                    : '',
                                                ' '),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "Margin Trading:"),
                                                " ",
                                                item.margin_trading,
                                                ' '),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "KYC/AML:"),
                                                " ",
                                                item.kyc_aml,
                                                ' '),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "Excluded Resident:"),
                                                " ",
                                                item.excluded_residents,
                                                ' '),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "Contact:"),
                                                " ",
                                                item.email,
                                                ' ')))))),
                        React.createElement(core_1.Grid, { item: true, className: classes.dividerWrapper },
                            React.createElement(core_1.Divider, { className: classes.divider })),
                        React.createElement(core_1.Grid, { item: true, id: "requirements" },
                            React.createElement(core_1.Grid, { container: true, direction: "column", justify: "flex-start", alignItems: "flex-start", spacing: 16 },
                                React.createElement(core_1.Grid, { item: true },
                                    React.createElement(headings_1.H3, null, "KYC Requirements")),
                                React.createElement(core_1.Grid, { item: true },
                                    React.createElement(core_1.List, { className: classes.requirementList }, this.getKYCRequirements(item.kyc_template, classes))))))))));
    };
    return ItemDetailsComponent;
}(React.Component));
exports.ItemDetailsComponent = ItemDetailsComponent;
exports.ItemDetails = react_jss_1.default(styles)(ItemDetailsComponent);
exports.default = exports.ItemDetails;
//# sourceMappingURL=item-details.js.map