"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.LWSSelectWallet = exports.LWSSelectWalletComponent = exports.styles = void 0;
var React = require("react");
var _ = require("lodash");
var styles_1 = require("@material-ui/styles");
var id_1 = require("../icons/id");
var profile_1 = require("../icons/profile");
var stick_1 = require("../icons/stick");
var lws_button_1 = require("./lws-button");
var common_style_1 = require("../common/common-style");
var core_1 = require("@material-ui/core");
exports.styles = styles_1.createStyles({
    areaTitle: {
        textAlign: 'center'
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 'normal',
        fontSize: '16px',
        padding: '25px 0px',
        margin: '0px',
        color: '#23E6FE'
    },
    form: common_style_1.default.form,
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0px 0px 30px',
        '&& label': {
            fontSize: '12px',
            color: '#93B0C1',
            textTransform: 'uppercase',
            padding: '0px 0px 5px 0px',
            fontFamily: 'Lato, arial, sans-serif'
        }
    },
    radioReplace: {
        padding: '20px 0px 45px',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonTertiary: {
        height: '80px',
        padding: '20px',
        boxSizing: 'border-box',
        border: '1px solid #1D505F',
        borderRadius: '4px',
        background: '#293743',
        color: '#fff',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer',
            background: '#374a5a'
        },
        '& svg': {
            padding: '0px 15px 0px 0px'
        },
        fontFamily: 'Lato, arial, sans-serif',
        fontWeight: 700,
        maxWidth: 'calc(50% - 15px)',
        width: '100%'
    },
    formControl: {
        width: '100%',
        background: '#202A33',
        color: '#fff',
        border: '1px solid #0DC7DD',
        fontSize: '16px',
        padding: '16px',
        height: '52px',
        boxSizing: 'border-box',
        borderRadius: '3px',
        fontFamily: 'Lato, arial, sans-serif',
        '&:focus': {
            outline: 'none',
            boxShadow: '0 0 5px rgba(81, 203, 238, 1)'
        }
    },
    formSubmitRow: {
        marginTop: '15px'
    },
    button: {
        fontSize: '14px',
        lineHeight: '20px',
        padding: '10px',
        height: '50px',
        fontWeight: 700
    },
    buttonPrimary: __assign(__assign({}, common_style_1.default.buttonPrimary), { fontWeight: 700 }),
    buttonSecondary: __assign(__assign({}, common_style_1.default.buttonSecondary), { fontWeight: 700 }),
    selected: {
        border: "2px solid #1CA9BA"
    },
    supportText: {
        textAlign: 'center',
        lineHeight: '22px',
        fontFamily: 'Lato, arial, sans-serif',
        color: '#C5DCE9',
        padding: '0 0 30px',
        fontSize: '16px'
    },
    validationMsg: {
        display: 'block',
        fontSize: '13px',
        color: '#FE4B61',
        padding: '5px 0 0'
    },
    validationError: {
        border: '1px solid #D0021B',
        color: '#FE4B61',
        '&:focus': {
            boxShadow: '0 0 5px rgba(254, 75, 97, 1)'
        }
    }
});
var LWSSelectWalletComponent = /** @class */ (function (_super) {
    __extends(LWSSelectWalletComponent, _super);
    function LWSSelectWalletComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isHardwareWallet: false,
            wallet: null,
            password: ''
        };
        return _this;
    }
    LWSSelectWalletComponent.prototype.componentDidMount = function () {
        if (this.props.wallets && this.props.wallets.length && !this.state.wallet) {
            this.selectWallet();
        }
    };
    LWSSelectWalletComponent.prototype.componentDidUpdate = function () {
        if (this.props.wallets && this.props.wallets.length && !this.state.wallet) {
            this.selectWallet();
        }
    };
    LWSSelectWalletComponent.prototype.toggleIsHardwallet = function (isHardwareWallet) {
        return this.setState({ isHardwareWallet: isHardwareWallet });
    };
    LWSSelectWalletComponent.prototype.selectWallet = function (publicKey) {
        var wallets = this.props.wallets;
        if (!publicKey) {
            publicKey = wallets[0].publicKey;
        }
        var wallet = _.find(wallets, { publicKey: publicKey }) || null;
        this.setState({ wallet: wallet, password: '' });
        return wallet;
    };
    LWSSelectWalletComponent.prototype.setWallet = function (event) {
        this.selectWallet(event.target.value);
    };
    LWSSelectWalletComponent.prototype.setPassword = function (event) {
        this.setState(__assign(__assign({}, this.state), { password: event.target.value }));
    };
    LWSSelectWalletComponent.prototype.login = function () {
        var loginAction = this.props.loginAction;
        var wallet = this.state.wallet;
        var password = this.state.password;
        if (!wallet || !wallet.publicKey) {
            wallet = this.selectWallet();
        }
        if (!loginAction || !wallet) {
            return;
        }
        if (!wallet.unlocked && !password) {
            return;
        }
        return loginAction(wallet, password);
    };
    LWSSelectWalletComponent.prototype.renderHardwareWallet = function () {
        var classes = this.props.classes;
        return (React.createElement("div", null,
            React.createElement("p", { className: classes.supportText }, "Ledger and Trezor support is coming soon")));
        // return (
        // 	<div>
        // 		<p className={classes.supportText}>
        // 			Make sure your Ledger or Trezor device is plugged in via USB. Press the Connect to hardware
        // 			wallet button below.
        // 		</p>
        // 		<div>
        // 			<LWSButton className={classes.buttonPrimary} onClick={connectToHardwareWalletAction}>
        // 				Connect to hardware wallet
        // 			</LWSButton>
        // 			<LWSButton className={classes.buttonSecondary}>Retry</LWSButton>
        // 		</div>
        // 	</div>
        // );
    };
    LWSSelectWalletComponent.prototype.renderSelection = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, passwordError = _a.passwordError, wallets = _a.wallets;
        var _b = this.state, wallet = _b.wallet, password = _b.password, isHardwareWallet = _b.isHardwareWallet;
        var publicKey = wallet ? wallet.publicKey : '';
        if (isHardwareWallet) {
            return this.renderHardwareWallet();
        }
        else {
            return (React.createElement("div", null,
                React.createElement("div", { className: classes.formGroup },
                    React.createElement("label", null, "Choose an existing ETH Address"),
                    React.createElement("select", { id: "eth-address", className: classes.formControl, onChange: function (evt) { return _this.setWallet(evt); }, value: publicKey }, wallets
                        .filter(function (w) { return w.profile === 'local'; })
                        .map(function (w, index) {
                        return (React.createElement("option", { key: index, value: w.publicKey },
                            "0x",
                            w.publicKey.replace('0x', '')));
                    }))),
                wallet && wallet.unlocked ? null : (React.createElement("div", { className: classes.formGroup },
                    React.createElement("label", null, "Password"),
                    React.createElement("input", { type: "password", ref: "password", id: "password", className: classes.formControl + " " + (passwordError ? classes.validationError : ''), onChange: function (evt) { return _this.setPassword(evt); }, placeholder: "Enter your password", value: password }),
                    passwordError && (React.createElement("div", { className: classes.validationMsg }, "Incorrect Password. Please try again.")))),
                React.createElement("div", { className: classes.formSubmitRow },
                    React.createElement(lws_button_1.LWSButton, { className: classes.buttonPrimary, onClick: function () { return _this.login(); } }, "Log in"))));
        }
    };
    LWSSelectWalletComponent.prototype.render = function () {
        var _this = this;
        var classes = this.props.classes;
        var isHardwareWallet = this.state.isHardwareWallet;
        return (React.createElement("div", null,
            React.createElement("div", { className: classes.areaTitle },
                React.createElement(id_1.IDIcon, null),
                React.createElement(core_1.Typography, { variant: "h2", className: classes.title }, "Verify Ownership Of Your SelfKey ID")),
            React.createElement("div", { className: classes.form },
                React.createElement("div", { className: classes.formGroup + " " + classes.radioReplace },
                    React.createElement("button", { className: classes.buttonTertiary + " " + (!isHardwareWallet ? classes.selected : ''), onClick: function () { return _this.toggleIsHardwallet(false); } },
                        React.createElement(profile_1.ProfileIcon, null),
                        " ",
                        React.createElement("span", null, "ETH Address")),
                    React.createElement("button", { className: classes.buttonTertiary + " " + (isHardwareWallet ? classes.selected : ''), onClick: function () { return _this.toggleIsHardwallet(true); } },
                        React.createElement(stick_1.StickIcon, null),
                        " ",
                        React.createElement("span", null, "Trezor/Ledger"))),
                this.renderSelection())));
    };
    return LWSSelectWalletComponent;
}(React.Component));
exports.LWSSelectWalletComponent = LWSSelectWalletComponent;
exports.LWSSelectWallet = styles_1.withStyles(exports.styles)(LWSSelectWalletComponent);
exports.default = exports.LWSSelectWallet;
//# sourceMappingURL=lws-select-wallet.js.map