/// <reference path="../../../src/react-jss.d.ts" />
import * as React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
export declare type TransferPriceProps = {
    cryptoCurrencyShort: string;
    cryptoCurrencyName: string;
    CryptoCurrencyIconComponent: React.ComponentType<SvgIconProps>;
};
export declare const TransferPrice: React.ComponentType<TransferPriceProps & import("react-jss").StyledComponentProps<string>>;
export default TransferPrice;
