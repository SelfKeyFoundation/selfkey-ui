import { 
    Paper, 
    Button, 
    withStyles,
} from '@material-ui/core';

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
        boxShadow: '0 50px 70px -50px black',
        boxSizing: 'border-box',
        minHeight: '200px',
        padding: '28px 30px',
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
        height: 0,
        left: 0,
        margin: 0,
        minWidth: 0,
        padding: 0,
        position: 'absolute',
        width: 0,
   },
})(Button);