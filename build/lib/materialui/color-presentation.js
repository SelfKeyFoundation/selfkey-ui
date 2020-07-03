import { Card } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/styles';
import { primary, primaryTint, typography, grey, baseLight, baseDark, base, success, warning, error, white, } from '../colors';
export var PrimaryCard = withStyles(createStyles({
    root: {
        backgroundColor: primary,
        maxWidth: '50px',
    },
}))(Card);
export var PrimaryTintCard = withStyles(createStyles({
    root: {
        backgroundColor: primaryTint,
        maxWidth: '50px',
    },
}))(Card);
export var TypographyCard = withStyles(createStyles({
    root: {
        backgroundColor: typography,
        maxWidth: '50px',
    },
}))(Card);
export var GreyCard = withStyles(createStyles({
    root: {
        backgroundColor: grey,
        maxWidth: '50px',
    },
}))(Card);
export var BaseLightCard = withStyles(createStyles({
    root: {
        backgroundColor: baseLight,
        maxWidth: '50px',
    },
}))(Card);
export var BaseDarkCard = withStyles(createStyles({
    root: {
        backgroundColor: baseDark,
        maxWidth: '50px',
    },
}))(Card);
export var BaseCard = withStyles(createStyles({
    root: {
        backgroundColor: base,
        maxWidth: '50px',
    },
}))(Card);
export var SuccessCard = withStyles(createStyles({
    root: {
        backgroundColor: success,
        maxWidth: '50px',
    },
}))(Card);
export var WarningCard = withStyles(createStyles({
    root: {
        backgroundColor: warning,
        maxWidth: '50px',
    },
}))(Card);
export var ErrorCard = withStyles(createStyles({
    root: {
        backgroundColor: error,
        maxWidth: '50px',
    },
}))(Card);
export var WhiteCard = withStyles(createStyles({
    root: {
        backgroundColor: white,
        maxWidth: '50px',
    },
}))(Card);
//# sourceMappingURL=color-presentation.js.map