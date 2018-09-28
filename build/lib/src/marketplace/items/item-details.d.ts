/// <reference path="../../../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type ItemProps = {
    name: string;
    logo: string;
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
    excluded_residents: string;
    url: string;
    email: string;
    kyc_template: Array<string>;
};
export declare type ItemDetailsProps = {
    item: ItemProps;
    unlockAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const ItemDetails: React.ComponentType<ItemDetailsProps & import("react-jss").StyledComponentProps<string>>;
export default ItemDetails;
