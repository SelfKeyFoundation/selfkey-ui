import * as React from 'react';
import { WithStyles } from '@material-ui/core';
import { Wallet } from './lws-common';
export declare const styles: Record<"button" | "form" | "title" | "selected" | "formControl" | "areaTitle" | "formGroup" | "radioReplace" | "buttonTertiary" | "formSubmitRow" | "buttonPrimary" | "buttonSecondary" | "supportText" | "validationMsg" | "validationError", import("@material-ui/core/styles/withStyles").CSSProperties | import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}>)>;
export declare type LWSSelectWalletProps = {
    loginAction?: (wallet: Wallet, password: string) => void;
    connectToHardwareWalletAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    passwordError?: boolean;
    wallets: Array<Wallet>;
};
export declare type LWSSelectWalletState = {
    isHardwareWallet: boolean;
    wallet: Wallet | null;
    password: string;
};
export declare type StyledProps = WithStyles<typeof styles> & LWSSelectWalletProps;
export declare class LWSSelectWalletComponent extends React.Component<StyledProps, LWSSelectWalletState> {
    constructor(props: StyledProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    toggleIsHardwallet(isHardwareWallet: boolean): void;
    selectWallet(publicKey?: string): Wallet | null;
    setWallet(event: React.ChangeEvent<HTMLSelectElement>): void;
    setPassword(event: React.ChangeEvent<HTMLInputElement>): void;
    login(): void;
    renderHardwareWallet(): JSX.Element;
    renderSelection(): JSX.Element;
    render(): JSX.Element;
}
export declare const LWSSelectWallet: React.ComponentType<Pick<StyledProps, "loginAction" | "connectToHardwareWalletAction" | "passwordError" | "wallets"> & import("@material-ui/core").StyledComponentProps<"button" | "form" | "title" | "selected" | "formControl" | "areaTitle" | "formGroup" | "radioReplace" | "buttonTertiary" | "formSubmitRow" | "buttonPrimary" | "buttonSecondary" | "supportText" | "validationMsg" | "validationError">>;
export default LWSSelectWallet;
