import { Paper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { base } from '../colors';
export const ModalWrap = withStyles({
    root: {
        backgroundColor: base,
        boxSizing: 'border-box',
        boxShadow: '0 7px 15px 0 rgba(0, 0, 0, 0.2)',
        left: 'calc(50% - 390px)',
        margin: '0 auto',
        outline: 'none',
        position: 'absolute',
        top: '150px',
        width: '780px',
        marginBottom: '50px',
    },
})(Paper);
export const ModalHeader = withStyles({
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
})(Paper);
export const ModalBody = withStyles({
    root: {
        backgroundColor: '#262F39',
        border: 'none',
        borderRadius: '0 0 3px 3px',
        boxShadow: 'none',
        boxSizing: 'border-box',
        minHeight: '200px',
        padding: '30px 45px 60px',
        width: '100%',
    },
})(Paper);
export const SmallModalBody = withStyles({
    root: {
        backgroundColor: '#262F39',
        border: 'none',
        borderRadius: '0 0 3px 3px',
        boxShadow: 'none',
        boxSizing: 'border-box',
        minHeight: '200px',
        padding: '30px 30px 40px',
        width: '100%',
    },
})(Paper);
export const ModalBody2 = withStyles({
    root: {
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        boxSizing: 'border-box',
        margin: '0 auto',
        width: '780px',
    },
})(Paper);
export const ModalCloseButton = withStyles({
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
})(Button);
//# sourceMappingURL=modalElements.js.map