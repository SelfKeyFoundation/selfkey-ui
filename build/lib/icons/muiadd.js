import { withStyles, createStyles } from '@material-ui/styles';
import { AddCircleOutlineOutlined } from '@material-ui/icons';
import { grey, white } from '../colors';
export var MuiAddIcon = withStyles(createStyles({
    root: {
        fill: grey,
        height: '20px',
        width: '20px',
        '&:hover': {
            fill: white,
        },
    },
}))(AddCircleOutlineOutlined);
//# sourceMappingURL=muiadd.js.map