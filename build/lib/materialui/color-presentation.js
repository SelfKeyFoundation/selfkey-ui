"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhiteCard = exports.ErrorCard = exports.WarningCard = exports.SuccessCard = exports.BaseCard = exports.BaseDarkCard = exports.BaseLightCard = exports.GreyCard = exports.TypographyCard = exports.PrimaryTintCard = exports.PrimaryCard = void 0;
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/styles");
var colors_1 = require("../colors");
exports.PrimaryCard = styles_1.withStyles(styles_1.createStyles({
    root: {
        backgroundColor: colors_1.primary,
        maxWidth: '50px'
    }
}))(core_1.Card);
exports.PrimaryTintCard = styles_1.withStyles(styles_1.createStyles({
    root: {
        backgroundColor: colors_1.primaryTint,
        maxWidth: '50px'
    }
}))(core_1.Card);
exports.TypographyCard = styles_1.withStyles(styles_1.createStyles({
    root: {
        backgroundColor: colors_1.typography,
        maxWidth: '50px'
    }
}))(core_1.Card);
exports.GreyCard = styles_1.withStyles(styles_1.createStyles({
    root: {
        backgroundColor: colors_1.grey,
        maxWidth: '50px'
    }
}))(core_1.Card);
exports.BaseLightCard = styles_1.withStyles(styles_1.createStyles({
    root: {
        backgroundColor: colors_1.baseLight,
        maxWidth: '50px'
    }
}))(core_1.Card);
exports.BaseDarkCard = styles_1.withStyles(styles_1.createStyles({
    root: {
        backgroundColor: colors_1.baseDark,
        maxWidth: '50px'
    }
}))(core_1.Card);
exports.BaseCard = styles_1.withStyles(styles_1.createStyles({
    root: {
        backgroundColor: colors_1.base,
        maxWidth: '50px'
    }
}))(core_1.Card);
exports.SuccessCard = styles_1.withStyles(styles_1.createStyles({
    root: {
        backgroundColor: colors_1.success,
        maxWidth: '50px'
    }
}))(core_1.Card);
exports.WarningCard = styles_1.withStyles(styles_1.createStyles({
    root: {
        backgroundColor: colors_1.warning,
        maxWidth: '50px'
    }
}))(core_1.Card);
exports.ErrorCard = styles_1.withStyles(styles_1.createStyles({
    root: {
        backgroundColor: colors_1.error,
        maxWidth: '50px'
    }
}))(core_1.Card);
exports.WhiteCard = styles_1.withStyles(styles_1.createStyles({
    root: {
        backgroundColor: colors_1.white,
        maxWidth: '50px'
    }
}))(core_1.Card);
//# sourceMappingURL=color-presentation.js.map