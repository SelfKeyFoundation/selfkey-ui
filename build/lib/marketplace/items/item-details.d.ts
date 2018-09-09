/// <reference path="../../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type Logo = {
    filename: string;
    url: string;
};
export declare type ItemProps = {
    name: string;
    logo: Array<Logo>;
    status: string;
    integration: string;
    description: string;
    location: string;
    year_launched: number;
    coin_pairs: string;
    maker_fee: string;
    taker_fee: string;
    fiat_payments: string;
    fiat_supported: Array<string>;
    margin_trading: string;
    kyc_aml: string;
    excluded_residents: Array<string>;
    url: string;
    email: string;
    kyc_template: Array<string>;
};
export declare type ItemDetailsProps = {
    item: ItemProps;
    unlockAction?: Function;
    hasBalance: boolean;
};
export declare const ItemDetails: React.ComponentType<ItemDetailsProps & import("react-jss").StyledComponentProps<string>>;
export default ItemDetails;
