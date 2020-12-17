import { Typography } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core';
import { typography, baseDark } from '../colors';
const styles = createStyles({
    root: {
        backgroundColor: baseDark,
        borderRadius: '10px',
        display: 'inline',
        lineHeight: '13px',
        margin: '2px 4px 2px 0',
        padding: '2px 10px'
    },
    body1: {
        fontSize: '12px',
        color: typography
    }
});
export const Tag = withStyles(styles)(Typography);
//# sourceMappingURL=typography.js.map