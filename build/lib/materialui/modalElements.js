"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
exports.ModalHeader = core_1.withStyles({
    root: {
        backgroundColor: '#2A3540',
        border: 'none',
        borderBottom: '1px solid #303C49',
        borderRadius: '3px 3px 0 0',
        boxShadow: 'none',
        boxSizing: 'border-box',
        height: '65px',
        padding: '18px 30px',
        width: '100%',
    },
})(core_1.Paper);
exports.ModalBody = core_1.withStyles({
    root: {
        backgroundColor: '#262F39',
        border: 'none',
        borderRadius: '0 0 3px 3px',
        boxShadow: 'none',
        boxSizing: 'border-box',
        minHeight: '200px',
        padding: '28px 30px',
        width: '100%',
    },
})(core_1.Paper);
exports.ModalCloseButton = core_1.withStyles({
    root: {
        height: 0,
        left: 0,
        margin: 0,
        minWidth: 0,
        padding: 0,
        position: 'absolute',
        width: 0,
    },
})(core_1.Button);
//# sourceMappingURL=modalElements.js.map