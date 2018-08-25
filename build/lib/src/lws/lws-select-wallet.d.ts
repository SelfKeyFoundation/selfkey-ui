/// <reference path="../../../../src/react-jss.d.ts" />
import * as React from 'react';
import { StyleSheet, WithStyles } from 'react-jss';
export declare const styles: StyleSheet;
export declare type Wallet = {
    publicKey: string;
};
export declare type LWSSelectWalletProps = {
    loginAction?: (publicKey: string, password: string) => void;
    connectToHardwareWalletAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    passwordError?: boolean;
    wallets: Array<Wallet>;
};
export declare type LWSSelectWalletState = {
    isHardwareWallet: boolean;
    publicKey: string;
    password: string;
};
export declare type StyledProps = WithStyles<keyof typeof styles> & LWSSelectWalletProps;
export declare class LWSSelectWalletComponent extends React.Component<StyledProps, LWSSelectWalletState> {
    state: {
        isHardwareWallet: boolean;
        publicKey: string;
        password: string;
    };
    constructor(props: StyledProps);
    toggleIsHardwallet(isHardwareWallet: boolean): void;
    setWallet(event: React.ChangeEvent<HTMLSelectElement>): void;
    setPassword(event: React.ChangeEvent<HTMLSelectElement>): void;
    login(): void;
    renderSelection(): JSX.Element;
    render(): JSX.Element;
}
export declare const LWSSelectWallet: React.ComponentType<LWSSelectWalletProps & import("react-jss").StyledComponentProps<string>>;
export default LWSSelectWallet;
