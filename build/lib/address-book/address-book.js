"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressBook = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var react_copy_to_clipboard_1 = require("react-copy-to-clipboard");
var address_book_1 = require("../icons/address-book");
var copy_1 = require("../icons/copy");
var delete_1 = require("../icons/delete");
var edit_transparent_1 = require("../icons/edit-transparent");
var styles = core_1.createStyles({
    addressBook: {
        width: '1140px',
    },
    button: {
        height: '44px',
        width: '180px',
        border: '2px solid #1CA9BA',
        borderRadius: '3px',
        boxShadow: 'inset 3px 3px 10px 0 rgba(0,0,0,0.1)',
        color: '#1CA9BA',
        fontSize: '16px',
        fontWeight: 'bold',
        letterSpacing: '0.67px',
        lineHeight: '19px',
        textAlign: 'center'
    },
    descriptionText: {
        color: '#93B0C1',
        fontSize: '18px',
        lineHeight: '28px',
        textAlign: 'center'
    },
    table: {
        borderSpacing: '0px',
        minWidth: '900px',
        '& tbody tr:nth-child(odd)': {
            background: '#262f39',
        },
    },
    headerTableRow: {
        height: '38px',
        '& th': {
            fontSize: '12px',
            fontWeight: 600,
            textAlign: 'left',
            color: '#7f8fa4',
            textTransform: 'uppercase',
            borderBottom: '0px',
            paddingLeft: '0px',
        },
        '& th:first-child': {
            paddingLeft: '24px !important',
        },
    },
    bodyTableRow: {
        height: '74px',
        cursor: 'pointer',
        '& td': {
            padding: '0px',
            fontSize: '15px',
            textAlign: 'left',
            color: '#ffffff',
            borderBottom: '0px',
        },
        '& td:first-child': {
            paddingLeft: '24px !important',
        },
    },
});
var renderAddresses = function (addresses, classes, onEdit, onDelete) {
    return addresses.map(function (address, index) {
        return (React.createElement(core_2.TableRow, { key: index, className: classes.bodyTableRow },
            React.createElement(core_2.TableCell, { id: address.label }, address.label),
            React.createElement(core_2.TableCell, null, address.address),
            React.createElement(core_2.TableCell, null,
                React.createElement(core_2.Grid, { container: true, direction: 'row', justify: 'flex-start', alignItems: 'center' },
                    React.createElement(core_2.Grid, { item: true },
                        React.createElement(core_2.IconButton, null,
                            React.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: address.address },
                                React.createElement(copy_1.default, null)))),
                    React.createElement(core_2.Grid, { item: true },
                        React.createElement(core_2.IconButton, { id: 'editButton', onClick: function () { return onEdit(address.id); } },
                            React.createElement(edit_transparent_1.default, null))),
                    React.createElement(core_2.Grid, { item: true },
                        React.createElement(core_2.IconButton, { id: 'deleteButton', onClick: function () { return onDelete(address.id); } },
                            React.createElement(delete_1.default, null)))))));
    });
};
exports.AddressBook = core_1.withStyles(styles)(function (_a) {
    var classes = _a.classes, addresses = _a.addresses, onEdit = _a.onEdit, onDelete = _a.onDelete, onAdd = _a.onAdd;
    return (React.createElement(core_2.Grid, { container: true, direction: 'column', justify: 'center', alignItems: 'center', className: classes.addressBook, spacing: 2 },
        React.createElement(core_2.Grid, { item: true },
            React.createElement(address_book_1.default, null)),
        React.createElement(core_2.Grid, { item: true },
            React.createElement(core_2.Typography, { variant: "h1" }, "Address Book")),
        React.createElement(core_2.Grid, { item: true },
            React.createElement(core_2.Typography, { variant: 'body1', className: classes.descriptionText }, "Create and assign labels to save commonly used Ethereum addresses when sending assets from the SelfKey Identity Wallet.")),
        React.createElement(core_2.Grid, { item: true },
            React.createElement(core_2.Button, { id: 'addAddressButton', className: classes.button, onClick: onAdd }, "ADD ADDRESS")),
        React.createElement(core_2.Grid, { item: true },
            React.createElement(core_2.Table, { className: classes.table },
                React.createElement(core_2.TableHead, null,
                    React.createElement(core_2.TableRow, { className: classes.headerTableRow },
                        React.createElement(core_2.TableCell, null, "LABEL"),
                        React.createElement(core_2.TableCell, null, "ETH ADDRESS"),
                        React.createElement(core_2.TableCell, { align: "right" }, "ACTIONS"))),
                React.createElement(core_2.TableBody, null, renderAddresses(addresses, classes, onEdit, onDelete))))));
});
exports.default = exports.AddressBook;
//# sourceMappingURL=address-book.js.map