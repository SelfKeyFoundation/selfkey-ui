/// <reference path="../../../../src/react-jss.d.ts" />
import * as React from 'react';
import { StyleSheet, ClassNameMap, WithStyles } from 'react-jss';
declare const styles: StyleSheet;
export declare type Logo = {
    filename: string;
    url: string;
};
export declare type KYCTemplate = {
    name: string;
    type: string;
    isEntered: boolean;
};
export declare type ItemProps = {
    name: string;
    logo: Array<Logo>;
    status: string;
    releaseDate?: number;
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
    kyc_template: Array<KYCTemplate>;
};
export declare type ItemDetailsProps = {
    item: ItemProps;
    unlockAction?: Function;
    hasBalance: boolean;
    backAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare type ItemDetailsState = {
    isDescriptionTruncated: boolean;
};
export declare type StyledProps = WithStyles<keyof typeof styles> & ItemDetailsProps;
export declare class ItemDetailsComponent extends React.Component<StyledProps, ItemDetailsState> {
    state: {
        isDescriptionTruncated: boolean;
    };
    constructor(props: StyledProps);
    getKYCRequirements(requirements: Array<KYCTemplate>, classes: Partial<ClassNameMap<string>>): JSX.Element[];
    unlockActionCall(unlockAction: Function | undefined, item: ItemProps, hasBalance: boolean): void;
    handleViewAllDetails(): void;
    renderDescription(description: string): string | JSX.Element;
    render(): JSX.Element;
}
export declare const ItemDetails: React.ComponentType<ItemDetailsProps & import("react-jss").StyledComponentProps<string>>;
export default ItemDetails;
