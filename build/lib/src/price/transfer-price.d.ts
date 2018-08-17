import * as React from 'react';
import { StyledComponentProps } from 'react-jss';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
export declare type TransferPriceProps = {
    cryptoCurrencyShort: string;
    cryptoCurrencyName: string;
    CryptoCurrencyIconComponent: React.ComponentType<SvgIconProps>;
};
export declare const TransferPrice: React.ComponentType<TransferPriceProps & StyledComponentProps<string>>;
export default TransferPrice;
