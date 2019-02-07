"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
exports.ClipboardIcon = (function (props) { return (React.createElement(core_1.SvgIcon, __assign({ width: "30px", height: "36px" }, props, { viewBox: "0 0 30 36" }),
    React.createElement("title", null, "icon-copy-clipboard"),
    React.createElement("g", { id: "\uD83D\uDDA5-Main-Dashboard", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
        React.createElement("g", { id: "351-Receive-KEY", transform: "translate(-608.000000, -687.000000)", fill: "#93B0C1", "fill-rule": "nonzero" },
            React.createElement("g", { id: "Modal", transform: "translate(341.000000, 235.000000)" },
                React.createElement("g", { id: "icons", transform: "translate(267.000000, 452.000000)" },
                    React.createElement("g", { id: "icon-copy-clipboard" },
                        React.createElement("path", { d: "M12.6760563,0 C11.1806777,0 9.98833639,1.11113544 9.73679577,2.53521127 L1.52112676,2.53521127 C0.687280056,2.53521127 0,3.22249132 0,4.05633803 L0,30.4225352 C0,31.2563819 0.687280056,31.943662 1.52112676,31.943662 L23.8309859,31.943662 C24.6648326,31.943662 25.3521127,31.2563819 25.3521127,30.4225352 L25.3521127,4.05633803 C25.3521127,3.22249132 24.6648326,2.53521127 23.8309859,2.53521127 L15.6153169,2.53521127 C15.3637763,1.11113544 14.171435,0 12.6760563,0 Z M12.6760563,1.01408451 C13.8010563,1.01408451 14.7042254,1.91725352 14.7042254,3.04225352 L14.7042254,3.54929577 L17.7464789,3.54929577 L17.7464789,5.57746479 C17.7464789,5.86465656 17.5266284,6.08450704 17.2394366,6.08450704 L8.11267606,6.08450704 C7.82548428,6.08450704 7.6056338,5.86465656 7.6056338,5.57746479 L7.6056338,3.54929577 L10.6478873,3.54929577 L10.6478873,3.04225352 C10.6478873,1.91725352 11.5510563,1.01408451 12.6760563,1.01408451 Z M12.6760563,2.53521127 C12.3967871,2.53521127 12.1690141,2.76298428 12.1690141,3.04225352 C12.1690141,3.32152276 12.3967871,3.54929577 12.6760563,3.54929577 C12.9553256,3.54929577 13.1830986,3.32152276 13.1830986,3.04225352 C13.1830986,2.76298428 12.9553256,2.53521127 12.6760563,2.53521127 Z M1.52112676,3.54929577 L6.5915493,3.54929577 L6.5915493,5.57746479 C6.5915493,6.41131149 7.27882935,7.09859155 8.11267606,7.09859155 L17.2394366,7.09859155 C18.0732833,7.09859155 18.7605634,6.41131149 18.7605634,5.57746479 L18.7605634,3.54929577 L23.8309859,3.54929577 C24.1181777,3.54929577 24.3380282,3.76914625 24.3380282,4.05633803 L24.3380282,30.4225352 C24.3380282,30.709727 24.1181777,30.9295775 23.8309859,30.9295775 L1.52112676,30.9295775 C1.23393499,30.9295775 1.01408451,30.709727 1.01408451,30.4225352 L1.01408451,4.05633803 C1.01408451,3.76914625 1.23393499,3.54929577 1.52112676,3.54929577 Z M10.6478873,16.7323944 C10.3686181,16.7323944 10.1408451,16.9601674 10.1408451,17.2394366 C10.1408451,17.5187059 10.3686181,17.7464789 10.6478873,17.7464789 C10.9271566,17.7464789 11.1549296,17.5187059 11.1549296,17.2394366 C11.1549296,16.9601674 10.9271566,16.7323944 10.6478873,16.7323944 Z M12.6760563,16.7323944 C12.3967871,16.7323944 12.1690141,16.9601674 12.1690141,17.2394366 C12.1690141,17.5187059 12.3967871,17.7464789 12.6760563,17.7464789 C12.9553256,17.7464789 13.1830986,17.5187059 13.1830986,17.2394366 C13.1830986,16.9601674 12.9553256,16.7323944 12.6760563,16.7323944 Z M14.7042254,16.7323944 C14.4249561,16.7323944 14.1971831,16.9601674 14.1971831,17.2394366 C14.1971831,17.5187059 14.4249561,17.7464789 14.7042254,17.7464789 C14.9834946,17.7464789 15.2112676,17.5187059 15.2112676,17.2394366 C15.2112676,16.9601674 14.9834946,16.7323944 14.7042254,16.7323944 Z M16.7323944,16.7323944 C16.4531251,16.7323944 16.2253521,16.9601674 16.2253521,17.2394366 C16.2253521,17.5187059 16.4531251,17.7464789 16.7323944,17.7464789 C17.0116636,17.7464789 17.2394366,17.5187059 17.2394366,17.2394366 C17.2394366,16.9601674 17.0116636,16.7323944 16.7323944,16.7323944 Z M18.7605634,16.7323944 C18.4812941,16.7323944 18.2535211,16.9601674 18.2535211,17.2394366 C18.2535211,17.5187059 18.4812941,17.7464789 18.7605634,17.7464789 C19.0398326,17.7464789 19.2676056,17.5187059 19.2676056,17.2394366 C19.2676056,16.9601674 19.0398326,16.7323944 18.7605634,16.7323944 Z M20.7887324,16.7323944 C20.5094632,16.7323944 20.2816901,16.9601674 20.2816901,17.2394366 C20.2816901,17.5187059 20.5094632,17.7464789 20.7887324,17.7464789 C21.0680016,17.7464789 21.2957746,17.5187059 21.2957746,17.2394366 C21.2957746,16.9601674 21.0680016,16.7323944 20.7887324,16.7323944 Z M22.8169014,16.7323944 C22.5376322,16.7323944 22.3098592,16.9601674 22.3098592,17.2394366 C22.3098592,17.5187059 22.5376322,17.7464789 22.8169014,17.7464789 C23.0961706,17.7464789 23.3239437,17.5187059 23.3239437,17.2394366 C23.3239437,16.9601674 23.0961706,16.7323944 22.8169014,16.7323944 Z M26.8732394,16.7323944 C26.5939702,16.7323944 26.3661972,16.9601674 26.3661972,17.2394366 C26.3661972,17.5187059 26.5939702,17.7464789 26.8732394,17.7464789 C27.1525087,17.7464789 27.3802817,17.5187059 27.3802817,17.2394366 C27.3802817,16.9601674 27.1525087,16.7323944 26.8732394,16.7323944 Z M28.9014085,16.7323944 C28.6221392,16.7323944 28.3943662,16.9601674 28.3943662,17.2394366 C28.3943662,17.5187059 28.6221392,17.7464789 28.9014085,17.7464789 C29.1806777,17.7464789 29.4084507,17.5187059 29.4084507,17.2394366 C29.4084507,16.9601674 29.1806777,16.7323944 28.9014085,16.7323944 Z M10.6478873,18.7605634 C10.3686181,18.7605634 10.1408451,18.9883364 10.1408451,19.2676056 C10.1408451,19.5468749 10.3686181,19.7746479 10.6478873,19.7746479 C10.9271566,19.7746479 11.1549296,19.5468749 11.1549296,19.2676056 C11.1549296,18.9883364 10.9271566,18.7605634 10.6478873,18.7605634 Z M28.9014085,18.7605634 C28.6221392,18.7605634 28.3943662,18.9883364 28.3943662,19.2676056 C28.3943662,19.5468749 28.6221392,19.7746479 28.9014085,19.7746479 C29.1806777,19.7746479 29.4084507,19.5468749 29.4084507,19.2676056 C29.4084507,18.9883364 29.1806777,18.7605634 28.9014085,18.7605634 Z M10.6478873,20.7887324 C10.3686181,20.7887324 10.1408451,21.0165054 10.1408451,21.2957746 C10.1408451,21.5750439 10.3686181,21.8028169 10.6478873,21.8028169 C10.9271566,21.8028169 11.1549296,21.5750439 11.1549296,21.2957746 C11.1549296,21.0165054 10.9271566,20.7887324 10.6478873,20.7887324 Z M28.9014085,20.7887324 C28.6221392,20.7887324 28.3943662,21.0165054 28.3943662,21.2957746 C28.3943662,21.5750439 28.6221392,21.8028169 28.9014085,21.8028169 C29.1806777,21.8028169 29.4084507,21.5750439 29.4084507,21.2957746 C29.4084507,21.0165054 29.1806777,20.7887324 28.9014085,20.7887324 Z M10.6478873,22.8169014 C10.3686181,22.8169014 10.1408451,23.0446744 10.1408451,23.3239437 C10.1408451,23.6032129 10.3686181,23.8309859 10.6478873,23.8309859 C10.9271566,23.8309859 11.1549296,23.6032129 11.1549296,23.3239437 C11.1549296,23.0446744 10.9271566,22.8169014 10.6478873,22.8169014 Z M28.9014085,22.8169014 C28.6221392,22.8169014 28.3943662,23.0446744 28.3943662,23.3239437 C28.3943662,23.6032129 28.6221392,23.8309859 28.9014085,23.8309859 C29.1806777,23.8309859 29.4084507,23.6032129 29.4084507,23.3239437 C29.4084507,23.0446744 29.1806777,22.8169014 28.9014085,22.8169014 Z M10.6478873,24.8450704 C10.3686181,24.8450704 10.1408451,25.0728434 10.1408451,25.3521127 C10.1408451,25.6313819 10.3686181,25.8591549 10.6478873,25.8591549 C10.9271566,25.8591549 11.1549296,25.6313819 11.1549296,25.3521127 C11.1549296,25.0728434 10.9271566,24.8450704 10.6478873,24.8450704 Z M28.9014085,24.8450704 C28.6221392,24.8450704 28.3943662,25.0728434 28.3943662,25.3521127 C28.3943662,25.6313819 28.6221392,25.8591549 28.9014085,25.8591549 C29.1806777,25.8591549 29.4084507,25.6313819 29.4084507,25.3521127 C29.4084507,25.0728434 29.1806777,24.8450704 28.9014085,24.8450704 Z M10.6478873,26.8732394 C10.3686181,26.8732394 10.1408451,27.1010125 10.1408451,27.3802817 C10.1408451,27.6595509 10.3686181,27.8873239 10.6478873,27.8873239 C10.9271566,27.8873239 11.1549296,27.6595509 11.1549296,27.3802817 C11.1549296,27.1010125 10.9271566,26.8732394 10.6478873,26.8732394 Z M28.9014085,26.8732394 C28.6221392,26.8732394 28.3943662,27.1010125 28.3943662,27.3802817 C28.3943662,27.6595509 28.6221392,27.8873239 28.9014085,27.8873239 C29.1806777,27.8873239 29.4084507,27.6595509 29.4084507,27.3802817 C29.4084507,27.1010125 29.1806777,26.8732394 28.9014085,26.8732394 Z M10.6478873,28.9014085 C10.3686181,28.9014085 10.1408451,29.1291815 10.1408451,29.4084507 C10.1408451,29.6877199 10.3686181,29.915493 10.6478873,29.915493 C10.9271566,29.915493 11.1549296,29.6877199 11.1549296,29.4084507 C11.1549296,29.1291815 10.9271566,28.9014085 10.6478873,28.9014085 Z M28.9014085,28.9014085 C28.6221392,28.9014085 28.3943662,29.1291815 28.3943662,29.4084507 C28.3943662,29.6877199 28.6221392,29.915493 28.9014085,29.915493 C29.1806777,29.915493 29.4084507,29.6877199 29.4084507,29.4084507 C29.4084507,29.1291815 29.1806777,28.9014085 28.9014085,28.9014085 Z M28.9014085,30.9295775 C28.6221392,30.9295775 28.3943662,31.1573505 28.3943662,31.4366197 C28.3943662,31.715889 28.6221392,31.943662 28.9014085,31.943662 C29.1806777,31.943662 29.4084507,31.715889 29.4084507,31.4366197 C29.4084507,31.1573505 29.1806777,30.9295775 28.9014085,30.9295775 Z M10.6478873,32.9577465 C10.3686181,32.9577465 10.1408451,33.1855195 10.1408451,33.4647887 C10.1408451,33.744058 10.3686181,33.971831 10.6478873,33.971831 C10.9271566,33.971831 11.1549296,33.744058 11.1549296,33.4647887 C11.1549296,33.1855195 10.9271566,32.9577465 10.6478873,32.9577465 Z M28.9014085,32.9577465 C28.6221392,32.9577465 28.3943662,33.1855195 28.3943662,33.4647887 C28.3943662,33.744058 28.6221392,33.971831 28.9014085,33.971831 C29.1806777,33.971831 29.4084507,33.744058 29.4084507,33.4647887 C29.4084507,33.1855195 29.1806777,32.9577465 28.9014085,32.9577465 Z M10.6478873,34.9859155 C10.3686181,34.9859155 10.1408451,35.2136885 10.1408451,35.4929577 C10.1408451,35.772227 10.3686181,36 10.6478873,36 C10.9271566,36 11.1549296,35.772227 11.1549296,35.4929577 C11.1549296,35.2136885 10.9271566,34.9859155 10.6478873,34.9859155 Z M12.6760563,34.9859155 C12.3967871,34.9859155 12.1690141,35.2136885 12.1690141,35.4929577 C12.1690141,35.772227 12.3967871,36 12.6760563,36 C12.9553256,36 13.1830986,35.772227 13.1830986,35.4929577 C13.1830986,35.2136885 12.9553256,34.9859155 12.6760563,34.9859155 Z M14.7042254,34.9859155 C14.4249561,34.9859155 14.1971831,35.2136885 14.1971831,35.4929577 C14.1971831,35.772227 14.4249561,36 14.7042254,36 C14.9834946,36 15.2112676,35.772227 15.2112676,35.4929577 C15.2112676,35.2136885 14.9834946,34.9859155 14.7042254,34.9859155 Z M16.7323944,34.9859155 C16.4531251,34.9859155 16.2253521,35.2136885 16.2253521,35.4929577 C16.2253521,35.772227 16.4531251,36 16.7323944,36 C17.0116636,36 17.2394366,35.772227 17.2394366,35.4929577 C17.2394366,35.2136885 17.0116636,34.9859155 16.7323944,34.9859155 Z M18.7605634,34.9859155 C18.4812941,34.9859155 18.2535211,35.2136885 18.2535211,35.4929577 C18.2535211,35.772227 18.4812941,36 18.7605634,36 C19.0398326,36 19.2676056,35.772227 19.2676056,35.4929577 C19.2676056,35.2136885 19.0398326,34.9859155 18.7605634,34.9859155 Z M20.7887324,34.9859155 C20.5094632,34.9859155 20.2816901,35.2136885 20.2816901,35.4929577 C20.2816901,35.772227 20.5094632,36 20.7887324,36 C21.0680016,36 21.2957746,35.772227 21.2957746,35.4929577 C21.2957746,35.2136885 21.0680016,34.9859155 20.7887324,34.9859155 Z M22.8169014,34.9859155 C22.5376322,34.9859155 22.3098592,35.2136885 22.3098592,35.4929577 C22.3098592,35.772227 22.5376322,36 22.8169014,36 C23.0961706,36 23.3239437,35.772227 23.3239437,35.4929577 C23.3239437,35.2136885 23.0961706,34.9859155 22.8169014,34.9859155 Z M24.8450704,34.9859155 C24.5658012,34.9859155 24.3380282,35.2136885 24.3380282,35.4929577 C24.3380282,35.772227 24.5658012,36 24.8450704,36 C25.1243397,36 25.3521127,35.772227 25.3521127,35.4929577 C25.3521127,35.2136885 25.1243397,34.9859155 24.8450704,34.9859155 Z M26.8732394,34.9859155 C26.5939702,34.9859155 26.3661972,35.2136885 26.3661972,35.4929577 C26.3661972,35.772227 26.5939702,36 26.8732394,36 C27.1525087,36 27.3802817,35.772227 27.3802817,35.4929577 C27.3802817,35.2136885 27.1525087,34.9859155 26.8732394,34.9859155 Z M28.9014085,34.9859155 C28.6221392,34.9859155 28.3943662,35.2136885 28.3943662,35.4929577 C28.3943662,35.772227 28.6221392,36 28.9014085,36 C29.1806777,36 29.4084507,35.772227 29.4084507,35.4929577 C29.4084507,35.2136885 29.1806777,34.9859155 28.9014085,34.9859155 Z", id: "Shape" })))))))); });
exports.default = exports.ClipboardIcon;
//# sourceMappingURL=clipboard.js.map