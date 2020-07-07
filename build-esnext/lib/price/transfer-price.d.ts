import * as React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
export declare type TransferPriceProps = {
    cryptoCurrencyShort: string;
    cryptoCurrencyName: string;
    CryptoCurrencyIconComponent: React.ComponentType<SvgIconProps>;
    children: any;
};
export declare const TransferPrice: React.ComponentType<Pick<TransferPriceProps & {
    classes: Record<"cryptoCurrencyName" | "cryptoCurrencyShort", string>;
}, "children" | "cryptoCurrencyName" | "cryptoCurrencyShort" | "CryptoCurrencyIconComponent"> & import("@material-ui/core").StyledComponentProps<"cryptoCurrencyName" | "cryptoCurrencyShort">>;
export default TransferPrice;
