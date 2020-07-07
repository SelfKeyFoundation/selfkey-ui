import * as React from 'react';
import { WithStyles } from '@material-ui/core';
declare const styles: Record<"root" | "thumb" | "sliderRoot" | "trackAfter" | "trackBefore" | "activated" | "sliderLabels" | "networkFeeValue" | "rightAligned", import("@material-ui/core/styles/withStyles").CSSProperties | import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}>)>;
export declare type TransactionFeeSliderSelectorProps = {
    minGasPrice: number;
    maxGasPrice: number;
    slowPrice: number;
    mediumPrice: number;
    fastPrice: number;
    transactionPrices?: any;
    gasLimit: number;
    fiat: string;
    fiatRate: number;
    defaultValue?: number;
    value?: number;
    onChange: (value: number) => void;
};
declare type StyledProps = WithStyles<typeof styles> & TransactionFeeSliderSelectorProps;
export declare const TransactionFeeSliderSelector: React.ComponentType<Pick<StyledProps, "defaultValue" | "onChange" | "value" | "gasLimit" | "minGasPrice" | "maxGasPrice" | "fiat" | "fiatRate" | "slowPrice" | "mediumPrice" | "fastPrice" | "transactionPrices"> & import("@material-ui/core").StyledComponentProps<"root" | "thumb" | "sliderRoot" | "trackAfter" | "trackBefore" | "activated" | "sliderLabels" | "networkFeeValue" | "rightAligned">>;
export default TransactionFeeSliderSelector;
