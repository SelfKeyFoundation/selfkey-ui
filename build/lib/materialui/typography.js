"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var colors_1 = require("../colors");
exports.UnreadNotification = core_1.withStyles({
    root: {
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: '26px',
    },
})(core_1.Typography);
exports.ParagraphLarge = core_1.withStyles({
    root: {
        fontSize: '18px',
        lineHeight: '30px',
    },
})(core_1.Typography);
exports.Paragraph = core_1.withStyles({
    root: {
        fontSize: '16px',
        lineHeight: '24px',
    },
})(core_1.Typography);
exports.Definition = core_1.withStyles({
    root: {
        color: colors_1.typography,
        fontSize: '16px',
        lineHeight: '20px',
    },
})(core_1.Typography);
exports.DefinitionDescription = core_1.withStyles({
    root: {
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '20px',
        zIndex: 1,
    },
})(core_1.Typography);
exports.ExplanatoryLarge = core_1.withStyles({
    root: {
        color: colors_1.typography,
        fontSize: '18px',
        lineHeight: '28px',
    },
})(core_1.Typography);
exports.Explanatory = core_1.withStyles({
    root: {
        color: colors_1.typography,
        fontSize: '13px',
        lineHeight: '19px',
    },
})(core_1.Typography);
exports.TableHeader = core_1.withStyles({
    root: {
        color: colors_1.typography,
        fontSize: '12px',
        fontWeight: 600,
        lineHeight: '15px',
        textTransform: 'uppercase',
        whiteSpace: 'normal',
    },
})(core_1.Typography);
exports.TableText = core_1.withStyles({
    root: {
        fontSize: '15px',
        lineHeight: '18px',
    },
})(core_1.Typography);
exports.TableSmallText = core_1.withStyles({
    root: {
        fontSize: '14px',
        lineHeight: '17px',
    },
})(core_1.Typography);
exports.TableSmallTextDisabled = core_1.withStyles({
    root: {
        color: colors_1.grey,
        fontSize: '14px',
        lineHeight: '17px',
    },
})(core_1.Typography);
exports.FormPlaceholder = core_1.withStyles({
    root: {
        color: colors_1.typography,
        fontSize: '14px',
        lineHeight: '21px',
    },
})(core_1.Typography);
exports.FormLabel = core_1.withStyles({
    root: {
        color: colors_1.typography,
        fontSize: '12px',
        fontWeight: 600,
        lineHeight: '15px',
        textTransform: 'uppercase',
    },
})(core_1.Typography);
exports.ErrorMessage = core_1.withStyles({
    root: {
        color: colors_1.error,
        fontSize: '13px',
        lineHeight: '19px',
    },
})(core_1.Typography);
exports.WarningMessage = core_1.withStyles({
    root: {
        color: colors_1.warning,
        fontSize: '16px',
        lineHeight: '24px',
    },
})(core_1.Typography);
exports.Tag = core_1.withStyles({
    root: {
        backgroundColor: colors_1.baseDark,
        borderRadius: '10px',
        color: colors_1.typography,
        display: 'inline',
        fontSize: '12px',
        lineHeight: '13px',
        margin: '4px 4px 4px 0',
        padding: '2px 10px',
    },
})(core_1.Typography);
//# sourceMappingURL=typography.js.map