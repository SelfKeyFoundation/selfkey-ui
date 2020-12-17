import * as React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
export declare type TokenBoxProps = {
    cryptoCurrencyShort: string;
    cryptoCurrencyName: string;
    CryptoCurrencyIconComponent: React.ComponentType<SvgIconProps>;
    publicKey: string;
    transferAction?: (event: React.MouseEvent<HTMLElement>) => void;
    children?: any;
};
export declare const TokenBox: React.ComponentType<Pick<TokenBoxProps & {
    classes: Record<"cryptoCurrencyName" | "cryptoCurrencyShort" | "publicKey" | "horizontalDivider" | "tokenBox" | "tokenBoxBody" | "tokenBoxFooter" | "addressBox" | "transferButton", string>;
}, "cryptoCurrencyName" | "cryptoCurrencyShort" | "children" | "CryptoCurrencyIconComponent" | "publicKey" | "transferAction"> & import("@material-ui/core").StyledComponentProps<"cryptoCurrencyName" | "cryptoCurrencyShort" | "publicKey" | "horizontalDivider" | "tokenBox" | "tokenBoxBody" | "tokenBoxFooter" | "addressBox" | "transferButton">>;
export default TokenBox;
