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
exports.BuyRoundedIcon = void 0;
var React = require("react");
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var styles = core_1.createStyles({
    root: {
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white'
        }
    }
});
exports.BuyRoundedIcon = core_1.withStyles(styles)(function (props) { return (React.createElement(core_2.SvgIcon, __assign({ style: { width: props.width || '34px', height: props.height || '34px' } }, props, { viewBox: props.viewBox || '0 0 34 34' }),
    React.createElement("g", { id: "buy-rounded-icon", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "300.9-transactions-list-buy-rounded-icon", transform: "translate(-327.000000, -652.000000)" },
            React.createElement("g", { id: "Modal-buy-rounded-icon", transform: "translate(268.000000, 153.000000)" },
                React.createElement("g", { id: "Area-Body-buy-rounded-icon" },
                    React.createElement("g", { id: "Table", transform: "translate(30.000000, 207.000000)" },
                        React.createElement("g", { id: "Col-0", transform: "translate(30.000000, 71.000000)" },
                            React.createElement("g", { id: "icon-buy-rounded", transform: "translate(0.000000, 222.000000)" },
                                React.createElement("rect", { id: "Rectangle", stroke: "#1CBA7D", fill: "#161A1F", x: "0", y: "0", width: "32", height: "32", rx: "4" }),
                                React.createElement("path", { d: "M19.3274489,8 C22.2394489,8 24.3560203,9.344 24.3560203,11.2 C24.3497855,11.7878561 24.1267692,12.3527223 23.7297346,12.7862857 C24.1282354,13.2298576 24.3509579,13.8037339 24.3560203,14.4 C24.3497855,14.9878561 24.1267692,15.5527223 23.7297346,15.9862857 C24.1282354,16.4298576 24.3509579,17.0037339 24.3560203,17.6 C24.3497855,18.1878561 24.1267692,18.7527223 23.7297346,19.1862857 C24.1282354,19.6298576 24.3509579,20.2037339 24.3560203,20.8 C24.3560203,22.656 22.1251631,24 19.2131631,24 C16.3011631,24 14.2988774,22.656 14.2988774,20.8 C14.3032394,20.218171 14.5156644,19.6571096 14.8977346,19.2182857 C14.5124249,18.7670003 14.3001594,18.1933973 14.2988774,17.6 C14.3032394,17.018171 14.5156644,16.4571096 14.8977346,16.0182857 C14.5124249,15.5670003 14.3001594,14.9933973 14.2988774,14.4 C14.3032394,13.818171 14.5156644,13.2571096 14.8977346,12.8182857 C14.5124249,12.3670003 14.3001594,11.7933973 14.2988774,11.2 C14.2988774,9.344 16.4154489,8 19.3274489,8 Z M22.6371631,20.0274286 C21.5758938,20.5602773 20.4004162,20.8255052 19.2131631,20.8 C18.0897766,20.8299265 16.9764001,20.5818116 15.9720203,20.0777143 C15.7864251,20.2734265 15.6790723,20.5304225 15.670306,20.8 C15.670306,21.8102857 17.1925917,22.6285714 19.2131631,22.6285714 C21.2337346,22.6285714 22.9845917,21.8102857 22.9845917,20.8 C22.9729557,20.5072588 22.8484457,20.2303879 22.6371631,20.0274286 Z M10.294306,12.1325714 C10.6730155,12.1325714 10.9800203,12.4395762 10.9800203,12.8182857 L10.9800203,12.8182857 L11.0074489,13.2754286 C11.9156925,13.552177 12.5345997,14.3922552 12.5297346,15.3417143 C12.5297346,15.7204238 12.2227298,16.0274286 11.8440203,16.0274286 C11.4653107,16.0274286 11.158306,15.7204238 11.158306,15.3417143 C11.1589393,15.1270602 11.0732834,14.9211566 10.9205917,14.7702857 C10.6014332,14.4678411 10.1014645,14.4678411 9.782306,14.7702857 C9.55334795,15.0009054 9.48560632,15.3466188 9.6105958,15.6465935 C9.73558527,15.9465683 10.028762,16.1418991 10.3537346,16.1417143 L10.3537346,16.1417143 L10.3445917,16.1554286 C11.2931674,16.1537129 12.1489815,16.7246943 12.5116127,17.60122 C12.874244,18.4777458 12.6719768,19.4864705 11.9994489,20.1554286 C11.7136474,20.4380219 11.3591452,20.6412699 10.9708774,20.7451429 L10.9708774,20.7451429 L10.9708774,21.504 C10.9708774,21.8827095 10.6638727,22.1897143 10.2851631,22.1897143 C9.9064536,22.1897143 9.59944885,21.8827095 9.59944885,21.504 L9.59944885,21.504 L9.59944885,20.7131429 C8.55888689,20.3755685 7.89707882,19.3552016 8.01316314,18.2674286 C8.05103409,17.888719 8.38873931,17.6124148 8.76744885,17.6502857 C9.1461584,17.6881567 9.42246267,18.0258619 9.38459171,18.4045714 C9.34489667,18.8033315 9.55471665,19.1853982 9.91250897,19.3658698 C10.2703013,19.5463413 10.7022677,19.4879936 10.9993573,19.2190641 C11.2964469,18.9501347 11.3973821,18.5260928 11.2533151,18.1521543 C11.1092481,17.7782158 10.7498941,17.5315092 10.3491631,17.5314286 C9.29259348,17.5343906 8.38725333,16.7764155 8.20440899,15.735783 C8.02156466,14.6951504 8.614296,13.6739567 9.60859171,13.3165714 L9.60859171,13.3165714 L9.60859171,12.8182857 C9.60859171,12.4395762 9.91559645,12.1325714 10.294306,12.1325714 Z M22.6371631,16.8274286 C21.5758938,17.3602773 20.4004162,17.6255052 19.2131631,17.6 C18.0897766,17.6299265 16.9764001,17.3818116 15.9720203,16.8777143 C15.7864251,17.0734265 15.6790723,17.3304225 15.670306,17.6 C15.670306,18.6102857 17.1925917,19.4285714 19.2131631,19.4285714 C21.2337346,19.4285714 22.9845917,18.6102857 22.9845917,17.6 C22.9729557,17.3072588 22.8484457,17.0303879 22.6371631,16.8274286 Z M22.6371631,13.6274286 C21.5758938,14.1602773 20.4004162,14.4255052 19.2131631,14.4 C18.0897766,14.4299265 16.9764001,14.1818116 15.9720203,13.6777143 C15.7864251,13.8734265 15.6790723,14.1304225 15.670306,14.4 C15.670306,15.4102857 17.1925917,16.2285714 19.2131631,16.2285714 C21.2337346,16.2285714 22.9845917,15.4102857 22.9845917,14.4 C22.9729557,14.1072588 22.8484457,13.8303879 22.6371631,13.6274286 Z M19.3274489,9.37142857 C17.3068774,9.37142857 15.670306,10.1897143 15.670306,11.2 C15.670306,12.2102857 17.1925917,13.0285714 19.2131631,13.0285714 C21.2337346,13.0285714 22.9845917,12.2102857 22.9845917,11.2 C22.9845917,10.1897143 21.3480203,9.37142857 19.3274489,9.37142857 Z", id: "Combined-Shape-buy-rounded-icon", fill: "#1CBA7D" })))))))))); });
exports.default = exports.BuyRoundedIcon;
//# sourceMappingURL=buy-rounded.js.map