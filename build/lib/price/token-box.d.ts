import * as React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
export declare type TokenBoxProps = {
    cryptoCurrencyShort: string;
    cryptoCurrencyName: string;
    CryptoCurrencyIconComponent: React.ComponentType<SvgIconProps>;
    publicKey: string;
    transferAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    children?: any;
};
export declare const TokenBox: React.ComponentType<Pick<TokenBoxProps & {
    classes: Record<"tokenBox" | "tokenBoxBody" | "tokenBoxFooter" | "horizontalDivider" | "addressBox" | "publicKey" | "transferButton" | "cryptoCurrencyName" | "cryptoCurrencyShort", string>;
}, "children" | "publicKey" | "cryptoCurrencyName" | "cryptoCurrencyShort" | "CryptoCurrencyIconComponent" | "transferAction"> & import("@material-ui/core").StyledComponentProps<"tokenBox" | "tokenBoxBody" | "tokenBoxFooter" | "horizontalDivider" | "addressBox" | "publicKey" | "transferButton" | "cryptoCurrencyName" | "cryptoCurrencyShort">>;
export default TokenBox;
