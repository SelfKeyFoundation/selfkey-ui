"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuiVisibilityIcon = void 0;
var styles_1 = require("@material-ui/styles");
var icons_1 = require("@material-ui/icons");
var colors_1 = require("../colors");
exports.MuiVisibilityIcon = styles_1.withStyles(styles_1.createStyles({
    root: {
        fill: colors_1.grey,
        height: '20px',
        width: '20px',
        '&:hover': {
            fill: colors_1.white
        }
    }
}))(icons_1.VisibilityOutlined);
//# sourceMappingURL=muivisibility.js.map