"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var colors_1 = require("../colors");
exports.MuiEditIcon = core_1.withStyles({
    root: {
        fill: colors_1.grey,
        height: '20px',
        width: '20px',
        '&:hover': {
            fill: colors_1.white,
        },
    },
})(icons_1.EditOutlined);
//# sourceMappingURL=muiedit.js.map