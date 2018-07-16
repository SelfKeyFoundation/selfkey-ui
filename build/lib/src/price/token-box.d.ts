/// <reference types="react" />
import * as React from 'react';
import { SFC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
export declare type TokenBoxProps = {
    cryptoCurrencyShort: string;
    cryptoCurrencyName: string;
    CryptoCurrencyIconComponent: SFC<SvgIconProps>;
    publicKey: string;
    transferAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
/** Test description */
export declare const TokenBox: SFC<TokenBoxProps>;
export default TokenBox;
