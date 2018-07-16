/// <reference types="react" />
import * as React from 'react';
import { StyledComponentProps } from 'react-jss';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
export declare type TokenBoxProps = {
    cryptoCurrencyShort: string;
    cryptoCurrencyName: string;
    CryptoCurrencyIconComponent: React.ComponentType<SvgIconProps>;
    publicKey: string;
    transferAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const TokenBox: React.ComponentType<TokenBoxProps & StyledComponentProps<string>>;
export default TokenBox;
