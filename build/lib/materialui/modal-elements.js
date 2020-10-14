"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalCloseButton = exports.ModalBody2 = exports.SmallModalBody = exports.ModalBody = exports.ModalHeader = exports.ModalWrap = void 0;
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/styles");
var colors_1 = require("../colors");
exports.ModalWrap = styles_1.withStyles(styles_1.createStyles({
    root: {
        backgroundColor: colors_1.base,
        boxSizing: 'border-box',
        boxShadow: '0 7px 15px 0 rgba(0, 0, 0, 0.2)',
        left: 'calc(50% - 390px)',
        margin: '0 auto',
        outline: 'none',
        position: 'absolute',
        top: '150px',
        width: '780px',
        marginBottom: '48px',
    },
}))(core_1.Paper);
exports.ModalHeader = styles_1.withStyles(styles_1.createStyles({
    root: {
        alignItems: 'center',
        backgroundColor: '#2A3540',
        border: 'none',
        borderBottom: '1px solid #303C49',
        borderRadius: '3px 3px 0 0',
        boxShadow: 'none',
        boxSizing: 'border-box',
        display: 'flex',
        height: '65px',
        justifyContent: 'space-between',
        padding: '16px 32px',
        width: '100%',
    },
}))(core_1.Paper);
exports.ModalBody = styles_1.withStyles(styles_1.createStyles({
    root: {
        backgroundColor: '#262F39',
        border: 'none',
        borderRadius: '0 0 3px 3px',
        boxShadow: 'none',
        boxSizing: 'border-box',
        minHeight: '200px',
        padding: '32px 40px 56px',
        width: '100%',
    },
}))(core_1.Paper);
exports.SmallModalBody = styles_1.withStyles(styles_1.createStyles({
    root: {
        backgroundColor: '#262F39',
        border: 'none',
        borderRadius: '0 0 3px 3px',
        boxShadow: 'none',
        boxSizing: 'border-box',
        minHeight: '200px',
        padding: '32px 32px 40px',
        width: '100%',
    },
}))(core_1.Paper);
exports.ModalBody2 = styles_1.withStyles(styles_1.createStyles({
    root: {
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        boxSizing: 'border-box',
        margin: '0 auto',
        width: '780px',
    },
}))(core_1.Paper);
exports.ModalCloseButton = styles_1.withStyles(styles_1.createStyles({
    root: {
        border: 0,
        borderRadius: '50%',
        height: '40px',
        left: 'auto',
        margin: 0,
        minWidth: 0,
        padding: 0,
        position: 'absolute',
        right: '-20px',
        top: '-20px',
        width: '40px',
    }
}))(core_1.Button);
//# sourceMappingURL=modal-elements.js.map