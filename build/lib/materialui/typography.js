import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { typography, baseDark } from '../colors';
export const Tag = withStyles({
    root: {
        backgroundColor: baseDark,
        borderRadius: '10px',
        display: 'inline',
        lineHeight: '13px',
        margin: '2px 4px 2px 0',
        padding: '2px 10px',
    },
    body1: {
        fontSize: '12px',
        color: typography,
    }
})(Typography);
//# sourceMappingURL=typography.js.map