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
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var styles = {
    root: {
        width: '66px !important',
        height: '66px !important'
    }
};
exports.ExchangeIcon = react_jss_1.default(styles)(function (props) { return (React.createElement(core_1.SvgIcon, __assign({ viewBox: "0 0 66 66" }, props),
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: "exchange-large-a", x1: "11.084%", x2: "36.071%", y1: "68.339%" },
            React.createElement("stop", { stopColor: "#09A8BA", offset: "0" }),
            React.createElement("stop", { stopColor: "#0ABBD0", offset: "1" }))),
    React.createElement("g", { fill: "none", fillRule: "evenodd" },
        React.createElement("g", { transform: "translate(-375 -273)", fill: "url(#exchange-large-a)", fillRule: "nonzero" },
            React.createElement("g", { transform: "translate(330 159)" },
                React.createElement("path", { d: "m78 114c-18.215 0-33 14.785-33 33s14.785 33 33 33 33-14.785 33-33-14.785-33-33-33zm0 2c17.133 0 31 13.867 31 31 0 17.133-13.867 31-31 31-17.133 0-31-13.867-31-31 0-17.133 13.867-31 31-31zm0 3c-0.55078 0-1 0.44922-1 1s0.44922 1 1 1 1-0.44922 1-1-0.44922-1-1-1zm5.293 0.51562c-0.48828-0.011719-0.91016 0.32812-1.0078 0.80859-0.10547 0.53906 0.24609 1.0664 0.78906 1.1758 0.53906 0.10547 1.0664-0.24609 1.1758-0.78516 0.10547-0.54297-0.24609-1.0703-0.78516-1.1797-0.058594-0.007812-0.11328-0.015625-0.17188-0.019531zm-10.555 0.003906c-0.066406 0-0.13281 0.003907-0.19922 0.015625-0.54297 0.10938-0.89453 0.63672-0.78516 1.1797 0.050782 0.25781 0.20312 0.48828 0.42578 0.63672 0.21875 0.14453 0.48828 0.19922 0.75 0.14844 0.54297-0.10938 0.89453-0.63281 0.78516-1.1758-0.09375-0.46484-0.5-0.80078-0.97656-0.80469zm-5.0625 1.5352c-0.13281 0-0.26562 0.023437-0.39062 0.074218-0.51172 0.21484-0.75391 0.79688-0.53906 1.3086 0.21094 0.51172 0.79297 0.75391 1.3047 0.54297 0.51172-0.21484 0.75391-0.79688 0.54297-1.3086-0.15625-0.37109-0.51562-0.61328-0.91797-0.61719zm20.68 0c-0.41406-0.007813-0.78906 0.23438-0.94922 0.61719-0.21094 0.51172 0.03125 1.0938 0.54297 1.3086 0.51172 0.21094 1.0938-0.03125 1.3047-0.54297 0.21484-0.51172-0.027343-1.0938-0.53906-1.3086-0.11328-0.046875-0.23828-0.070312-0.35938-0.074218zm-25.344 2.4922c-0.20312 0-0.40234 0.058594-0.57031 0.17188-0.45703 0.30469-0.58203 0.92578-0.27344 1.3867 0.30469 0.45703 0.92578 0.58203 1.3867 0.27344 0.46094-0.30469 0.58203-0.92578 0.27734-1.3828-0.18359-0.27734-0.49219-0.44531-0.82031-0.44922zm30.004 0c-0.33984-0.003906-0.66016 0.16406-0.84766 0.44922-0.30859 0.45703-0.18359 1.0781 0.27344 1.3828 0.46094 0.30859 1.082 0.18359 1.3867-0.27344 0.14844-0.21875 0.20312-0.49219 0.15234-0.75-0.050781-0.26172-0.20312-0.49219-0.42578-0.63672-0.16016-0.10938-0.34375-0.16797-0.53906-0.17188zm-34.094 3.3594c-0.26953 0-0.53125 0.10547-0.71875 0.29688-0.39062 0.38672-0.39062 1.0234 0 1.4102 0.38672 0.39062 1.0234 0.39062 1.4102 0 0.39062-0.38672 0.39062-1.0234 0-1.4102-0.18359-0.1875-0.42969-0.29297-0.69141-0.29688zm38.184 0c-0.26953 0-0.53125 0.10547-0.71875 0.29688-0.39062 0.38672-0.39062 1.0234 0 1.4102 0.38672 0.39062 1.0234 0.39062 1.4102 0 0.39062-0.38672 0.39062-1.0234 0-1.4102-0.18359-0.1875-0.42969-0.29297-0.69141-0.29688zm3.3555 4.0938c-0.20312-0.003906-0.39844 0.054688-0.56641 0.16797-0.45703 0.30469-0.58203 0.92578-0.27344 1.3828 0.30469 0.46094 0.92578 0.58594 1.3828 0.27734 0.46094-0.30859 0.58594-0.92578 0.27734-1.3867-0.18359-0.27344-0.49219-0.44141-0.82031-0.44141zm-44.895 0c-0.33984-0.007812-0.66016 0.16016-0.84766 0.44141-0.30469 0.46094-0.18359 1.082 0.27734 1.3867 0.46094 0.30859 1.0781 0.18359 1.3867-0.27344 0.30469-0.46094 0.18359-1.082-0.27734-1.3867-0.16016-0.10547-0.34375-0.16406-0.53906-0.16797zm22.434 0c-8.4844 0-15.43 6.6445-15.949 15h-5.0508l6.5 6.5 6.5-6.5h-4.9492c0.51172-6.7031 6.1172-12 12.949-12 3.8398 0 7.2812 1.6836 9.6641 4.3359l2.1172-2.1172c-2.9258-3.1992-7.1172-5.2188-11.781-5.2188zm24.953 4.668c-0.13281-0.003906-0.26562 0.023437-0.39062 0.074219-0.51172 0.21094-0.75391 0.79688-0.54297 1.3047 0.21484 0.51172 0.79688 0.75391 1.3086 0.54297 0.51172-0.21094 0.75391-0.79688 0.54297-1.3086-0.15625-0.36719-0.51562-0.61328-0.91797-0.61328zm-49.875 0c-0.41406-0.007813-0.78906 0.23438-0.94531 0.61719-0.21094 0.51172 0.03125 1.0938 0.53906 1.3086 0.51172 0.21094 1.0977-0.03125 1.3086-0.54297 0.21094-0.51172-0.03125-1.0938-0.54297-1.3047-0.11328-0.050781-0.23438-0.074219-0.35938-0.078125zm51.406 5.0664c-0.066406-0.003906-0.13281 0.003906-0.19922 0.015625-0.53906 0.10938-0.89062 0.63672-0.78516 1.1758 0.10938 0.54297 0.63672 0.89453 1.1758 0.78906 0.54297-0.10938 0.89453-0.63672 0.78906-1.1797-0.09375-0.46484-0.50391-0.80078-0.98047-0.80078zm-52.938 0c-0.48828-0.011719-0.91016 0.32422-1.0078 0.80078-0.050782 0.26172 0 0.53516 0.14844 0.75391 0.14844 0.22266 0.37891 0.375 0.64062 0.42578 0.25781 0.050781 0.52734-0.003906 0.75-0.14844 0.21875-0.14844 0.37109-0.37891 0.42188-0.64062 0.10938-0.53906-0.24219-1.0664-0.78125-1.1758-0.058594-0.007812-0.11328-0.015625-0.17188-0.015625zm40.953 0.76562l-6.5 6.5h4.9492c-0.51172 6.7031-6.1172 12-12.949 12-3.8398 0-7.2812-1.6836-9.6641-4.3359l-2.1172 2.1172c2.9258 3.1992 7.1172 5.2188 11.781 5.2188 8.4844 0 15.43-6.6445 15.949-15h5.0508l-6.5-6.5zm-41.5 4.5c-0.55078 0-1 0.44922-1 1s0.44922 1 1 1 1-0.44922 1-1-0.44922-1-1-1zm54 0c-0.55078 0-1 0.44922-1 1s0.44922 1 1 1 1-0.44922 1-1-0.44922-1-1-1zm-53.477 5.2656c-0.066407 0-0.13281 0.007813-0.19922 0.019531-0.54297 0.10938-0.89453 0.63672-0.78516 1.1797 0.10938 0.53906 0.63281 0.89062 1.1758 0.78516 0.54297-0.10938 0.89453-0.63672 0.78516-1.1758-0.09375-0.46875-0.5-0.80469-0.97656-0.80859zm52.984 0c-0.48828-0.011719-0.91016 0.32812-1.0078 0.80859-0.10547 0.53906 0.24609 1.0664 0.78516 1.1758 0.54297 0.10547 1.0703-0.24609 1.1797-0.78516 0.10547-0.54297-0.24609-1.0703-0.78906-1.1797-0.054687-0.007812-0.10938-0.015625-0.16797-0.019531zm-1.5391 5.0625c-0.41406-0.007812-0.78906 0.23828-0.94922 0.62109-0.21094 0.50781 0.03125 1.0938 0.54297 1.3047 0.51172 0.21094 1.0938-0.03125 1.3086-0.53906 0.21094-0.51172-0.03125-1.0977-0.54297-1.3086-0.11328-0.046875-0.23828-0.074219-0.35938-0.078125zm-49.906 0.003906c-0.13281 0-0.26562 0.023438-0.39062 0.074219-0.24219 0.10156-0.4375 0.29688-0.53906 0.54297-0.10156 0.24609-0.10156 0.51953-0.003907 0.76562 0.21484 0.51172 0.79688 0.75391 1.3086 0.53906 0.24609-0.097656 0.44141-0.29297 0.54297-0.53906 0.10156-0.24609 0.10156-0.51953 0-0.76562-0.15234-0.37109-0.51562-0.61328-0.91797-0.61719zm47.406 4.668c-0.33984-0.007812-0.66016 0.16016-0.84766 0.44141-0.30859 0.46094-0.18359 1.0781 0.27344 1.3867 0.21875 0.14844 0.49219 0.20312 0.75 0.14844 0.26172-0.050782 0.49219-0.20312 0.63672-0.42578 0.30859-0.45703 0.18359-1.0781-0.27734-1.3828-0.15625-0.10938-0.34375-0.16797-0.53516-0.16797zm-44.906 0c-0.20312-0.003906-0.39844 0.054688-0.56641 0.16797-0.45703 0.30859-0.58203 0.92578-0.27734 1.3867 0.30859 0.45703 0.92969 0.58203 1.3906 0.27344 0.45703-0.30469 0.58203-0.92578 0.27344-1.3867-0.18359-0.27344-0.49219-0.4375-0.82031-0.44141zm3.3594 4.0938c-0.26953-0.003906-0.53125 0.10156-0.71875 0.29297-0.39062 0.38672-0.39062 1.0234 0 1.4102 0.38672 0.39062 1.0234 0.39062 1.4102 0 0.39062-0.38672 0.39062-1.0234 0-1.4102-0.18359-0.1875-0.42969-0.29297-0.69141-0.29297zm38.184 0c-0.26953-0.003906-0.53125 0.10156-0.71875 0.29297-0.39062 0.38672-0.39062 1.0234 0 1.4102 0.38672 0.39062 1.0234 0.39062 1.4102 0 0.39062-0.38672 0.39062-1.0234 0-1.4102-0.18359-0.1875-0.42969-0.29297-0.69141-0.29297zm-34.086 3.3555c-0.33984-0.007813-0.66016 0.16016-0.84766 0.44141-0.30859 0.46094-0.18359 1.082 0.27734 1.3906 0.45703 0.30469 1.0781 0.17969 1.3828-0.27734 0.30859-0.46094 0.18359-1.0781-0.27344-1.3867-0.16016-0.10547-0.34766-0.16797-0.53906-0.16797zm29.992 0c-0.20312-0.003906-0.39844 0.054687-0.56641 0.16406-0.22266 0.14844-0.375 0.37891-0.42578 0.64062-0.050781 0.25781 0.003907 0.53125 0.15234 0.75 0.30469 0.45703 0.92578 0.58203 1.3867 0.27734 0.45703-0.30859 0.58203-0.92969 0.27344-1.3906-0.17969-0.27344-0.48828-0.44141-0.82031-0.44141zm-25.32 2.4922c-0.41406-0.007812-0.78906 0.23828-0.94531 0.62109-0.21094 0.50781 0.03125 1.0938 0.53906 1.3047 0.51172 0.21094 1.0977-0.03125 1.3086-0.53906 0.21094-0.51172-0.03125-1.0977-0.54297-1.3086-0.11328-0.046875-0.23438-0.074218-0.35938-0.078125zm20.648 0c-0.13281 0-0.26562 0.027344-0.38672 0.078125-0.24609 0.10156-0.44141 0.29688-0.54297 0.53906-0.10156 0.24609-0.10156 0.52344-0.003906 0.76953 0.21484 0.50781 0.79688 0.75 1.3086 0.53906 0.24609-0.10156 0.44141-0.29688 0.54297-0.53906 0.10156-0.24609 0.10156-0.52344 0-0.76562-0.15234-0.375-0.51562-0.61719-0.91797-0.62109zm-15.578 1.5391c-0.48828-0.011719-0.91406 0.32812-1.0078 0.80469-0.10938 0.54297 0.24219 1.0664 0.78516 1.1758 0.54297 0.10938 1.0664-0.24219 1.1758-0.78516 0.10938-0.54297-0.24219-1.0664-0.78516-1.1758-0.054688-0.011719-0.11328-0.019531-0.16797-0.019531zm10.508 0.003906c-0.066406-0.003906-0.13281 0.003906-0.19531 0.015625-0.54297 0.10938-0.89453 0.63281-0.78906 1.1758 0.054688 0.26172 0.20703 0.48828 0.42578 0.63672 0.22266 0.14844 0.49219 0.20312 0.75391 0.15234 0.25781-0.054688 0.48828-0.20703 0.63672-0.42578 0.14453-0.22266 0.19922-0.49219 0.14844-0.75391-0.09375-0.46484-0.50391-0.80078-0.98047-0.80078zm-5.2695 0.51562c-0.55078 0-1 0.44922-1 1s0.44922 1 1 1 1-0.44922 1-1-0.44922-1-1-1z" })))))); });
exports.default = exports.ExchangeIcon;
//# sourceMappingURL=exchange-large.js.map