import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
const styles = createStyles({
    root: {
        '& a': {
            color: '#23E6FE',
            textDecoration: 'none',
        },
        '& a &:hover': {
            textDecoration: 'underline'
        },
        padding: '60px 70px 80px',
    },
});
export const LWSModalBody = withStyles(styles)(({ classes, children }) => (React.createElement("div", { className: classes.root }, children)));
export default LWSModalBody;
//# sourceMappingURL=lws-modal-body.js.map