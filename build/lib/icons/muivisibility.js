import { withStyles } from '@material-ui/styles';
import { VisibilityOutlined } from '@material-ui/icons';
import { grey, white } from '../colors';
export const MuiVisibilityIcon = withStyles({
    root: {
        fill: grey,
        height: '20px',
        width: '20px',
        '&:hover': {
            fill: white,
        },
    },
})(VisibilityOutlined);
//# sourceMappingURL=muivisibility.js.map