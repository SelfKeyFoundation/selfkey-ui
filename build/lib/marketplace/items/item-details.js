"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var headings_1 = require("../../typography/headings");
var paragraph_1 = require("../../typography/paragraph");
var tick_1 = require("../../icons/tick");
var unlock_1 = require("../../icons/unlock");
var styled_button_1 = require("../../common/styled-button");
var styles = {
    root: {
        width: '946px',
        height: '100%',
        marginTop: '50px',
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
    body: {
        textAlign: 'justify',
        margin: '20px',
        color: '#fff',
        fontFamily: 'ProximaNovaRegular',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: 1.67
    },
    formControl: {
        marginRight: '100px'
    },
    divider: {
        backgroundColor: '#475768'
    },
    dividerWrapper: {
        width: '100%'
    },
    formGroup: {
        '& span': {
            fontSize: '14px'
        },
        '& span strong': {
            color: '#93b0c1',
            fontSize: '16px',
            paddingRight: '20px'
        }
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
    requirement: {
        paddingLeft: '20px',
        color: '#93b0c1'
    },
    requirements: {
        width: '400px',
    },
    description: {
        marginTop: '0px'
    },
    buttonWrapper: {
        marginRight: '30px',
    },
    button: {
        color: '#93b0c1',
        borderColor: '#3b4a5a',
        '&:disabled': {
            color: '#48565f'
        }
    },
};
var getKYCRequirements = function (requirements, classes) {
    return requirements.map(function (requirement) {
        return (React.createElement(core_1.Grid, { item: true },
            React.createElement(core_1.Grid, { container: true, direction: 'row', justify: 'space-between' },
                React.createElement(core_1.Grid, { item: true, className: classes.bullet },
                    React.createElement(tick_1.TickIcon, null)),
                React.createElement(core_1.Grid, { item: true, className: classes.requirement }, requirement))));
    });
};
var unlockActionCall = function (unlockAction, item, hasBalance) {
    if (item.status !== 'Active' || !unlockAction) {
        return;
    }
    unlockAction(hasBalance);
};
exports.ItemDetails = react_jss_1.default(styles)(function (_a) {
    var classes = _a.classes, children = _a.children, item = _a.item, unlockAction = _a.unlockAction, hasBalance = _a.hasBalance, backAction = _a.backAction;
    return (React.createElement(core_1.Grid, { container: true },
        React.createElement(core_1.Grid, { item: true, className: classes.buttonWrapper },
            React.createElement(core_1.Button, { variant: "outlined", className: classes.button, onClick: backAction }, "< Back")),
        React.createElement(core_1.Grid, { container: true, className: classes.root },
            React.createElement(core_1.Grid, { item: true },
                React.createElement(core_1.Grid, { container: true, id: 'header', direction: 'row', justify: 'flex-start', alignItems: 'center', className: classes.header },
                    React.createElement(core_1.Grid, { item: true, id: 'icon', className: classes.icon },
                        React.createElement("img", { src: item.logo[0].url })),
                    React.createElement(core_1.Grid, { item: true, id: 'title', className: classes.title },
                        React.createElement(headings_1.H2, null, item.name))),
                React.createElement(core_1.Grid, { item: true, id: 'body', className: classes.body },
                    React.createElement(core_1.Grid, { container: true, direction: 'column', justify: 'flex-start', alignItems: 'flex-start', spacing: 32 },
                        React.createElement(core_1.Grid, { item: true, id: 'description' },
                            React.createElement(core_1.Grid, { container: true, direction: 'row', justify: 'center', alignItems: 'flex-start', spacing: 40 },
                                React.createElement(core_1.Grid, { item: true, xs: 8 },
                                    React.createElement(paragraph_1.P, { className: classes.description }, item.description)),
                                React.createElement(core_1.Grid, { item: true, xs: 4 },
                                    React.createElement(styled_button_1.StyledButton, { onClick: function () { return unlockActionCall(unlockAction, item, hasBalance); } },
                                        item.status === 'Active' &&
                                            React.createElement(unlock_1.UnlockIcon, null),
                                        item.integration)))),
                        React.createElement(core_1.Grid, { item: true, className: classes.dividerWrapper },
                            React.createElement(core_1.Divider, { className: classes.divider })),
                        React.createElement(core_1.Grid, { item: true, id: 'highlights' },
                            React.createElement(core_1.Grid, { container: true, direction: 'column', justify: 'flex-start', alignItems: 'flex-start', spacing: 16 },
                                React.createElement(core_1.Grid, { item: true },
                                    React.createElement(headings_1.H3, null, "Highlights")),
                                React.createElement(core_1.Grid, { item: true },
                                    React.createElement(core_1.FormControl, { component: "fieldset", className: classes.formControl },
                                        React.createElement(core_1.FormGroup, { className: classes.formGroup },
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "Location:"),
                                                " ",
                                                item.location,
                                                " "),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "Year Launched:"),
                                                " ",
                                                item.year_launched,
                                                " "),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "Coin Pairs:"),
                                                " ",
                                                item.coin_pairs,
                                                " "),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "Maker Fee:"),
                                                " ",
                                                item.maker_fee,
                                                " "),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "Taker Fee:"),
                                                " ",
                                                item.taker_fee,
                                                " "),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "URL:"),
                                                " ",
                                                item.url,
                                                " "))),
                                    React.createElement(core_1.FormControl, { component: "fieldset", className: classes.formControl },
                                        React.createElement(core_1.FormGroup, { className: classes.formGroup },
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "FIAT Payment:"),
                                                " ",
                                                item.fiat_payments,
                                                " "),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "FIAT Supported:"),
                                                " ",
                                                item.fiat_supported.toString().replace(/,/g, ' '),
                                                " "),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "Margin Trading:"),
                                                " ",
                                                item.margin_trading,
                                                " "),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "KYC/AML:"),
                                                " ",
                                                item.kyc_aml,
                                                " "),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "Excluded Resident:"),
                                                " ",
                                                item.excluded_residents,
                                                " "),
                                            React.createElement("span", null,
                                                React.createElement("strong", null, "Contact:"),
                                                " ",
                                                item.email,
                                                " ")))))),
                        React.createElement(core_1.Grid, { item: true, className: classes.dividerWrapper },
                            React.createElement(core_1.Divider, { className: classes.divider })),
                        React.createElement(core_1.Grid, { item: true, id: 'requirements' },
                            React.createElement(core_1.Grid, { container: true, direction: 'column', justify: 'flex-start', alignItems: 'flex-start', spacing: 16 },
                                React.createElement(core_1.Grid, { item: true },
                                    React.createElement(headings_1.H3, null, "KYC Requirements")),
                                React.createElement(core_1.Grid, { item: true, className: classes.requirements },
                                    React.createElement(core_1.Grid, { container: true, direction: 'row', justify: 'flex-start', alignItems: 'center', spacing: 32 }, getKYCRequirements(item.kyc_template, classes)))))))))));
});
exports.default = exports.ItemDetails;
//# sourceMappingURL=item-details.js.map