import { Card } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { primary, primaryTint, typography, grey, baseLight, baseDark, base, success, warning, error, white, } from '../colors';
export const PrimaryCard = withStyles({
    root: {
        backgroundColor: primary,
        maxWidth: '50px',
    },
})(Card);
export const PrimaryTintCard = withStyles({
    root: {
        backgroundColor: primaryTint,
        maxWidth: '50px',
    },
})(Card);
export const TypographyCard = withStyles({
    root: {
        backgroundColor: typography,
        maxWidth: '50px',
    },
})(Card);
export const GreyCard = withStyles({
    root: {
        backgroundColor: grey,
        maxWidth: '50px',
    },
})(Card);
export const BaseLightCard = withStyles({
    root: {
        backgroundColor: baseLight,
        maxWidth: '50px',
    },
})(Card);
export const BaseDarkCard = withStyles({
    root: {
        backgroundColor: baseDark,
        maxWidth: '50px',
    },
})(Card);
export const BaseCard = withStyles({
    root: {
        backgroundColor: base,
        maxWidth: '50px',
    },
})(Card);
export const SuccessCard = withStyles({
    root: {
        backgroundColor: success,
        maxWidth: '50px',
    },
})(Card);
export const WarningCard = withStyles({
    root: {
        backgroundColor: warning,
        maxWidth: '50px',
    },
})(Card);
export const ErrorCard = withStyles({
    root: {
        backgroundColor: error,
        maxWidth: '50px',
    },
})(Card);
export const WhiteCard = withStyles({
    root: {
        backgroundColor: white,
        maxWidth: '50px',
    },
})(Card);
//# sourceMappingURL=color-presentation.js.map