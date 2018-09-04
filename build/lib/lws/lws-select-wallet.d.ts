/// <reference path="../../../src/react-jss.d.ts" />
import * as React from 'react';
import { StyleSheet, WithStyles } from 'react-jss';
import { Wallet } from './lws-common';
export declare const styles: StyleSheet;
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
export declare type StyledProps = WithStyles<keyof typeof styles> & LWSSelectWalletProps;
export declare class LWSSelectWalletComponent extends React.Component<StyledProps, LWSSelectWalletState> {
    constructor(props: StyledProps);
    componentDiUpdate(prevProps: LWSSelectWalletProps, props: LWSSelectWalletProps): void;
    toggleIsHardwallet(isHardwareWallet: boolean): void;
    selectWallet(publicKey?: string): Wallet | null;
    setWallet(event: React.ChangeEvent<HTMLSelectElement>): void;
    setPassword(event: React.ChangeEvent<HTMLInputElement>): void;
    login(): void;
    renderHardwareWallet(): JSX.Element;
    renderSelection(): JSX.Element;
    render(): JSX.Element;
}
export declare const LWSSelectWallet: React.ComponentType<LWSSelectWalletProps & import("react-jss").StyledComponentProps<string>>;
export default LWSSelectWallet;
