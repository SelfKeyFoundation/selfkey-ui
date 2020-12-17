import * as React from 'react';
import { WithStyles } from '@material-ui/styles';
import { Wallet } from './lws-common';
export declare const styles: Record<"button" | "form" | "title" | "areaTitle" | "formGroup" | "radioReplace" | "buttonTertiary" | "formControl" | "formSubmitRow" | "buttonPrimary" | "buttonSecondary" | "selected" | "supportText" | "validationMsg" | "validationError", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
export declare type LWSSelectWalletProps = {
    loginAction?: (wallet: Wallet, password: string) => void;
    connectToHardwareWalletAction?: (event: React.MouseEvent<HTMLElement>) => void;
    passwordError?: boolean;
    wallets: Wallet[];
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
export declare const LWSSelectWallet: React.ComponentType<Pick<StyledProps, "loginAction" | "connectToHardwareWalletAction" | "passwordError" | "wallets"> & import("@material-ui/styles").StyledComponentProps<"button" | "form" | "title" | "areaTitle" | "formGroup" | "radioReplace" | "buttonTertiary" | "formControl" | "formSubmitRow" | "buttonPrimary" | "buttonSecondary" | "selected" | "supportText" | "validationMsg" | "validationError">>;
export default LWSSelectWallet;
