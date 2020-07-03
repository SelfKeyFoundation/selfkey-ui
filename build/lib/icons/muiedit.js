import { withStyles, createStyles } from '@material-ui/styles';
import { EditOutlined } from '@material-ui/icons';
import { grey, white } from '../colors';
export var MuiEditIcon = withStyles(createStyles({
    root: {
        fill: grey,
        height: '20px',
        width: '20px',
        '&:hover': {
            fill: white,
        },
    },
}))(EditOutlined);
//# sourceMappingURL=muiedit.js.map