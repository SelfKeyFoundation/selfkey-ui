/// <reference path="../../../src/react-jss.d.ts" />
import * as React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
export declare type TokenBoxProps = {
    cryptoCurrencyShort: string;
    cryptoCurrencyName: string;
    CryptoCurrencyIconComponent: React.ComponentType<SvgIconProps>;
    publicKey: string;
    transferAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const TokenBox: React.ComponentType<TokenBoxProps & import("react-jss").StyledComponentProps<string>>;
export default TokenBox;
