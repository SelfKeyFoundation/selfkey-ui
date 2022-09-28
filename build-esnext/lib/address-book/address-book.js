import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/styles';
import { Grid, Button, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Typography } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AddressBookIcon from '../icons/address-book';
import CopyIcon from '../icons/copy';
import DeleteIcon from '../icons/delete';
import EditTransparentIcon from '../icons/edit-transparent';
const styles = createStyles({
    addressBook: {
        width: '1140px'
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
            background: '#161A1F'
        }
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
            paddingLeft: '0px'
        },
        '& th:first-child': {
            paddingLeft: '24px !important'
        }
    },
    bodyTableRow: {
        height: '74px',
        cursor: 'pointer',
        '& td': {
            padding: '0px',
            fontSize: '15px',
            textAlign: 'left',
            color: '#ffffff',
            borderBottom: '0px'
        },
        '& td:first-child': {
            paddingLeft: '24px !important'
        }
    }
});
const renderAddresses = (addresses, classes, onEdit, onDelete) => {
    return addresses.map((address, index) => {
        return (React.createElement(TableRow, { key: index, className: classes.bodyTableRow },
            React.createElement(TableCell, { id: address.label }, address.label),
            React.createElement(TableCell, null, address.address),
            React.createElement(TableCell, null,
                React.createElement(Grid, { container: true, direction: "row", justify: "flex-start", alignItems: "center" },
                    React.createElement(Grid, { item: true },
                        React.createElement(IconButton, null,
                            React.createElement(CopyToClipboard, { text: address.address },
                                React.createElement(CopyIcon, null)))),
                    React.createElement(Grid, { item: true },
                        React.createElement(IconButton, { id: "editButton", onClick: () => onEdit(address.id) },
                            React.createElement(EditTransparentIcon, null))),
                    React.createElement(Grid, { item: true },
                        React.createElement(IconButton, { id: "deleteButton", onClick: () => onDelete(address.id) },
                            React.createElement(DeleteIcon, null)))))));
    });
};
export const AddressBook = withStyles(styles)(({ classes, addresses, onEdit, onDelete, onAdd }) => (React.createElement(Grid, { container: true, direction: "column", justify: "center", alignItems: "center", className: classes.addressBook, spacing: 2 },
    React.createElement(Grid, { item: true },
        React.createElement(AddressBookIcon, null)),
    React.createElement(Grid, { item: true },
        React.createElement(Typography, { variant: "h1" }, "Address Book")),
    React.createElement(Grid, { item: true },
        React.createElement(Typography, { variant: "body1", className: classes.descriptionText }, "Create and assign labels to save commonly used Ethereum addresses when sending assets from the SelfKey Identity Wallet.")),
    React.createElement(Grid, { item: true },
        React.createElement(Button, { id: "addAddressButton", className: classes.button, onClick: onAdd }, "ADD ADDRESS")),
    React.createElement(Grid, { item: true },
        React.createElement(Table, { className: classes.table },
            React.createElement(TableHead, null,
                React.createElement(TableRow, { className: classes.headerTableRow },
                    React.createElement(TableCell, null, "LABEL"),
                    React.createElement(TableCell, null, "ETH ADDRESS"),
                    React.createElement(TableCell, { align: "right" }, "ACTIONS"))),
            React.createElement(TableBody, null, renderAddresses(addresses, classes, onEdit, onDelete)))))));
export default AddressBook;
//# sourceMappingURL=address-book.js.map